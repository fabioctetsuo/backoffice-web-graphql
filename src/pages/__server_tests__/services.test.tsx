import React from 'react';
import ServicesPage from '../services';
import { serverRender as render } from 'utils/testing';

describe('Page - ServicesPage', () => {
  it('must server side render ServicesPage', () => {
    render(<ServicesPage />);
  });
});
