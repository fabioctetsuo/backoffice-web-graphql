import * as React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { TypographyProps, SvgIconTypeMap } from '@material-ui/core/';

import theme from 'theme';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

type CustomTitleProps = {
  style?: React.CSSProperties;
};

type StarIconProps = {
  StartIcon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
};

const Title = ({
  StartIcon,
  style,
  ...props
}: CustomTitleProps & TypographyProps & StarIconProps) => {
  const defaultStyle = {
    fontWeight: 700,
    lineHeight: '24px',
  };

  return (
    <Container>
      {StartIcon && (
        <StartIcon fontSize="large" style={{ marginRight: theme.spacing(1) }} />
      )}
      <Typography variant="h6" noWrap {...props} style={{ ...defaultStyle, ...style }} />
    </Container>
  );
};

export default Title;
