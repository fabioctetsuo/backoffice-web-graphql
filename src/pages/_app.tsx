import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global';

import AppProviders from 'context';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
};

export default MyApp;
