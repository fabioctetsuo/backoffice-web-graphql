import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { TextFieldProps } from '@material-ui/core';
import { RegisterOptions } from 'react-hook-form';
import withPadding from 'hoc/withPadding';
import InputWithMask from './InputWithMask';

import { getName, getHelperText, isError } from '../utils';

import FieldContext from '../fieldContext';

export type TextFieldInputProps = {
  field: string;
  rules?: RegisterOptions;
  helperText?: string;
  defaultValue?: unknown;
  endAdornment?: React.ReactNode;
};

const TextFieldInput = ({
  field,
  rules,
  helperText,
  defaultValue = '',
  endAdornment,
  ...props
}: TextFieldInputProps & TextFieldProps) => {
  const { path } = React.useContext(FieldContext);
  const { errors } = useFormContext();

  const name = getName(path, field);

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <Controller
      id={`textfield-${name}`}
      defaultValue={defaultValue}
      name={name}
      onFocus={() => {
        inputRef.current?.focus();
      }}
      as={
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          error={isError(name, errors)}
          helperText={getHelperText(name, errors, helperText)}
          inputRef={inputRef}
          InputProps={{ endAdornment }}
          {...props}
        />
      }
      rules={rules}
    />
  );
};

TextFieldInput.Mask = InputWithMask;

export default withPadding(TextFieldInput);

export { TextFieldInput as TextField };
