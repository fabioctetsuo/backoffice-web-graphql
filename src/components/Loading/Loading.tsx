import React from 'react';
import styled from 'styled-components';
import { CircularProgress, CircularProgressProps, Typography } from '@material-ui/core';

type Props = {
  overlay?: boolean;
  text?: string;
};

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const CustomTypography = styled(Typography)`
  animation: blink 0.5s alternate infinite;

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
`;

function Loading({
  size = 40,
  overlay = true,
  text,
  ...props
}: Props & CircularProgressProps) {
  if (!overlay) return <CircularProgress size={size} {...props} />;
  return (
    <OverlayContainer data-testid="loading-overlay">
      <LoadingWrapper>
        <CircularProgress size={size} {...props} />
        {text && <CustomTypography variant="h6">{text}</CustomTypography>}
      </LoadingWrapper>
    </OverlayContainer>
  );
}

export default Loading;
