import clsx from 'clsx';

import { MenuItems } from '@/app/shared/config';
import { MenuList } from '@/app/shared/ui';

type NavbarProps = {
  extraClass?: string;
};

export const Navbar = ({ extraClass = '' }: NavbarProps) => {
  return (
    <nav className={clsx({ [extraClass]: !!extraClass })}>
      <MenuList items={MenuItems} />
    </nav>
  );
};
