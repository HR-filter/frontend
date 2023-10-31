import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/index';
import { useDispatch } from 'react-redux';

import { SimpleSlide } from '../../components/SimpleSlide';
import styles from './style.module.scss';
import SearchBar from '../../ui/search-bar';
import FilterList from '../../components/FilterList';
import CardSmall from '../../components/CardSmall';
import { resumes } from '../../assets/data/demoResume';
import NotFoundErrorMessage from '../../ui/NotFoundErrorMessage';
import { addToFavorites, removeFromFavorites } from '../../actions/userActions';

function Main() {
  const dispatch = useDispatch(); // Получить диспетчер для отправки действий в хранилище

  const [popupId, setPopupId] = useState<number | null>(null);
  // Селектор для получения favoriteCardIds
  const favoriteCardIds = useSelector(
    (state: RootState) => state.user.favoriteCardIds,
  );

  const onToggleFavorite = (id: number) => {
    if (favoriteCardIds.includes(id)) {
      // Если ID уже в избранных, удаляем его
      dispatch(removeFromFavorites(id));
    } else {
      // Если ID не в избранных, добавляем его
      dispatch(addToFavorites(id));
    }
  };

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
      isViewed={false}
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
        <h1 className={styles.main__header}>Поиск кандидатов</h1>
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
