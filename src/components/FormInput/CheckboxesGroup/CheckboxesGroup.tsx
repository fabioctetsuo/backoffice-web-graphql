import React, { useContext, useState, CSSProperties } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { CheckboxProps } from '@material-ui/core';

import { getName } from 'components/FormInput/utils';
import FieldContext from 'components/FormInput/fieldContext';
import withPadding from 'hoc/withPadding';
import styled from 'styled-components';

type Options = {
  label: string;
  field: string;
  value: boolean;
}[];

type CheckboxGroupInputProps = {
  field: string;
  rules?: RegisterOptions;
  defaultValue?: string;
  options: Options;
  label?: string;
  labelStyle?: CSSProperties;
  labelPlacement?: FormControlLabelProps['labelPlacement'];
};

type CheckboxValueType = Record<string, boolean>;

const StyledFormControlLabel = styled(FormControlLabel)`
  > span + span {
    margin-left: 28px;
    font-weight: 500;
  }
`;

const getDefaultsValues = (options: Options) =>
  options.reduce((acc, { field, value }) => ({ ...acc, [field]: value || false }), {});

const CheckboxGroupInput = ({
  field,
  options,
  color = 'primary',
  labelPlacement,
  labelStyle = {},
  ...props
}: CheckboxGroupInputProps & CheckboxProps) => {
  const { path } = useContext(FieldContext);
  const name = getName(path, field);
  const defaultValues = getDefaultsValues(options);

  const [values, setValues] = useState<CheckboxValueType>(defaultValues);

  const handleCheckboxChange = (checkboxName: string, isChecked: boolean) => {
    const newValues = {
      ...values,
      [checkboxName]: isChecked,
    };

    setValues(newValues);

    return newValues;
  };

  const getOptions = (onChange: (newValues: CheckboxValueType) => void) =>
    options.map(({ label, field }) => (
      <StyledFormControlLabel
        labelPlacement={labelPlacement}
        style={labelStyle}
        control={
          <Checkbox
            color={color}
            checked={values[field]}
            onChange={e => {
              const newValues = handleCheckboxChange(field, e.target.checked);
              onChange(newValues);
            }}
            name={field}
            {...props}
          />
        }
        key={`checkbox-${name}-${field}`}
        label={label}
      />
    ));

  return (
    <Controller
      defaultValue={defaultValues}
      name={name}
      render={({ onChange }) => (
        <FormControl fullWidth>{getOptions(onChange)}</FormControl>
      )}
    />
  );
};

export default withPadding(CheckboxGroupInput);
