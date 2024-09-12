import Link from 'next/link';
import clsx from 'clsx';

import { SocialItem } from '../../types';
import { Icon } from '../icons/icon';

import s from './social-list.module.scss';

type SocialList = {
  items: SocialItem[];
  extraClass?: string;
};

export const SocialList = ({ items, extraClass = '' }: SocialList) => {
  return (
    <ul className={clsx(s.socialList, { [extraClass]: !!extraClass })}>
      {items.map((item) => (
        <li key={item.link} className={s.socialList__item}>
          <Link
            href={item.link}
            title={item.title}
            aria-label={item.title}
            rel="external noreferrer noopener"
            target="_blank"
            className={s.svgLink}
          >
            <Icon name={item.name} size={30} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
