import { Header, TechStack } from './components';

import s from './page.module.scss';

export default function Home() {
  return (
    <div className={s.page}>
      <Header />
        <TechStack />
      <footer className={s.footer}>footer</footer>
    </div>
  );
}
