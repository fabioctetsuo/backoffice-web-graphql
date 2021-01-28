import React, {
  ReactChild,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import { firebase } from 'client/firebase';
import { firebaseLogin, firebaseLogout, decodeToken } from 'utils/authentication';
import useToast from 'hooks/useToast';
import strings from 'strings';
import nookies from 'nookies';
import { useRouter } from 'next/router';

export type AuthContextProps = {
  login: (form: FormProps) => Promise<void>;
  logout: () => Promise<void>;
  user: User | null;
  isLoading: boolean;
};

type AuthProviderProps = {
  children: ReactChild;
  value?: AuthContextProps;
};

export type FormProps = {
  email: string;
  password: string;
};

export type User = {
  displayName: string | null;
  email: string | null;
  token: string;
  roles: string[];
};

type FirebaseUserProps = {
  user: firebase.User | null;
};

export const isHHUser = (user: User) => {
  const ACCEPTED_ROLES = ['hh-staff', 'admin'];
  return user.roles.some(value => ACCEPTED_ROLES.includes(value));
};

const getUser = async (userFirebase: firebase.User | null): Promise<User | null> => {
  if (!userFirebase) return null;

  const token = await userFirebase.getIdToken();
  const { roles = [] } = decodeToken(token) ?? {};
  return {
    displayName: userFirebase.displayName,
    email: userFirebase.email,
    token,
    roles,
  };
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});
AuthContext.displayName = 'AuthContext';

function AuthProvider(props: AuthProviderProps) {
  const router = useRouter();
  const sendToast = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleSetUser = async (userFirebase: firebase.User | null) => {
    const user = await getUser(userFirebase);
    if (user) {
      if (isHHUser(user)) {
        setUser(user);
        nookies.set(undefined, 'token', user.token, {
          path: '/',
        });
      } else {
        sendToast(strings.login.errors.unauthorized, 'warning');
        setUser(null);
        nookies.set(undefined, 'token', '', {
          path: '/',
        });
      }
    } else {
      setUser(null);
      nookies.set(undefined, 'token', '', {
        path: '/',
      });
    }
    setLoading(false);
  };

  const removeLoading = () => setLoading(false);

  const handleLogin = async ({ user: userFirebase }: FirebaseUserProps) =>
    handleSetUser(userFirebase);

  const handleLogout = () => {
    router.push('/login');
    setUser(null);
  };

  useEffect(() => {
    setLoading(true);
    firebase.auth().onIdTokenChanged(handleSetUser);
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) await currentUser.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  const login = useCallback(
    form => {
      setLoading(true);
      return firebaseLogin(form).then(handleLogin).finally(removeLoading);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setLoading(true);
    return firebaseLogout().then(handleLogout).finally(removeLoading);
  }, [setUser]);

  const value = useMemo(() => ({ user, login, logout, isLoading }), [
    login,
    logout,
    user,
    isLoading,
  ]);

  return <AuthContext.Provider value={props.value ?? value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
