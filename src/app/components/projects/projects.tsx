import clsx from 'clsx';

import { projectItems } from '@/app/shared/config';
import { ProjectCard, Title } from '@/app/shared/ui';

import s from './projects.module.scss';

export const Projects = () => {
  return (
    <section id="projects" className={s.section}>
      <Title title="Projects" subtitle="Things I’ve built so far" extraClass={s.section__title} />

      <ul className={s.cardList}>
        {projectItems.map((project) => (
          <li key={project.codeLink}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
