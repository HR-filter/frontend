import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/index';
import { useDispatch } from 'react-redux';

import { SimpleSlide } from '../../components/SimpleSlide';
import styles from './style.module.scss';
import SearchBar from '../../ui/search-bar';
import CardSmall from '../../components/CardSmall';
import { resumes } from '../../assets/data/demoResume';
import NotFoundErrorMessage from '../../ui/NotFoundErrorMessage';
import {
  addToFavorites,
  removeFromFavorites,
  addViewed,
} from '../../actions/userActions';

function Favourite() {
  const dispatch = useDispatch(); // Получить диспетчер для отправки действий в хранилище

  // Селектор для получения favoriteCardIds
  const favoriteCardIds = useSelector(
    (state: RootState) => state.user.favoriteCardIds,
  );
  // Получить массив "просмотренных" карточек
  const viewedCardIds = useSelector((state: RootState) => state.user.viewed);

  const [popupId, setPopupId] = useState<number | null>(null);

  const openPopup = (id: number | null) => {
    setPopupId(id);
    onViewed(id);
  };

  const onHandleClose = () => {
    setPopupId(null);
  };

  const onToggleFavorite = (id: number) => {
    if (favoriteCardIds.includes(id)) {
      // Если ID уже в избранных, удаляем его
      dispatch(removeFromFavorites(id));
    } else {
      // Если ID не в избранных, добавляем его
      dispatch(addToFavorites(id));
    }
  };

  const onViewed = (id: number) => {
    if (!viewedCardIds.includes(id)) {
      // Если карточка еще не просмотрена, добавьте ее в "просмотренные"
      dispatch(addViewed(id));
    }
  };

  const cards = resumes
    .filter((resume) => favoriteCardIds.includes(resume.id))
    .map((resume) => (
      <CardSmall
        key={resume.id}
        data={resume}
        isViewed={viewedCardIds.includes(resume.id)}
        isFavourite={favoriteCardIds.includes(resume.id)}
        pdfLink=""
        onClickLike={() => onToggleFavorite(resume.id)}
        onClickDetails={() => openPopup(resume.id)}
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
