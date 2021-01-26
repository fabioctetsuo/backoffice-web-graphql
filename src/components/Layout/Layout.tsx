import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Breadcrumbs, { PathProps } from './Breadcrumbs';

import { getMenuItens } from './menuItens';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import strings from 'strings';

const drawerWidth = 240;

const Container = styled.div`
  display: flex;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(2, 4)};
`;

type LayoutProps = {
  children: ReactElement;
  path?: PathProps[];
};

const Layout = ({ children, path }: LayoutProps) => {
  const [open, setOpen] = React.useState(false);

  const menuItens = getMenuItens();

  return (
    <Container>
      <Sidebar
        open={open}
        onToggle={setOpen}
        drawerWidth={drawerWidth}
        menuItens={menuItens}
      />
      <Content>
        <div>
          <Hidden smUp>
            <IconButton
              onClick={() => setOpen(true)}
              style={{ padding: 0, marginBottom: 16 }}
            >
              <MenuIcon
                style={{ color: '#000', fontSize: 40 }}
                titleAccess={strings.sidebar.menuIcon.open}
              />
            </IconButton>
          </Hidden>
          {path && <Breadcrumbs path={path} />}
        </div>

        {children}
      </Content>
    </Container>
  );
};

export default Layout;
