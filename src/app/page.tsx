import { Contacts, Footer, Header, Hero, Projects, TechStack } from './components';

import s from './page.module.scss';

export default function Home() {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Hero />
        <TechStack />
        <Projects />
        <Contacts extraClass={s.page__contacts} />
      </main>
      <Footer />
    </div>
  );
}
