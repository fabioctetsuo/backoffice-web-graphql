import { get } from 'lodash';
import {
  FieldError,
  DeepMap,
  UnpackNestedValue,
  DeepPartial,
  FieldValues,
} from 'react-hook-form';

export const getName = (path: string | undefined, field: string): string => {
  if (path) return `${path}.${field}`;
  return field;
};

export const getError = (
  path: string,
  errors: DeepMap<Record<string, any>, FieldError>
): FieldError => get(errors, path, false);

export const isError = (
  path: string,
  errors: DeepMap<Record<string, unknown>, FieldError>
): boolean => {
  const error = getError(path, errors);
  return !!error;
};

export const getHelperText = (
  path: string,
  errors: DeepMap<Record<string, unknown>, FieldError>,
  helperText?: string
): string | undefined => {
  const error = getError(path, errors);
  return error ? error?.message : helperText;
};

export const getDefaultValue = (
  formDefaultValues: UnpackNestedValue<DeepPartial<FieldValues>>,
  path: string,
  defaultValueComponent: unknown
): unknown => get(formDefaultValues, path, defaultValueComponent);
