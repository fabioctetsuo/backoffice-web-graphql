import React, { ReactChild } from 'react';
import fetch from 'cross-fetch';
import theme from 'theme';

import ptLocale from 'date-fns/locale/pt';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as ThemeProviderStyledComponent } from 'styled-components';

import { useAuth } from 'context/auth-context';

import {
  InMemoryCache,
  ApolloClient,
  HttpLink,
  ApolloLink,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { withBasePath } from 'utils/withBasePath';

type AppProviderdProps = {
  children: ReactChild;
  token: string;
};

const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key: string, value: unknown) =>
      key === '__typename' ? undefined : value;
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }
  return forward(operation).map(data => {
    return data;
  });
});

const httpLink = new HttpLink({ uri: withBasePath('/graphql'), fetch });

const getAuthLink = (token: string) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });
};

export const getApolloClient = (token: string) =>
  new ApolloClient({
    link: HttpLink.from([cleanTypeName, getAuthLink(token).concat(httpLink)]),
    cache: new InMemoryCache(),
  });

function AppProviders({ children, token: cookieToken }: AppProviderdProps) {
  const { user } = useAuth();
  const token = user?.token ? user?.token : cookieToken;
  const client = getApolloClient(token);

  return (
    <ApolloProvider client={client}>
      <StylesProvider>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyledComponent theme={theme}>
            <CssBaseline />
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
              {children}
            </MuiPickersUtilsProvider>
          </ThemeProviderStyledComponent>
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
}

export default AppProviders;
