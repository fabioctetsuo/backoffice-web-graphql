import React, { ReactElement, ComponentType } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderToString } from 'react-dom/server';
import { render as rtlRender } from '@testing-library/react';
import rtlUserEvent from '@testing-library/user-event';

import theme from 'theme';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as ThemeProviderStyledComponent } from 'styled-components';
import { DocumentNode, ApolloProvider } from '@apollo/client';
import { AuthContextProps, AuthProvider } from 'context/auth-context';

import ptLocale from 'date-fns/locale/pt';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { getApolloClient } from 'context';

type WrapperProps = {
  children: ReactElement;
};

const defaultAuthProps: AuthContextProps = {
  user: {
    displayName: 'Arthur Dent',
    email: 'arthur.dent@gmail.com',
    token: 'token',
    roles: ['hh-staff'],
  },
  login: async () => undefined,
  logout: async () => undefined,
  isLoading: false,
};

type GraphqlMock = {
  request: {
    query: DocumentNode;
    variables: Record<string, unknown>;
  };
  result: {
    data?: Record<string, unknown>;
    errors?: any;
  };
};

const customRender = (
  Component: ReactElement,
  { mocks = [] as GraphqlMock[], mockAuth = {}, ...renderOptions } = {}
) => {
  const Wrapper = ({ children }: WrapperProps) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyledComponent theme={theme}>
            <SnackbarProvider maxSnack={3}>
              <CssBaseline />
              <AuthProvider value={{ ...defaultAuthProps, ...mockAuth }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                  {children}
                </MuiPickersUtilsProvider>
              </AuthProvider>
            </SnackbarProvider>
          </ThemeProviderStyledComponent>
        </ThemeProvider>
      </StylesProvider>
    </MockedProvider>
  );

  return rtlRender(Component, { wrapper: Wrapper as ComponentType, ...renderOptions });
};

const renderMsw = (Component: ReactElement, { mockAuth = {}, ...renderOptions } = {}) => {
  const Wrapper = ({ children }: WrapperProps) => (
    <ApolloProvider client={getApolloClient('token')}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyledComponent theme={theme}>
            <SnackbarProvider maxSnack={3}>
              <CssBaseline />
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                <AuthProvider value={{ ...defaultAuthProps, ...mockAuth }}>
                  {children}
                </AuthProvider>
              </MuiPickersUtilsProvider>
            </SnackbarProvider>
          </ThemeProviderStyledComponent>
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );

  return rtlRender(Component, { wrapper: Wrapper as ComponentType, ...renderOptions });
};

const customServerRender = (ui: ReactElement, { mocks = [] as GraphqlMock[] } = {}) => {
  return renderToString(
    <MockedProvider mocks={mocks}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyledComponent theme={theme}>
            <SnackbarProvider maxSnack={3}>
              <CssBaseline />
              <AuthProvider value={defaultAuthProps}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                  {ui}
                </MuiPickersUtilsProvider>
              </AuthProvider>
            </SnackbarProvider>
          </ThemeProviderStyledComponent>
        </ThemeProvider>
      </StylesProvider>
    </MockedProvider>
  );
};

export { rtlUserEvent as userEvent };

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { renderMsw };
export { customServerRender as serverRender };
