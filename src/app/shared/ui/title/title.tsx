import clsx from 'clsx';

import s from './title.module.scss';

type TitleProps = {
  title: string;
  subtitle?: string;
  extraClass?: string;
};

export const Title = ({ title, subtitle, extraClass = '' }: TitleProps) => {
  return (
    <hgroup className={clsx(s.hgroup, { [extraClass]: !!extraClass })}>
      <h2 className={s.hgroup__title}>{title}</h2>
      {subtitle && <p className={s.hgroup__subtitle}>{subtitle}</p>}
    </hgroup>
  );
};
