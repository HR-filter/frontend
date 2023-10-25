import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import styles from './index.module.css';

function Root() {
  return (
    <div className={styles.page}>
      <aside className={styles.pageSideMenu}>
        <Logo />
        <Navigation />
      </aside>
      <main className={styles.pageMain}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
