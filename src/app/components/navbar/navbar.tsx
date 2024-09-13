import clsx from 'clsx';

import { MenuItems } from '@/app/shared/config';
import { MenuList } from '@/app/shared/ui';
import { NavProps } from '@/app/shared/types';

type NavbarProps = NavProps & {
  extraClass?: string;
};

export const Navbar = ({ extraClass = '', ...props }: NavbarProps) => {
  return (
    <nav {...props} className={clsx({ [extraClass]: !!extraClass })}>
      <MenuList role="list" id="primary-nav" items={MenuItems} />
    </nav>
  );
};
