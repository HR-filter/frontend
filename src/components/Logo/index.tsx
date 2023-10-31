import logoPath from '../../assets/images/icons/logo.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <img src={logoPath} alt="Логотип проекта" className={styles.logo}></img>
  );
}
