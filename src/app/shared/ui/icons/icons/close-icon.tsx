import { SvgIcon, SVGIconProps } from '../common/svg-icon';

export const CloseIcon = (props: SVGIconProps) => {
  return (
    <SvgIcon viewBox="0 -960 960 960" fill="currentColor" {...props}>
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </SvgIcon>
  );
};
