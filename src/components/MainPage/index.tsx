import Navigation from '../Navigation';
import Header from '../Header';
import Content from '../Content';
import Logo from '../Logo';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles.page}>
      <aside className={styles.pageSideMenu}>
        <Logo />
        <Navigation />
      </aside>
      <main className={styles.pageMain}>
        <Header />
        <Content />
      </main>
    </div>
  );
}
