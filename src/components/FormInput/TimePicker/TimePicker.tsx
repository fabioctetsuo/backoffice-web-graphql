import * as React from 'react';
import strings from 'strings';
import { Controller, useFormContext } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form';
import withPadding from 'hoc/withPadding';

import { KeyboardTimePicker, TimePickerProps } from '@material-ui/pickers';

import { getName, getHelperText, isError } from '../utils';

import FieldContext from '../fieldContext';
import { AccessTime } from '@material-ui/icons';

export type TimeInputProps = {
  field: string;
  rules?: RegisterOptions;
  helperText?: string;
  defaultValue?: unknown;
  value?: unknown;
  onChange?: () => void;
};

type DateProps = Omit<TimePickerProps, 'value' | 'onChange'>;

const TimeInput = ({
  field,
  rules,
  helperText,
  defaultValue = null,
  inputVariant = 'outlined',
  ...props
}: TimeInputProps & DateProps) => {
  const { path } = React.useContext(FieldContext);
  const { errors } = useFormContext();
  const [dateError, setDateError] = React.useState<string | null>(null);

  const name = getName(path, field);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const propsTranslations = strings.timeInput;

  return (
    <Controller
      id={`time-input-${name}`}
      defaultValue={defaultValue}
      name={name}
      onFocus={() => {
        inputRef.current?.focus();
      }}
      render={({ onChange, value, onBlur, name }) => {
        return (
          <KeyboardTimePicker
            data-testid={`time-input-${name}`}
            name={name}
            value={value}
            inputRef={inputRef}
            onChange={onChange}
            inputVariant={inputVariant}
            keyboardIcon={<AccessTime />}
            helperText={dateError || getHelperText(name, errors, helperText)}
            onError={message => {
              if (message) setDateError(message as string);
              else setDateError(null);
            }}
            error={!!dateError || isError(name, errors)}
            onBlur={onBlur}
            {...propsTranslations}
            {...props}
          />
        );
      }}
      rules={rules}
    />
  );
};

export default withPadding(TimeInput);
