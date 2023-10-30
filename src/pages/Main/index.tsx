import { useState } from 'react';

import { SimpleSlide } from '../../components/SimpleSlide';
import styles from './style.module.scss';
import SearchBar from '../../ui/search-bar';
import FilterList from '../../components/FilterList';
import CardSmall from '../../components/CardSmall';
import demoResume from '../../assets/data/demoResume';

function Main() {
  const [popupId, setPopupId] = useState<number | null>(null);

  const openPopup = (id: number | null) => {
    setPopupId(id);
  };

  const onHandleClose = () => {
    setPopupId(null);
  };

  const cards = Array(8)
    .fill(null)
    .map((_, index) => (
      <CardSmall
        key={index}
        data={demoResume}
        isViewed={true}
        isFavourite={true}
        pdfLink=""
        onClickLike={() => console.log('test')}
        onClickDetails={() => openPopup(index)}
        onClickTelegram={() => console.log('test')}
        onClickEmail={() => console.log('test')}
        onClickDownload={() => console.log('test')}
      />
    ));

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.main__header}>Поиск кандидатов</h1>
        <div className={styles.main__content}>
          <div className={styles.main__cards}>
            <SearchBar value="Поиск" />
            {/* TODO: здесь сделать массив по карточкам */}
            <div className={styles['main__cards-container']}>{cards}</div>
          </div>
          <FilterList />
        </div>
      </div>

      <SimpleSlide
        isOpen={popupId !== null}
        id={String(popupId)}
        onClose={onHandleClose}
      />
    </>
  );
}

export default Main;
