import React from 'react';
import withPadding from './withPadding';
import { render } from 'utils/testing';

const ExampleComponent = () => <div>Example Component</div>;
const MockWithHOC = withPadding(ExampleComponent);

describe('withPadding HOC', () => {
  it('Should add padding if has a padding prop', () => {
    const { container } = render(<MockWithHOC padding="10px" />);

    expect(container.children[0]).toHaveStyle('padding: 10px');
  });
  it('Should add padding with 16px 0px (default padding) if padding is not provided', () => {
    const { container } = render(<MockWithHOC />);

    expect(container.children[0]).toHaveStyle('padding: 16px 0px');
  });
});
