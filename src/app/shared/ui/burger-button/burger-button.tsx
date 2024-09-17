import clsx from 'clsx';

import { ButtonProps } from '@/app/shared/types';
import { CloseIcon, MenuIcon } from '../icons';

import s from './burger-button.module.scss';

type BurgerButtonProps = ButtonProps & {
  extraClass?: string;
};

export const BurgerButton = ({ extraClass = '', ...props }: BurgerButtonProps) => {
  return (
    <button className={clsx(s.burgerButton, { [extraClass]: !!extraClass })} {...props}>
      <span className="visually-hidden">Menu</span>
      <MenuIcon size={40} />
      <CloseIcon size={40} className={s.burgerButton__close} />
    </button>
  );
};
