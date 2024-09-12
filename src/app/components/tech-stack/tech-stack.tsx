import React from 'react';

import s from './tech-stack.module.scss';
import clsx from 'clsx';

export const TechStack = () => {
  return (
    <section id="techstack" className={s.section}>
      <hgroup className={clsx('title-group', s.section__title)}>
        <h2 className="title">My Tech Stack</h2>
        <p className="subtitle">Technologies I’ve been working with recently</p>
      </hgroup>

      <ul className={s.iconList}>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_html)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_css)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_js)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_react)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_redux)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_bootstrap)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_tailwind)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_sass)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_git)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_greensock)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_vscode)}></div>
        </li>
        <li>
          <div className={clsx(s.iconList__item, s.iconList__item_github)}></div>
        </li>
      </ul>
    </section>
  );
};
