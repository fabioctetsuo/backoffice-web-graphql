import React, { ReactChild } from 'react';
import fetch from 'cross-fetch';
import theme from 'theme';

import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as ThemeProviderStyledComponent } from 'styled-components';

import { InMemoryCache, ApolloClient, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from '@apollo/client/link/context';
import { withBasePath } from 'utils/withBasePath';

type AppProviderdProps = {
  children: ReactChild;
  token: string;
};

function AppProviders({ children, token }: AppProviderdProps) {
  const httpLink = new HttpLink({ uri: withBasePath('/graphql'), fetch });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <StylesProvider>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyledComponent theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProviderStyledComponent>
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
}

export default AppProviders;
