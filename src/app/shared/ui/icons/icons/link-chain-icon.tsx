import { SvgIcon, SVGIconProps } from '../common/svg-icon';

export const LinkChainIcon = (props: SVGIconProps) => {
  return (
    <SvgIcon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.667"
        d="M11.287 8.713a3.64 3.64 0 0 0-5.147 0l-2.574 2.574a3.64 3.64 0 0 0 5.147 5.147L10 15.147"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.667"
        d="M8.713 11.287a3.64 3.64 0 0 0 5.147 0l2.574-2.574a3.64 3.64 0 0 0-5.147-5.147L10 4.853"
      />
    </SvgIcon>
  );
};
