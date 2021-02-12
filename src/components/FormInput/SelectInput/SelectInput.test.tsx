import React, { ReactElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import MenuItem from '@material-ui/core/MenuItem';

import { render, fireEvent, waitFor, screen } from 'utils/testing';

import SelectInput from './SelectInput';
import FieldContext, { FieldContextProps } from '../fieldContext';

const mockSubmit = jest.fn();

type FormValues = {
  test?: string;
};

type FormProps = {
  children: ReactElement;
  context?: FieldContextProps;
  defaultValues?: FormValues;
};

const Form = ({ children, context: contextProp = {}, defaultValues = {} }: FormProps) => {
  const methods = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    mockSubmit(data);
  };

  const context = contextProp ?? { errors: methods.errors };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FieldContext.Provider value={context}>{children}</FieldContext.Provider>
        <input type="submit" value="submit" />
      </form>
    </FormProvider>
  );
};

describe('SelectInput component', () => {
  describe('Label', () => {
    it('Should show the label', async () => {
      render(
        <Form>
          <SelectInput field="test" label="Test">
            <MenuItem value="test1">Test 1</MenuItem>
            <MenuItem value="test2">Test 2</MenuItem>
          </SelectInput>
        </Form>
      );

      const label = screen.getAllByText(/test/i);
      expect(label[0]).toBeInTheDocument();
    });

    it('Should not show the label', async () => {
      render(
        <Form>
          <SelectInput field="test" defaultValue="test1">
            <MenuItem value="test1">Test 1</MenuItem>
            <MenuItem value="test2">Test 2</MenuItem>
          </SelectInput>
        </Form>
      );

      const label = screen.queryByText('Test');
      expect(label).not.toBeInTheDocument();
    });
  });

  it('Should verify the rules', async () => {
    render(
      <Form>
        <SelectInput field="test" label="Test">
          <MenuItem value="test1">Test 1</MenuItem>
          <MenuItem value="test2">Test 2</MenuItem>
        </SelectInput>
      </Form>
    );

    fireEvent.submit(screen.getByText('submit'));

    await waitFor(() => expect(mockSubmit).not.toBeCalled());

    const select = screen.getByTestId('select-input-test');
    fireEvent.change(select, { target: { value: 'test2' } });

    fireEvent.submit(screen.getByText('submit'));

    await waitFor(() => expect(mockSubmit).toBeCalledWith({ test: 'test2' }));
  });

  describe('Default value', () => {
    it('Should show the default value by form context', async () => {
      render(
        <Form
          defaultValues={{
            test: 'test2',
          }}
        >
          <SelectInput field="test" label="Test">
            <MenuItem value="test1">Test 1</MenuItem>
            <MenuItem value="test2">Test 2</MenuItem>
          </SelectInput>
        </Form>
      );

      expect(screen.getByTestId('select-input-test')).toHaveValue('test2');
    });

    it('Should show the default value by prop', async () => {
      render(
        <Form>
          <SelectInput field="test" label="Test" defaultValue="test2">
            <MenuItem value="test1">Test 1</MenuItem>
            <MenuItem value="test2">Test 2</MenuItem>
          </SelectInput>
        </Form>
      );

      expect(screen.getByTestId('select-input-test')).toHaveValue('test2');
    });
  });

  describe('Submit', () => {
    it('Should submit with right value without path', async () => {
      render(
        <Form>
          <SelectInput field="test" label="Test">
            <MenuItem value="test1">Test 1</MenuItem>
            <MenuItem value="test2">Test 2</MenuItem>
          </SelectInput>
        </Form>
      );

      const select = screen.getByTestId('select-input-test');
      fireEvent.change(select, { target: { value: 'test2' } });

      fireEvent.submit(screen.getByText('submit'));

      await waitFor(() => expect(mockSubmit).toBeCalledWith({ test: 'test2' }));
    });

    it('Should submit with right value with path', async () => {
      render(
        <Form
          context={{
            path: 'formTest',
          }}
        >
          <SelectInput field="test" label="Test">
            <MenuItem value="test1">Test 1</MenuItem>
            <MenuItem value="test2">Test 2</MenuItem>
          </SelectInput>
        </Form>
      );

      const select = screen.getByTestId('select-input-formTest.test');
      fireEvent.change(select, { target: { value: 'test2' } });

      fireEvent.submit(screen.getByText('submit'));

      await waitFor(() =>
        expect(mockSubmit).toBeCalledWith({
          formTest: {
            test: 'test2',
          },
        })
      );
    });
  });
});
