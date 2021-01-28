import strings from 'strings';

type ErrorProps = {
  code: string;
};

const ERROR_CODES = {
  USER_NOT_FOUND: 'auth/user-not-found',
  INVALID_PASSWORD: 'auth/wrong-password',
  USER_DISABLED: 'auth/user-disabled',
};

const getErrorMessage = ({ code }: ErrorProps) => {
  if (code === ERROR_CODES.USER_NOT_FOUND) return strings.login.errors.invalidUser;
  if (code === ERROR_CODES.INVALID_PASSWORD) return strings.login.errors.invalidUser;
  else if (code === ERROR_CODES.USER_DISABLED) return strings.login.errors.userDisabled;
  return strings.errors.generic;
};

const handleLoginError = (error: ErrorProps): string => getErrorMessage(error);

export default handleLoginError;
