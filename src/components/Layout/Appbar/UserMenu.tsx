import * as React from 'react';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { useAuth } from 'context/auth-context';
import strings from 'strings';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const appBarStrings = strings.appBar.userDetails;
const getUserNameFirstLetter = (userName: string | null) => userName?.charAt(0) ?? '';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    avatar: {
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

const UserMenu = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { user, logout } = useAuth();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    logout &&
      logout().catch(() => enqueueSnackbar(strings.errors.generic, { variant: 'error' }));
  };

  if (!user) {
    return null;
  }

  return (
    <Container onClick={toggleMenu} style={{ cursor: 'pointer' }}>
      {user.displayName ? (
        <Avatar className={classes.avatar} alt={user.displayName}>
          {getUserNameFirstLetter(user.displayName)}
        </Avatar>
      ) : (
        <Avatar className={classes.avatar} alt={'Usuário'} />
      )}
      <div style={{ marginLeft: '8px' }}>
        <Typography variant="overline" style={{ lineHeight: '1.2' }} id="appbar-username">
          {appBarStrings.label}
        </Typography>
        <Typography
          variant="body1"
          style={{ lineHeight: '1.5' }}
          aria-labelledby="appbar-username"
        >
          {user.displayName}
        </Typography>
      </div>
      <IconButton
        aria-label={appBarStrings.settings.label}
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <ArrowDropDown />
      </IconButton>
      <Menu
        aria-label={appBarStrings.settings.menuOptions}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={toggleMenu}
      >
        <MenuItem onClick={handleLogout}>{appBarStrings.settings.logout}</MenuItem>
      </Menu>
    </Container>
  );
};

export default UserMenu;
