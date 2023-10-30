import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import CardFull from '../CardFull';
import demoResume from '../../assets/data/demoResume';
import { Dispatch, FC, SetStateAction } from 'react';

export const SimpleSlide: FC<{
  isSlideOpen?: boolean;
  setIsSlideOpen?: Dispatch<SetStateAction<boolean>>;
}> = ({ isSlideOpen, setIsSlideOpen }) => {
  console.log(setIsSlideOpen);
  // onClose={setIsSlideOpen}
  // Сюда заносим что надо отрендерить справа в окне
  const body = (
    <Box>
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
    </Box>
  );

  return (
    <Box
      sx={{
        width: 711,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Slide direction="left" in={isSlideOpen} mountOnEnter unmountOnExit>
        {body}
      </Slide>
    </Box>
  );
};
