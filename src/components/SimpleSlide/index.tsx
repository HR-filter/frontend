import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import CardInfo from '../CardInfo';
import demoUserData from '../../assets/data/demoUser';
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
      <CardInfo userData={demoUserData} />
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
