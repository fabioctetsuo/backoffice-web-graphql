import { ComponentType } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import ServicesIcon from '@material-ui/icons/Ballot';
import SellersIcon from '@material-ui/icons/Apartment';

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
  {
    id: 'menu-item-sellers',
    name: 'Lojas',
    Icon: SellersIcon,
    route: '/sellers',
  },
];
