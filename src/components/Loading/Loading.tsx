import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

type Props = {
  size?: number | string;
  overlay?: boolean;
};

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
`;

function Loading({ size = 40, overlay = true, ...props }: Props) {
  if (!overlay) return <CircularProgress size={size} {...props} />;
  return (
    <OverlayContainer data-testid="loading-overlay">
      <CircularProgress size={size} {...props} />
    </OverlayContainer>
  );
}

export default Loading;
