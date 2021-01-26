import React from 'react';
import clsx from 'clsx';

import { MenuItensProps } from './menuItens';
import DrawerMenu from './Drawer';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

const styles = (width: number) => {
  const defaultDrawer = {
    backgroundColor: '#212a45',
    color: '#fff',
  };

  return makeStyles(theme => ({
    drawer: {
      width: width,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      ...defaultDrawer,
      width: width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      ...defaultDrawer,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawerPaper: {
      ...defaultDrawer,
      width: width,
      display: 'flex',
      flexDirection: 'column',
    },
  }));
};

type SidebarProps = {
  drawerWidth: number;
  onToggle: (toggle: boolean) => void;
  open: boolean;
  menuItens: MenuItensProps[];
};

const Sidebar = ({ drawerWidth, onToggle, open, menuItens }: SidebarProps) => {
  const classes = styles(drawerWidth)();
  const drawer = <DrawerMenu onToggle={onToggle} open={open} menuItens={menuItens} />;

  return (
    <>
      <Hidden xsDown>
        <Drawer
          data-testid="desktop-sidebar"
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          data-testid="mobile-sidebar"
          variant="temporary"
          open={open}
          onClose={() => onToggle(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
