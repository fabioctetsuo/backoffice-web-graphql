import React, { ReactElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { render, fireEvent, waitFor, screen } from 'utils/testing';
import userEvent from '@testing-library/user-event';

import TextFieldInput, { TextField } from './TextFieldInput';
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

const Form = ({ children, context = {}, defaultValues = {} }: FormProps) => {
  const methods = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    mockSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FieldContext.Provider value={context}>{children}</FieldContext.Provider>
        <input type="submit" value="submit" />
      </form>
    </FormProvider>
  );
};

const testMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

afterEach(() => {
  jest.clearAllMocks();
});

describe('TextField component', () => {
  describe('Mask', () => {
    it('Should validate input with date mask correctly', async () => {
      render(
        <Form>
          <TextField.Mask
            id="test-mask-input"
            field="testWithMask"
            label="test label with mask"
            defaultValue
            mask={testMask}
            rules={{
              required: 'Required field',
            }}
          />
        </Form>
      );
      const inputText = screen.getByLabelText(/test label with mask/i);
      fireEvent.change(inputText, { target: { value: '10102020' } });
      fireEvent.submit(screen.getByText('submit'));

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledTimes(1);
      });
      expect(mockSubmit).toHaveBeenCalledWith({ testWithMask: '10/10/2020' });

      fireEvent.change(inputText, { target: { value: '' } });
      fireEvent.submit(screen.getByText('submit'));

      await waitFor(() => {
        expect(screen.getByText(/required field/i)).toBeInTheDocument();
      });
      expect(mockSubmit).toHaveBeenCalledTimes(1);

      fireEvent.change(inputText, { target: { value: '11aaaa112021' } });
      fireEvent.submit(screen.getByText('submit'));
      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledTimes(2);
      });
      expect(mockSubmit).toHaveBeenCalledWith({ testWithMask: '11/11/2021' });
    });
  });
});

describe('TextFieldInput component', () => {
  it('Should show the label', async () => {
    render(
      <Form>
        <TextFieldInput field="test" label="test label" variant="standard" />
      </Form>
    );

    const label = screen.getByText('test label');
    expect(label).toBeInTheDocument();
  });

  it('Should show the helper text', async () => {
    render(
      <Form>
        <TextFieldInput field="test" label="test" helperText="HelperTest" />
      </Form>
    );

    const helper = screen.getByText('HelperTest');
    expect(helper).toBeInTheDocument();
  });

  it('Should show the error and overwrite helper text', async () => {
    render(
      <Form>
        <TextFieldInput
          field="test"
          label="test"
          helperText="HelperTest"
          rules={{
            required: 'Error test required',
          }}
        />
      </Form>
    );
    expect(screen.getByText('HelperTest')).toBeInTheDocument();
    expect(screen.queryByText('Error test required')).not.toBeInTheDocument();

    fireEvent.submit(screen.getByText('submit'));

    await waitFor(() => {
      expect(screen.queryByText('HelperTest')).not.toBeInTheDocument();
      expect(screen.getByText('Error test required')).toBeInTheDocument();
    });
  });

  it('Should verify the rules', async () => {
    render(
      <Form>
        <TextFieldInput
          field="test"
          label="test"
          helperText="HelperTest"
          rules={{
            required: 'Error test required',
          }}
        />
      </Form>
    );

    fireEvent.submit(screen.getByText('submit'));

    await waitFor(() =>
      expect(screen.getByText('Error test required')).toBeInTheDocument()
    );
  });

  describe('Default values', () => {
    it('Should show the default value by form context', async () => {
      render(
        <Form
          defaultValues={{
            test: 'Defaul value test',
          }}
        >
          <TextFieldInput field="test" label="test" helperText="HelperTest" />
        </Form>
      );

      expect(screen.getByLabelText('test')).toHaveValue('Defaul value test');
    });
  });

  describe('Submit', () => {
    it('Should submit with right value without path', async () => {
      render(
        <Form>
          <TextFieldInput
            field="test"
            label="test"
            helperText="HelperTest"
            rules={{
              required: 'Error test required',
            }}
          />
        </Form>
      );

      userEvent.type(screen.getByLabelText('test'), 'Test type');

      fireEvent.submit(screen.getByText('submit'));

      await waitFor(() => expect(mockSubmit).toBeCalledWith({ test: 'Test type' }));
    });

    it('Should submit with right value with path', async () => {
      render(
        <Form
          context={{
            path: 'formTest',
          }}
        >
          <TextFieldInput
            field="test"
            label="test"
            helperText="HelperTest"
            rules={{
              required: 'Error test required',
            }}
          />
        </Form>
      );

      userEvent.type(screen.getByLabelText('test'), 'Test type');

      fireEvent.submit(screen.getByText('submit'));

      await waitFor(() =>
        expect(mockSubmit).toBeCalledWith({
          formTest: {
            test: 'Test type',
          },
        })
      );
    });
  });
});
