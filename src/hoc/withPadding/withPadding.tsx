import React, { ComponentType } from 'react';
import { useTheme } from '@material-ui/core/styles';

type withPaddingProps = {
  padding?: string;
};

function withPadding<T>(Component: ComponentType<T>) {
  return function WrappedPadding(props: T & withPaddingProps) {
    const theme = useTheme();
    const defaultPadding = theme.spacing(2, 0);

    const getPadding = (padding: string | undefined) => padding ?? defaultPadding;

    return (
      <div style={{ padding: getPadding(props.padding) }}>
        <Component {...props} />
      </div>
    );
  };
}

export default withPadding;
