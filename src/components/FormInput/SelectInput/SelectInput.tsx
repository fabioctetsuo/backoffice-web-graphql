import React, { useContext } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
import { SelectProps } from '@material-ui/core';

import { default as MaterialSelect } from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import { getName, getHelperText, isError } from '../utils';
import FieldContext from '../fieldContext';
import withPadding from 'hoc/withPadding';
import CircularProgress from '@material-ui/core/CircularProgress';

const Select = styled(MaterialSelect)`
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
`;

type Options = {
  label: string;
  value: string | number;
};

const getOptions = (options: Options[]) =>
  options.map(({ label, value }) => (
    <MenuItem value={value} key={`option-${label}-${value}`}>
      {label}
    </MenuItem>
  ));

type SelectInputProps = {
  field: string;
  rules?: RegisterOptions;
  helperText?: string;
  defaultValue?: unknown;
  options?: Options[];
  variant?: 'outlined' | 'standard' | 'filled';
  isLoading?: boolean;
};

const IconComponent = () => (
  <div>
    <CircularProgress size={24} style={{ marginRight: 16 }} />
  </div>
);

const SelectInput = ({
  field,
  rules,
  defaultValue = '',
  label,
  options,
  children,
  helperText,
  variant = 'outlined',
  isLoading,
  fullWidth,
  ...props
}: SelectInputProps & SelectProps) => {
  const { path } = useContext(FieldContext);
  const { errors } = useFormContext();

  const name = getName(path, field);
  const id = `select-input-${name}`;
  const menuItens = options ? getOptions(options) : children;
  const error = isError(name, errors);
  const optionalProps = isLoading ? { IconComponent, disabled: isLoading } : {};
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <FormControl variant={variant} fullWidth={fullWidth} data-testid={`container-${id}`}>
      <InputLabel htmlFor={id} error={error} variant={variant}>
        {label}
      </InputLabel>
      <Controller
        defaultValue={defaultValue}
        name={name}
        onFocus={() => {
          inputRef.current?.focus();
        }}
        as={
          <Select
            inputRef={inputRef}
            label={label}
            variant="outlined"
            inputProps={{ 'data-testid': id, id }}
            error={error}
            fullWidth={fullWidth}
            {...props}
            {...optionalProps}
          >
            {menuItens}
          </Select>
        }
        rules={rules}
      />
      {(error || helperText) && (
        <FormHelperText error={error}>
          {getHelperText(name, errors, helperText)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default withPadding(SelectInput);
