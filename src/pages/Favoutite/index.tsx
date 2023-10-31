import { useState } from 'react';

import { SimpleSlide } from '../../components/SimpleSlide';
import styles from './style.module.scss';
import SearchBar from '../../ui/search-bar';
import CardSmall from '../../components/CardSmall';
import { resumes } from '../../assets/data/demoResume';
import NotFoundErrorMessage from '../../ui/NotFoundErrorMessage';

function Favourite() {
  const [popupId, setPopupId] = useState<number | null>(null);

  const openPopup = (id: number | null) => {
    setPopupId(id);
  };

  const onHandleClose = () => {
    setPopupId(null);
  };

  const cards = resumes.map((resume) => (
    <CardSmall
      key={resume.id}
      data={resume}
      isViewed={true}
      isFavourite={true}
      pdfLink=""
      onClickLike={() => console.log('test')}
      onClickDetails={() => openPopup(resume.id)} // Используйте resume.id вместо индекса
      onClickTelegram={() => console.log('test')}
      onClickEmail={() => console.log('test')}
      onClickDownload={() => console.log('test')}
    />
  ));

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.main__header}>Избранные кандидаты</h1>
        <div className={styles.main__content}>
          <div className={styles.main__cards}>
            <SearchBar value="Поиск" />
            {/* // TODO: здесь сделать массив по карточкам */}
            {cards.length > 0 ? (
              <div className={styles['main__cards-container']}>{cards}</div>
            ) : (
              <NotFoundErrorMessage />
            )}
          </div>
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

export default Favourite;
