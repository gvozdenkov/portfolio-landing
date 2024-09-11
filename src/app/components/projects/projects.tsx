import clsx from 'clsx';

import s from './projects.module.scss';
import { projectItems } from '@/app/shared/config';
import { ProjectCard } from '@/app/shared/ui/project-card/project-card';

export const Projects = () => {
  return (
    <section className={s.section}>
      <hgroup className={clsx('title-group', s.section__title)}>
        <h2 className="title">Projects</h2>
        <p className="subtitle">Things I’ve built so far</p>
      </hgroup>

      <ul className={s.cardList}>
        {projectItems.map((project) => (
          <li>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
