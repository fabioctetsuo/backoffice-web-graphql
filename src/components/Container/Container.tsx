import * as React from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const InnerContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(3, 0)};
`;

const CustomPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2, 4)};
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`;

type ContainerProps = {
  title?: React.ReactChild;
  children: React.ReactChild | React.ReactChild[];
  TopButton?: React.ComponentType;
  RightButton?: React.ComponentType;
  elevation?: number;
};

const Container = ({
  title,
  children,
  TopButton,
  RightButton,
  elevation = 3,
}: ContainerProps) => {
  return (
    <CustomPaper elevation={elevation}>
      <TitleContainer>
        {title}
        {TopButton && (
          <div>
            <TopButton />
          </div>
        )}
      </TitleContainer>
      {(title || TopButton) && <Divider />}
      <InnerContainer>{children}</InnerContainer>
      {RightButton && (
        <ButtonContainer>
          <RightButton />
        </ButtonContainer>
      )}
    </CustomPaper>
  );
};

export default Container;
