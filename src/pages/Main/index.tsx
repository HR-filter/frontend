import { useState } from 'react';
import { SimpleSlide } from '../../components/SimpleSlide';
import styles from './style.module.scss';
import SearchBar from '../../ui/search-bar';
import FilterList from '../../components/FilterList';
// import CardFull from '../../components/CardFull';
// import demoResume from '../../assets/data/demoResume';

function Main() {
  const [isSlideOpen, setIsSlideOpen] = useState(true);

  return (
    <SimpleSlide isSlideOpen={isSlideOpen} setIsSlideOpen={setIsSlideOpen}>
      <div className={styles.main}>
        <h1 className={styles.main__header}>Поиск кандидатов</h1>
        <div className={styles.main__content}>
          <SearchBar value="Поиск" />
          <FilterList />
        </div>
      </div>
      {/* <CardFull
        data={demoResume}
        isViewed={true}
        isFavourite={true}
        pdfLink="http://ya.ru"
        onClickLike={() => console.log('test')}
        onClickTelegram={() => console.log('test')}
        onClickEmail={() => console.log('test')}
        onClickDownload={() => console.log('test')}
      /> */}
    </SimpleSlide>
  );
}

export default Main;
