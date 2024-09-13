import Link from 'next/link';
import clsx from 'clsx';

import { BurgerButton, Logo, SocialList } from '@/app/shared/ui';
import { Navbar } from '../navbar/navbar';
import { socialItems } from '@/app/shared/config';

import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx('container', s.header__wrapper)}>
        <Link href="/" className={s.header__logo}>
          <Logo />
        </Link>
        <Navbar aria-label="Primary" extraClass={s.header__navbar} />
        <SocialList items={socialItems} extraClass={s.header__social} />
        <BurgerButton aria-controls="primary-nav" extraClass={s.header__burger} />
      </div>
    </header>
  );
};
