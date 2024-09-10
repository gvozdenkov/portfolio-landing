import { Logo } from './shared/ui';

import s from './page.module.css';

export default function Home() {
  return (
    <div className={s.page}>
      <header>header</header>
      <main className={s.main}>
        <Logo solid />
      </main>
      <footer className={s.footer}>footer</footer>
    </div>
  );
}
