import { SVGProps } from 'react';

import s from './svg-icon.module.scss';

export interface SVGIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const SvgIcon = ({ width, height, size, viewBox, children, ...props }: SVGIconProps) => {
  return (
    <svg
      className={s.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox ?? '0 0 24 24'}
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      {children}
    </svg>
  );
};
