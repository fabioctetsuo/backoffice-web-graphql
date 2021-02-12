import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, waitFor, screen } from 'utils/testing';

import CheckboxesGroup from './CheckboxesGroup';
import { Form } from '../testUtils';

const mockSubmit = jest.fn();

const defaultCheckboxes = [
  {
    label: 'Checkbox 1',
    field: 'checkbox1',
    value: false,
  },
  {
    label: 'Checkbox 2',
    field: 'checkbox2',
    value: false,
  },
];

describe('CheckboxesGroup component', () => {
  it('Should show labels of checkboxes', async () => {
    render(
      <Form mockSubmit={mockSubmit}>
        <CheckboxesGroup field="test" options={defaultCheckboxes} />
      </Form>
    );

    expect(screen.getByText('Checkbox 1')).toBeInTheDocument();
    expect(screen.getByText('Checkbox 2')).toBeInTheDocument();
  });

  it('Should submit with right value', async () => {
    render(
      <Form mockSubmit={mockSubmit}>
        <CheckboxesGroup field="test" options={defaultCheckboxes} />
      </Form>
    );

    userEvent.click(screen.getByText('Checkbox 1'));
    userEvent.click(screen.getByText('submit'));

    await waitFor(() =>
      expect(mockSubmit).toBeCalledWith({
        test: {
          checkbox1: true,
          checkbox2: false,
        },
      })
    );
  });
});
