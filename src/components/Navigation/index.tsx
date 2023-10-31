import { Link, NavLink } from 'react-router-dom';
import userIconPath from '../../assets/images/icons/user.svg';
import infoIconPath from '../../assets/images/icons/info.svg';
import lentaIconPath from '../../assets/images/icons/lenta.svg';
import exitIconPath from '../../assets/images/icons/exit.svg';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.navigationLink : styles.navigationLinkActive
            }
            to="/"
          >
            <img src={userIconPath} alt="Кандидаты"></img>
            <span>Кандидаты</span>
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.navigationLink : styles.navigationLinkActive
            }
            to="/favourite"
          >
            <img src={lentaIconPath} alt="Избранное"></img>
            <span>Избранное</span>
          </NavLink>
        </li>
      </ul>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <Link className={styles.navigationLink} to="#">
            <img src={infoIconPath} alt="Поддержка"></img>
            <span>Поддержка</span>
          </Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link className={styles.navigationLink} to="#">
            <img src={exitIconPath} alt="Выход"></img>
            <span>Выход</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
