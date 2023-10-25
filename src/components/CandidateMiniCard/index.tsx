import classNames from 'classnames';
import styles from './index.module.scss';

function CandidateCardMini() {
  const headerClasses = classNames(styles.card__header);
  const contentClasses = classNames(
    styles.card__content,
    styles.card__withBorder,
  );
  const infoContainerClasses = classNames(
    styles.card__info_container,
    styles.card__withBorder,
  );

  return (
    <div className={styles.card}>
      <div className={headerClasses}>
        <span className={styles['card__header-span']}>
          На 95% соответствует запросу
        </span>
        <div className={styles['card__header-buttons']}>
          <button className={styles['card__header-eye']} />
          <button className={styles['card__header-like']} />
        </div>
      </div>
      <div className={contentClasses}>{/* Этот элемент получит border */}</div>
      <div className={infoContainerClasses}>
        {/* Этот элемент тоже получит border */}
      </div>
      <div className={styles.card__connection}>
        <a href="#" className={styles.card__email}></a>
        <a href="https://t.me/multilina" className={styles.card__telegram}></a>
        <a href="#" className={styles.card__downlod}></a>
      </div>
    </div>
  );
}

export default CandidateCardMini;
