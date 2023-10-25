import Logo from '../Logo';
import Navigation from '../Navigation';
import styles from './Aside.module.css';

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Logo />
      <Navigation />
    </aside>
  );
}
