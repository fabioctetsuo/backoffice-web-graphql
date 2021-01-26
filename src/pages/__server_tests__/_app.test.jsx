import React from 'react';
import App from '../_app';
import { renderToString } from 'react-dom/server';

const Component = ({ title = 'Component title' }) => {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

describe('Page App', () => {
  it('render', () => {
    renderToString(<App Component={Component} pageProps={{}} />);
  });
});
