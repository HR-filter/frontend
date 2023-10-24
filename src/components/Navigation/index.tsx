import { Link } from 'react-router-dom';
import userIconPath from '../../assets/images/user.svg';
import infoIconPath from '../../assets/images/info.svg';
import lentaIconPath from '../../assets/images/lenta.svg';
import exitIconPath from '../../assets/images/exit.svg';
import suitcaseIconPath from '../../assets/images/suitcase.svg';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <Link className={styles.navigationLink} to="#">
            <img src={userIconPath} alt="Кандидаты"></img>
            <span>Кандидаты</span>
          </Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link className={styles.navigationLink} to="#">
            <img src={suitcaseIconPath} alt="Вакансии"></img>
            <span>Вакансии</span>
          </Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link className={styles.navigationLink} to="#">
            <img src={lentaIconPath} alt="Избранное"></img>
            <span>Избранное</span>
          </Link>
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
