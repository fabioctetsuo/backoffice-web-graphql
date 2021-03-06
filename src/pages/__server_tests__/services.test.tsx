import React from 'react';
import ServicesPage from '../services';
import { serverRender as render } from 'utils/testing';
import graphqlMock from 'containers/Services/mocks';

const mockRouterPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: mockRouterPush,
      pathname: '/services',
    };
  },
}));

describe('Page - ServicesPage', () => {
  it('must server side render ServicesPage', () => {
    render(<ServicesPage />, {
      mocks: [graphqlMock.getServicesSuccess],
    });
  });
});
