import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import strings from 'strings';
import MenuButton from '../MenuButton';
import UserMenu from './UserMenu';
import * as Styled from './styled';
import { MenuItemProps } from '../menuItens';

type AppbarProps = {
  menuItems: MenuItemProps[];
};

function Appbar({ menuItems }: AppbarProps) {
  const router = useRouter();
  const goTo = (link: string) => router.push(link);

  return (
    <Styled.Appbar position="static" aria-label={strings.appBar.label} color="primary">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography
            onClick={() => goTo('/')}
            variant="h6"
            align="left"
            style={{
              lineHeight: '1.2',
              width: '140px',
              cursor: 'pointer',
              fontWeight: 400,
            }}
          >
            Espaço <b>Saúde e Bem-Estar</b>
          </Typography>
        </Box>
        <Styled.MenuButtonsWrapper>
          {menuItems.map(({ id, route, name, Icon }) => {
            return (
              <MenuButton
                name={name}
                key={id}
                Icon={Icon}
                active={router.pathname.includes(route)}
                onClick={() => goTo(route)}
              />
            );
          })}
        </Styled.MenuButtonsWrapper>
        <UserMenu />
      </Toolbar>
    </Styled.Appbar>
  );
}

export default Appbar;
