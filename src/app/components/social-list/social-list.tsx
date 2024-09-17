import Link from 'next/link';
import clsx from 'clsx';

import { SocialItem } from '@/app/shared/types';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/app/shared/ui';

import s from './social-list.module.scss';

type SocialList = {
  extraClass?: string;
};

export const SocialList = ({ extraClass = '' }: SocialList) => {
  const icons: SocialItem[] = [
    {
      icon: <GitHubIcon />,
      title: 'Share on github',
      link: 'https://github.com',
    },
    {
      icon: <TwitterIcon />,
      title: 'Share on twitter',
      link: 'https://x.com',
    },
    {
      icon: <LinkedInIcon />,
      title: 'Share on linkedin',
      link: 'https://linkedin.com',
    },
  ];

  return (
    <ul
      role="list"
      aria-label="Social links"
      className={clsx(s.socialList, { [extraClass]: !!extraClass })}
    >
      {icons.map(({ icon, title, link }) => (
        <li key={link} className={s.socialList__item} title={title} aria-label={title}>
          <Link href={link} className={s.socialList__link}>
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
