import { GitHubIcon } from './icons/github-icon';
import { TwitterIcon } from './icons/twitter-icon';
import { LinkedInIcon } from './icons/linkedin-icon';
import { LinkChainIcon } from './icons/link-chain-icon';

import { SVGIconProps } from './common/svg-icon';
import { IconType } from '../../types';

export interface IconProps extends SVGIconProps {
  name: IconType;
}

export const Icon = ({ name, ...props }: IconProps) =>
  ({
    github: <GitHubIcon {...props} />,
    twitter: <TwitterIcon {...props} />,
    linkedin: <LinkedInIcon {...props} />,
    chain: <LinkChainIcon {...props} />,
  }[name]);
