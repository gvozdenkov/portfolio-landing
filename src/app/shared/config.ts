import { MenuItem, ProjectInfo, TechStackIcon } from './types';

export const MenuItems: MenuItem[] = [
  {
    text: 'Home',
    link: '#home',
  },
  {
    text: 'About',
    link: '#about',
  },
  {
    text: 'Tech Stack',
    link: '#techstack',
  },
  {
    text: 'Projects',
    link: '#projects',
  },
  {
    text: 'Contact',
    link: '#contact',
  },
];

export const techStackIcons: TechStackIcon[] = [
  {
    image: '/${basePath}/static/images/icons/html.svg',
    title: 'html',
    width: 120,
    height: 120,
  },
  {
    image: '/${basePath}/static/images/icons/css.svg',
    title: 'css',
    width: 120,
    height: 119,
  },
  {
    image: '/${basePath}/static/images/icons/js.svg',
    title: 'java script',
    width: 120,
    height: 120,
  },
  {
    image: '/${basePath}/static/images/icons/react.svg',
    title: 'react',
    width: 113,
    height: 101,
  },
  {
    image: '/${basePath}/static/images/icons/redux.svg',
    title: 'redux',
    width: 105,
    height: 100,
  },
  {
    image: '/${basePath}/static/images/icons/bootstrap.svg',
    title: 'bootstrap',
    width: 88,
    height: 87,
  },
  {
    image: '/${basePath}/static/images/icons/tailwind.svg',
    title: 'tailwind',
    width: 131,
    height: 131,
  },
  {
    image: '/${basePath}/static/images/icons/sass.svg',
    title: 'sass',
    width: 117,
    height: 87,
  },
  {
    image: '/${basePath}/static/images/icons/git.svg',
    title: 'git',
    width: 105,
    height: 105,
  },
  {
    image: '/${basePath}/static/images/icons/greensock.svg',
    title: 'greensock',
    width: 120,
    height: 120,
  },
  {
    image: '/${basePath}/static/images/icons/vscode.svg',
    title: 'vscode',
    width: 112,
    height: 112,
  },
  {
    image: '/${basePath}/static/images/icons/github.svg',
    title: 'github',
    width: 88,
    height: 88,
  },
];

export const projectItems: ProjectInfo[] = [
  {
    image: '/${basePath}/static/images/project-01.avif',
    alt: 'project 01 image alt',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.',
    stack: ['HTML', 'JavaScript', 'SASS', 'React'],
    previewLink: '/path-to-preview-project-01',
    codeLink: '/path-to-code-project-01',
  },
  {
    image: '/${basePath}/static/images/project-02.avif',
    alt: 'project 02 image alt',
    title: 'Project Tile goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis libero dignissim, maximus sapien at, condimentum sapien. Nulla mauris orci, congue ut bibendum id, rhoncus nec tortor. Nunc aliquet purus id auctor placerat. Nulla vestibulum mauris magna, tempus rhoncus lacus ultrices ac. Suspendisse consectetur ultricies iaculis. Etiam accumsan diam nec.',
    stack: ['HTML', 'JavaScript', 'SASS', 'React'],
    previewLink: '/path-to-preview-project-02',
    codeLink: '/path-to-code-project-02',
  },
  {
    image: '/${basePath}/static/images/project-03.avif',
    alt: 'project 03 image alt',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description.',
    stack: ['HTML', 'JavaScript', 'SASS', 'React', 'Redux', 'React Router'],
    previewLink: '/path-to-preview-project-03',
    codeLink: '/path-to-code-project-03',
  },
  {
    image: '/${basePath}/static/images/project-04.avif',
    alt: 'project 04 image alt',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.',
    stack: ['HTML', 'JavaScript', 'SASS', 'React'],
    previewLink: '/path-to-preview-project-04',
    codeLink: '/path-to-code-project-04',
  },
  {
    image: '/${basePath}/static/images/project-05.avif',
    alt: 'project 05 image alt',
    title: 'Project Tile goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis libero dignissim, maximus sapien at, condimentum sapien. Nulla mauris orci, congue ut bibendum id, rhoncus nec tortor. Nunc aliquet purus id auctor placerat. Nulla vestibulum mauris magna, tempus rhoncus lacus ultrices ac. Suspendisse consectetur ultricies iaculis. Etiam accumsan diam nec.',
    stack: ['HTML', 'JavaScript', 'SASS', 'React'],
    previewLink: '/path-to-preview-project-05',
    codeLink: '/path-to-code-project-05',
  },
  {
    image: '/${basePath}/static/images/project-06.avif',
    alt: 'project 06 image alt',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.',
    stack: ['HTML', 'JavaScript', 'SASS', 'React'],
    previewLink: '/path-to-preview-project-06',
    codeLink: '/path-to-code-project-06',
  },
];
