import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Divider, List, IconButton, Hidden } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import strings from 'strings';

import MenuItem from './MenuItem';
import { MenuItensProps } from './menuItens';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from 'context/auth-context';
import useToast from 'hooks/useToast';

export const Space = styled.div`
  ${({ theme }) => theme.mixins.toolbar};
  padding: ${({ theme }) => theme.spacing(0, 1)}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-self: center;
`;

const MenuIconContainer = styled.div`
  align-self: center;
`;

const MenuList = styled(List)`
  flex: 1;
`;

type DrawerProps = {
  onToggle: (toggle: boolean) => void;
  open: boolean;
  menuItens: MenuItensProps[];
};

const Drawer = ({ onToggle, open, menuItens }: DrawerProps) => {
  const router = useRouter();
  const { logout } = useAuth();
  const sendToast = useToast();

  const goTo = (link: string) => router.push(link);

  const isSameRoute = (route: string) => router.pathname === route;

  const handleLogout = () => {
    logout && logout().catch(() => sendToast(strings.errors.generic, 'error'));
  };

  return (
    <>
      <Space>
        {open ? (
          <>
            <IconButton onClick={() => onToggle(false)}>
              <ChevronLeftIcon
                style={{ color: '#fff' }}
                titleAccess={strings.sidebar.menuIcon.close}
              />
            </IconButton>
          </>
        ) : (
          <Hidden xsDown>
            <MenuIconContainer>
              <IconButton onClick={() => onToggle(true)} data-testid="close-CCC">
                <MenuIcon
                  style={{ color: '#fff' }}
                  titleAccess={strings.sidebar.menuIcon.open}
                />
              </IconButton>
            </MenuIconContainer>
          </Hidden>
        )}
      </Space>
      <Divider />
      <MenuList>
        {menuItens.map(({ route, name, Icon, id }) => {
          const isActive = isSameRoute(route);

          return (
            <MenuItem
              id={id}
              name={name}
              key={name}
              active={isActive}
              Icon={Icon}
              onClick={() => goTo(route)}
            />
          );
        })}
      </MenuList>
      <div style={{ marginBottom: 24 }}>
        <MenuItem
          id="logout"
          name={strings.sidebar.menuIcon.logout}
          active={false}
          Icon={LogoutIcon}
          onClick={handleLogout}
        />
      </div>
    </>
  );
};

export default Drawer;
