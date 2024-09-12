import clsx from 'clsx';
import { Navbar } from '../navbar/navbar';

import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Navbar />
      <p className={clsx(s.footer__copyright)}>
        Designed and built by&nbsp;
        <span
          className={clsx('text-background-clip', 'gradient-basic', s.footer__copyrightNameAccent)}
        >
          Pavan MG
        </span>
        &nbsp; with&nbsp;
        <span
          className={clsx('text-background-clip', 'gradient-basic', s.footer__copyrightLoveAccent)}
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
    </footer>
  );
};
