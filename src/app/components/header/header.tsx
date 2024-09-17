import Link from 'next/link';
import clsx from 'clsx';

import { BurgerButton, Logo, MenuList } from '@/app/shared/ui';
import { SocialList, Navbar } from '@/app/components';
import { MenuItems } from '@/app/shared/config';

import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx('container', s.header__wrapper)}>
        <Link href="/" className={s.header__logo}>
          <Logo />
        </Link>
        <Navbar aria-label="Primary" extraClass={s.header__navbar}>
          <MenuList role="list" id="primary-nav" items={MenuItems} />
        </Navbar>
        <SocialList extraClass={s.header__social} />
        <BurgerButton aria-controls="primary-nav" extraClass={s.header__burger} />
      </div>
    </header>
  );
};
