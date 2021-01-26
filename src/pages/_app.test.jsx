import React from 'react';
import { render } from '@testing-library/react';
import App from './_app';

const Component = ({ title = 'Component title' }) => {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

describe('Page App', () => {
  it('render', () => {
    render(<App Component={Component} pageProps={{}} />);
  });
});
