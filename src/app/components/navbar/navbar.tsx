import clsx from 'clsx';

import { NavProps } from '@/app/shared/types';
import { PropsWithChildren } from 'react';

type NavbarProps = NavProps &
  PropsWithChildren & {
    extraClass?: string;
  };

export const Navbar = ({ extraClass = '', children, ...props }: NavbarProps) => {
  return (
    <nav {...props} className={clsx({ [extraClass]: !!extraClass })}>
      {children}
    </nav>
  );
};
