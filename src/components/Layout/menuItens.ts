import { ComponentType } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import HomeIcon from '@material-ui/icons/Home';

export type MenuItensProps = {
  id: string;
  route: string;
  name: string;
  Icon: ComponentType<SvgIconProps>;
};

export const getMenuItens = (): MenuItensProps[] => [
  {
    id: 'menu-item-homepage',
    name: 'Página inicial',
    Icon: HomeIcon,
    route: '/',
  },
];
