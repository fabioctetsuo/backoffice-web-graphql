import React, { useEffect } from 'react';
import nookies from 'nookies';

import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';

import { makeStyles } from '@material-ui/core/styles';
import GlobalStyle from 'styles/global';
import theme from 'theme';

import { SnackbarProvider } from 'notistack';
import AppProviders from 'context';
import { AuthProvider } from 'context/auth-context';

const useStyles = makeStyles({
  error: { background: `${theme.palette.error.main} !important` },
  success: { background: `${theme.palette.success.main} !important` },
});

type RouterProps = {
  token: string;
};

const MyApp = ({ Component, pageProps, token: cookieToken }: AppProps & RouterProps) => {
  const classes = useStyles();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentNode?.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>Plataforma Health Hub</title>
      </Head>
      <GlobalStyle />
      <SnackbarProvider
        classes={{ variantError: classes.error, variantSuccess: classes.success }}
        hideIconVariant
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <AuthProvider>
          <AppProviders token={cookieToken}>
            <Component {...pageProps} />
          </AppProviders>
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { token } = nookies.get(appContext.ctx);

  return {
    token,
    ...appProps,
  };
};

export default MyApp;
