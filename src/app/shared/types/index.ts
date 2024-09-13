export type MenuItem = {
  text: string;
  link: string;
};

export type IconType = 'github' | 'twitter' | 'linkedin' | 'chain' | 'menu' | 'close';

export type SocialItem = {
  name: IconType;
  title: string;
  link: string;
};

export type ProjectInfo = {
  image: string;
  alt: string;
  title: string;
  desc: string;
  stack: string[];
  previewLink: string;
  codeLink: string;
};
