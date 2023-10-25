import logoPath from '../../assets/images/icons/logo.svg';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <img src={logoPath} alt="Логотип проекта" className={styles.logo}></img>
  );
}
