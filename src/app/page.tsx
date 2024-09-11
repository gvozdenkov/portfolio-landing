import { Header, Hero, Projects, TechStack } from './components';

import s from './page.module.scss';

export default function Home() {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Hero extraClass={s.page__hero} />
        <TechStack />
        <Projects />
      </main>
      <footer className={s.footer}>footer</footer>
    </div>
  );
}
