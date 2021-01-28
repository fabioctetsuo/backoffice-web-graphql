import { firebase } from 'client/firebase';
import { FormProps } from 'context/auth-context';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { withBasePath } from 'utils/withBasePath';

export const firebaseLogin = (form: FormProps): Promise<firebase.auth.UserCredential> => {
  return firebase.auth().signInWithEmailAndPassword(form.email, form.password);
};

export const firebaseLogout = (): Promise<void> => {
  return firebase.auth().signOut();
};

export type TokenProps = {
  roles: string[];
  iss: string;
  aud: string;
  auth_time: number;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
  user_uid: string;
  profile: string;
  isBetaTester: boolean;
};

export const decodeToken = (token = ''): TokenProps | null => {
  if (!token) return null;
  const [, base64Url] = token.split('.');
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
};

export const authSSR = async (ctx: GetServerSidePropsContext) => {
  const { resolvedUrl } = ctx;

  const redirectToLogin = () => {
    ctx.res.writeHead(302, {
      Location: withBasePath(`/login${resolvedUrl === '/' ? '' : `?url=${resolvedUrl}`}`),
    });
    ctx.res.end();
  };

  try {
    const { token } = nookies.get(ctx);

    if (!decodeToken(token)) {
      redirectToLogin();
    }
    return { props: { token } };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    console.error('Authentication error: ', err);
    redirectToLogin();

    return { props: {} as never };
  }
};
