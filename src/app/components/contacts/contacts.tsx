import clsx from 'clsx';

import { Logo, SocialList } from '@/app/shared/ui';

import s from './contacts.module.scss';

type ContactsProps = {
  extraClass?: string;
};

export const Contacts = ({ extraClass = '' }: ContactsProps) => {
  return (
    <section id="contact" className={clsx('padding-block-100', { [extraClass]: !!extraClass })}>
      <div className={clsx('container', s.contacts)}>
        <Logo solid extraClass={s.contacts__logo} />
        <p className={clsx(s.contacts__text, s.contacts__text_phone)}>+91 12345 09876</p>
        <p className={clsx(s.contacts__text, s.contacts__text_email)}>info@example.com</p>
        <SocialList extraClass={s.contacts__social} />
      </div>
    </section>
  );
};
