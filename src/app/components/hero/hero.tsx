import clsx from 'clsx';

import { CircleImage } from '@/app/shared/ui';
import avatar from './avatar-500px.jpg';

import s from './hero.module.scss';

type HeroProps = {
  extraClass?: string;
};

export const Hero = ({ extraClass = '' }: HeroProps) => {
  return (
    <section id="about" className={clsx('padding-block-400', { [extraClass]: !!extraClass })}>
      <h1 className="visually-hidden">Pavan MG web developer</h1>
      <div className={clsx('container', s.hero)}>
        <p className={s.hero__title}>
          Hi &#128075;,
          <br /> My name is
          <br />
          <span className={clsx('text-background-clip', 'gradient-basic', s.hero__titleAccent)}>
            Pavan&nbsp;MG
          </span>
          <br /> I build things for web
        </p>
        <CircleImage image={avatar} extraClass={s.hero__avatar} />
      </div>
    </section>
  );
};
