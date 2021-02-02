import { ComponentType } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import ServicesIcon from '@material-ui/icons/Ballot';

export type MenuItemProps = {
  id: string;
  route: string;
  name: string;
  Icon: ComponentType<SvgIconProps>;
};

export const getMenuItems = (): MenuItemProps[] => [
  {
    id: 'menu-item-services',
    name: 'Serviços',
    Icon: ServicesIcon,
    route: '/services',
  },
];
