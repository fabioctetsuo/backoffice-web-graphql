import React, { ReactElement, ComponentType } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderToString } from 'react-dom/server';
import { render as rtlRender } from '@testing-library/react';
import rtlUserEvent from '@testing-library/user-event';

import theme from 'theme';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as ThemeProviderStyledComponent } from 'styled-components';
import { DocumentNode } from '@apollo/client';

type WrapperProps = {
  children: ReactElement;
};

type GraphqlMock = {
  request: {
    query: DocumentNode;
    variables: Record<string, unknown>;
  };
  result: {
    data: Record<string, unknown>;
  };
};

const customRender = (
  Component: ReactElement,
  { mocks = [] as GraphqlMock[], ...renderOptions } = {}
) => {
  const Wrapper = ({ children }: WrapperProps) => (
    <MockedProvider mocks={mocks}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyledComponent theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProviderStyledComponent>
        </ThemeProvider>
      </StylesProvider>
    </MockedProvider>
  );

  return rtlRender(Component, { wrapper: Wrapper as ComponentType, ...renderOptions });
};

const customServerRender = (ui: ReactElement, { mocks = [] as GraphqlMock[] } = {}) => {
  return renderToString(
    <MockedProvider mocks={mocks}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyledComponent theme={theme}>
            <CssBaseline />
            {ui}
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

export { customServerRender as serverRender };
