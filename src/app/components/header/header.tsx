import Link from 'next/link';

import { Logo, SocialList } from '@/app/shared/ui';
import { Navbar } from '../navbar/navbar';
import { socialItems } from '@/app/shared/config';

import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/" className={s.header__logo}>
        <Logo />
      </Link>
      <Navbar extraClass={s.header__navbar} />
      <SocialList items={socialItems} extraClass={s.header__social} />
    </header>
  );
};
