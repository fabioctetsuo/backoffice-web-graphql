import * as React from 'react';
import { RegisterOptions } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import { CheckboxProps } from '@material-ui/core';

import { getName } from 'components/FormInput/utils';
import FieldContext from 'components/FormInput/fieldContext';
import withPadding from 'hoc/withPadding';

type CheckboxGroupInputProps = {
  field: string;
  rules?: RegisterOptions;
  label?: string;
  labelStyle?: React.CSSProperties;
  labelPlacement?: FormControlLabelProps['labelPlacement'];
};

const CheckboxGroupInput = ({
  field,
  label,
  checked = false,
  color = 'primary',
  labelPlacement,
  labelStyle = {},
  ...props
}: CheckboxGroupInputProps & CheckboxProps) => {
  const { path } = React.useContext(FieldContext);
  const name = getName(path, field);
  const [state, setState] = React.useState<boolean>(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };

  return (
    <Controller
      defaultValue={checked}
      name={name}
      render={({ onChange }) => (
        <FormControlLabel
          labelPlacement={labelPlacement}
          style={labelStyle}
          control={
            <Checkbox
              color={color}
              checked={state}
              onChange={e => {
                handleChange(e);
                onChange(e.target.checked);
              }}
              name={field}
              {...props}
            />
          }
          key={`checkbox-${name}-${field}`}
          label={label}
        />
      )}
    />
  );
};

export default withPadding(CheckboxGroupInput);
