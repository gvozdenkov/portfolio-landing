import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';

export type MenuItem = {
  text: string;
  link: string;
};

export type SocialItem = {
  icon: JSX.Element;
  title: string;
  link: string;
};

export type TechStackIcon = {
  image: string;
  title: string;
  width: number;
  height: number;
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

type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type NavProps = ElementProps;

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ULProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
