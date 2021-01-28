import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from 'utils/testing';
import useSuccessToast from '.';

const ComponentExample = () => {
  const sendToast = useSuccessToast();

  return <button onClick={() => sendToast('Success!')}>Test Toast</button>;
};

describe('Hook: useSuccessToast', () => {
  it('Should show toast with right message', () => {
    render(<ComponentExample />);

    user.click(screen.getByText(/Test Toast/));
    expect(screen.getByText(/Success!/)).toBeInTheDocument();
  });
});
