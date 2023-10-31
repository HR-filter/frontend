/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Box, LinearProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  addToFavorites,
  removeFromFavorites,
  addViewed,
} from '../../actions/userActions';

function Main() {
  const dispatch = useDispatch(); // Получить диспетчер для отправки действий в хранилище

  const [popupId, setPopupId] = useState<number | null>(null);
  const [cardsArray, setcardsArray] = useState(resumes);

  // Селектор для получения favoriteCardIds
  const favoriteCardIds = useSelector(
    (state: RootState) => state.user.favoriteCardIds,
  );
  // Получить массив "просмотренных" карточек
  const viewedCardIds = useSelector((state: RootState) => state.user.viewed);

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

  const openPopup = (id: number) => {
    setPopupId(id);
    // При открытии попапа, отметьте карточку как просмотренную
    onViewed(id);
  };

  const closePopup = () => {
    setPopupId(null);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      setcardsArray(cardsArray.concat(resumes));
    }, 1500);
  };

  // const cards = resumes.map((resume) => (
  //   <CardSmall
  //     key={resume.id}
  //     data={resume}
  //     isViewed={viewedCardIds.includes(resume.id)}
  //     isFavourite={favoriteCardIds.includes(resume.id)}
  //     pdfLink=""
  //     onClickLike={() => onToggleFavorite(resume.id)}
  //     onClickDetails={() => openPopup(resume.id)}
  //     onClickTelegram={() => console.log('test')}
  //     onClickEmail={() => console.log('test')}
  //     onClickDownload={() => console.log('test')}
  //   />
  // ));

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.main__header}>Поиск кандидатов</h1>
        <div className={styles.main__content}>
          <div className={styles.main__cards}>
            <SearchBar value="Поиск" />
            {/* // TODO: здесь сделать массив по карточкам */}
            {cardsArray.length !== 0 ? (
              <InfiniteScroll
                dataLength={cardsArray.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={true}
                loader={
                  <Box sx={{ width: '100%', mt: 10 }}>
                    <LinearProgress />
                  </Box>
                }
              >
                <div className={styles['main__cards-container']}>
                  {cardsArray.map((resume: any) => (
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
                  ))}
                </div>
              </InfiniteScroll>
            ) : (
              <NotFoundErrorMessage />
            )}
          </div>
          <FilterList />
        </div>
      </div>

      <SimpleSlide
        isOpen={popupId !== null}
        id={popupId}
        onClose={closePopup}
        isFavourite={favoriteCardIds.includes(popupId)}
        onToggleFavorite={() => onToggleFavorite(popupId)}
      />
    </>
  );
}

export default Main;
