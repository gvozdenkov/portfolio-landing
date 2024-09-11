import { Header, Projects, TechStack } from './components';

import s from './page.module.scss';

export default function Home() {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <TechStack />
        <Projects />
      </main>
      <footer className={s.footer}>footer</footer>
    </div>
  );
}
