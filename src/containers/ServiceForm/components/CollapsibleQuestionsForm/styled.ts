import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0 16px;
`;

export const CollapsibleRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  cursor: pointer;

  &:hover {
    background: rgba(120, 120, 120, 0.1);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  min-width: 64px;
`;
