import Link from 'next/link';
import clsx from 'clsx';

import { MenuItem } from '@/app/shared/types';

import s from './menu-list.module.scss';

type MenuList = {
  items: MenuItem[];
  extraClass?: string;
};

export const MenuList = ({ items, extraClass = '' }: MenuList) => {
  return (
    <ul className={clsx(s.menuList, { [extraClass]: !!extraClass })}>
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
