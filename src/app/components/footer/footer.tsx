import clsx from 'clsx';
import { Navbar } from '../navbar/navbar';

import { MenuList } from '@/app/shared/ui';
import { MenuItems } from '@/app/shared/config';

import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', 'padding-block-200', s.footer__container)}>
        <Navbar aria-label="Footer" extraClass={s.footer__navbar}>
          <MenuList role="list" items={MenuItems} extraClass={s.footer__navItems} />
        </Navbar>
        <p className={clsx(s.footer__copyright)}>
          Designed and built by&nbsp;
          <span
            className={clsx(
              'text-background-clip',
              'gradient-basic',
              s.footer__copyrightNameAccent
            )}
          >
            Pavan MG
          </span>
          &nbsp; with&nbsp;
          <span
            className={clsx(
              'text-background-clip',
              'gradient-basic',
              s.footer__copyrightLoveAccent
            )}
          >
            Love
          </span>
          &nbsp; &&nbsp;
          <span
            className={clsx(
              'text-background-clip',
              'gradient-basic',
              s.footer__copyrightCoffeeAccent
            )}
          >
            Coffee
          </span>
        </p>
      </div>
    </footer>
  );
};
