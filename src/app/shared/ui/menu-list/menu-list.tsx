import Link from 'next/link';
import clsx from 'clsx';

import { MenuItem, ULProps } from '@/app/shared/types';

import s from './menu-list.module.scss';

type MenuList = ULProps & {
  items: MenuItem[];
  extraClass?: string;
};

export const MenuList = ({ items, extraClass = '', ...props }: MenuList) => {
  return (
    <ul {...props} className={clsx(s.menuList, { [extraClass]: !!extraClass })}>
      {items.map((item) => (
        <li key={item.link}>
          <Link href={item.link} className={s.menuItem}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
