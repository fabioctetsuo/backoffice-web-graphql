import React, { ComponentType, MouseEvent, useState } from 'react';
import styled from 'styled-components';

import {
  ListItem as MaterialListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { SvgIconProps } from '@material-ui/core/SvgIcon';

const ListItem = styled(MaterialListItem)`
  cursor: pointer;
`;

type MenuItemProps = {
  id?: string;
  name: string;
  active: boolean;
  Icon: ComponentType<SvgIconProps>;
  onClick: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

const MenuItem = ({ id, name, active, Icon, onClick }: MenuItemProps) => {
  const [hover, setHover] = useState(false);
  const color = active || hover ? '#fff' : 'hsla(0,0%,100%,.65)';

  return (
    <ListItem
      button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      data-testid={id}
    >
      <ListItemIcon>
        <Icon style={{ color, marginLeft: 8 }} data-testid="menu-icon" />
      </ListItemIcon>
      <ListItemText primary={name} style={{ color }} />
    </ListItem>
  );
};

export default MenuItem;
