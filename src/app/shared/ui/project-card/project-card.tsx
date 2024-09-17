import Link from 'next/link';
import Image from 'next/image';

import { ProjectInfo } from '../../types';

import s from './project-card.module.scss';
import { ChainIcon, GitHubIcon } from '../icons';

export const ProjectCard = ({
  image,
  alt,
  title,
  desc,
  stack,
  previewLink,
  codeLink,
}: ProjectInfo) => {
  return (
    <article className={s.card}>
      <header className={s.card__header}>
        <div style={{ position: 'relative', height: '260px', width: '100%' }}>
          <Image
            src={image}
            alt={alt}
            className={s.card__img}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <h3 className={s.card__title}>{title}</h3>
      </header>
      <p className={s.card__desc}>{desc}</p>
      <p className={s.card__stack}>
        <span className={s.card__textAccent}>Tech stack: </span>
        {stack.join(', ')}
      </p>
      <footer className={s.card__footer}>
        <ul className={s.card__footerList}>
          <li>
            <Link href={previewLink} className={s.card__footerLink}>
              <ChainIcon size={20} />
              Live Preview
            </Link>
          </li>
          <li>
            <Link href={codeLink} className={s.card__footerLink}>
              <GitHubIcon size={20} />
              View Code
            </Link>
          </li>
        </ul>
      </footer>
    </article>
  );
};
