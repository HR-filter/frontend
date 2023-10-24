import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.notificationButton}></button>
    </header>
  );
}
