import { useState } from 'react';
import { SimpleSlide } from '../../components/SimpleSlide';
import CardFull from '../../components/CardFull';
import demoResume from '../../assets/data/demoResume';

function Main() {
  const [isSlideOpen, setIsSlideOpen] = useState(true);

  return (
    <SimpleSlide isSlideOpen={isSlideOpen} setIsSlideOpen={setIsSlideOpen}>
      <CardFull
        data={demoResume}
        isViewed={true}
        isFavourite={true}
        pdfLink="http://ya.ru"
        onClickLike={() => console.log('test')}
        onClickDetails={() => console.log('test')}
        onClickTelegram={() => console.log('test')}
        onClickEmail={() => console.log('test')}
        onClickDownload={() => console.log('test')}
      />
    </SimpleSlide>
  );
}

export default Main;
