import clsx from 'clsx';

import { Logo, SocialList } from '@/app/shared/ui';
import { socialItems } from '@/app/shared/config';

import s from './contacts.module.scss';

type ContactsProps = {
  extraClass?: string;
};

export const Contacts = ({ extraClass = '' }: ContactsProps) => {
  return (
    <section className={clsx(s.contacts, { [extraClass]: !!extraClass })}>
      <Logo solid />
      <p className={clsx(s.contacts__text, s.contacts__text_phone)}>+91 12345 09876</p>
      <p className={clsx(s.contacts__text, s.contacts__text_email)}>info@example.com</p>
      <SocialList items={socialItems} extraClass={s.contacts__social} />
    </section>
  );
};
