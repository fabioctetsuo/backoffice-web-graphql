import React, { ReactElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FieldContext from './fieldContext';
import { FieldContextProps } from './fieldContext';

export type FormValues = {
  test?: string;
};

type FormProps = {
  children: ReactElement;
  context?: FieldContextProps;
  defaultValues?: FormValues;
  mockSubmit: (data: FormValues) => void;
};

export const Form = ({
  children,
  context = {},
  defaultValues = {},
  mockSubmit,
}: FormProps) => {
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
