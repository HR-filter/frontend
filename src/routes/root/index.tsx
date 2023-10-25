import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import styles from './Root.module.css';

function Root() {
  return (
    <div className={styles.root}>
      <aside className={styles.rootSideMenu}>
        <Logo />
        <Navigation />
      </aside>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
