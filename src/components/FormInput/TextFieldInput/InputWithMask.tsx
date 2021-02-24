import React, { useContext } from 'react';
import MaskedInput from 'react-text-mask';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import withPadding from 'hoc/withPadding';
import { TextFieldInputProps } from './TextFieldInput';
import { getName, getHelperText, isError } from '../utils';
import FieldContext from '../fieldContext';

type MaskType = (string | RegExp)[];

type InputWithMaskProps = {
  id: string;
  label: string;
  mask: MaskType | ((rawValue: string) => MaskType);
  endAdornment?: React.ReactNode;
  disabled?: boolean;
};

type TextMaskCustomProps = {
  inputRef: (ref: HTMLInputElement | null) => null;
  mask: MaskType;
};

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...otherProps } = props;

  return (
    <MaskedInput
      {...otherProps}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={props.mask}
      placeholderChar={'\u2000'}
      showMask={false}
    />
  );
}

export const InputWithMask = ({
  id,
  field,
  rules,
  label,
  mask,
  endAdornment,
  helperText,
  disabled,
  ...inputProps
}: TextFieldInputProps & InputWithMaskProps) => {
  const { path } = useContext(FieldContext);
  const { errors } = useFormContext();
  const name = getName(path, field);
  const error = isError(name, errors);

  const inputMaskRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id} error={error} variant="outlined">
        {label}
      </InputLabel>
      <Controller
        id={id}
        defaultValue=""
        name={name}
        onFocus={() => {
          inputMaskRef.current?.focus();
        }}
        as={
          <OutlinedInput
            label={label}
            name={name}
            id={id}
            inputComponent={TextMaskCustom as any}
            color="primary"
            inputProps={{ mask }}
            inputRef={inputMaskRef}
            error={error}
            endAdornment={endAdornment}
            disabled={disabled}
            {...inputProps}
          />
        }
        rules={rules}
      />
      <FormHelperText id="component-helper-text" error={error}>
        {getHelperText(name, errors, helperText)}
      </FormHelperText>
    </FormControl>
  );
};

export default withPadding(InputWithMask);
