import Image from 'next/image';
import clsx from 'clsx';

import { Title } from '@/app/shared/ui';
import { techStackIcons } from '@/app/shared/config';
import { convertImagePath } from '@/app/shared/utils/convert-image-path';

import s from './tech-stack.module.scss';

export const TechStack = () => {
  return (
    <section id="techstack" className={clsx('padding-block-400')}>
      <div className={clsx('container', s.container)}>
        <Title
          title="My Tech Stack"
          subtitle="Technologies I’ve been working with recently"
          extraClass={s.container__title}
        />

        <ul className={s.iconList}>
          {techStackIcons.map(({ image, title, width, height }) => (
            <li
              key={image}
              title={title}
              aria-label={title}
              style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}
            >
              <Image
                src={convertImagePath(image)}
                alt=""
                aria-hidden
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
