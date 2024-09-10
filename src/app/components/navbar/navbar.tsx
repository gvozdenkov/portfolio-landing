import { MenuItems } from '@/app/shared/config';
import { MenuList } from '@/app/shared/ui';

import s from './navbar.module.scss';
import clsx from 'clsx';

type NavbarProps = {
  extraClass?: string;
};

export const Navbar = ({ extraClass = '' }: NavbarProps) => {
  return (
    <nav className={clsx(s.navbar, { [extraClass]: !!extraClass })}>
      <MenuList items={MenuItems} />
    </nav>
  );
};
