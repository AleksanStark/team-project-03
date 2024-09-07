import AuthNav from './AuthNav/AuthNav';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css['position']}>
          <AuthNav />
        </div>
      </div>
    </header>
  );
}
