import Link from 'next/link';
import clsx from 'clsx';

import { SocialItem } from '../../types';

import s from './social-list.module.scss';
import { Icon } from '../icons/icon';

type SocialList = {
  items: SocialItem[];
  extraClass?: string;
};

export const SocialList = ({ items, extraClass = '' }: SocialList) => {
  return (
    <ul className={clsx(s.socialList, { [extraClass]: !!extraClass })}>
      {items.map((item) => (
        <li>
          <Link
            href={item.link}
            title={item.title}
            aria-label={item.title}
            rel="external noreferrer noopener"
            target="_blank"
          >
            <Icon name={item.name} size={30} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
