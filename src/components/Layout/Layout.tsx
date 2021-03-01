import React from 'react';
import styled from 'styled-components';
import Appbar from './Appbar';
import { getMenuItems } from './menuItens';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100% - 90px);
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(2, 4)};
  padding-bottom: 16px;
`;

type LayoutProps = {
  showSidebar?: boolean;
  withErrorBoundary?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const menuItems = getMenuItems();
  return (
    <>
      <Appbar menuItems={menuItems} />
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default Layout;
