import clsx from 'clsx';

import { ButtonProps } from '@/app/shared/types';
import menu from './menu.svg';

import s from './burger-button.module.scss';
import Image from 'next/image';
import { Icon } from '../icons/icon';

type BurgerButtonProps = ButtonProps & {
  extraClass?: string;
};

export const BurgerButton = ({ extraClass = '', ...props }: BurgerButtonProps) => {
  return (
    <button className={clsx(s.burgerButton, { [extraClass]: !!extraClass })} {...props}>
      <span className="visually-hidden">Menu</span>
      <Icon name="menu" size={40} aria-hidden />
      <Icon name="close" size={40} className={s.burgerButton__close} aria-hidden />
    </button>
  );
};
