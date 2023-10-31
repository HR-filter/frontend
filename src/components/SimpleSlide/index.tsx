import { useEffect } from 'react';
import { Drawer, Box } from '@mui/material';
import classnames from 'classnames';
import classes from './style.module.scss';
import CardFull from '../CardFull';
import demoResume from '../../assets/data/demoResume';

interface SimpleSlideProps {
  // setIsSlideOpen?: (isSlideOpen: boolean) => void;
  id: number | null;
  isOpen?: boolean;
  onClose: () => void;
}

export const SimpleSlide: React.FC<SimpleSlideProps> = ({
  id = 0,
  isOpen = false,
  onClose,
}) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        sx={{
          m: 1,
          maxWidth: '720px',
        }}
      >
        <CardFull
          data={demoResume}
          isViewed={true}
          isFavourite={true}
          pdfLink="http://ya.ru"
          onClickLike={() => console.log('test')}
          onClickTelegram={() => console.log('test')}
          onClickEmail={() => console.log('test')}
          onClickDownload={() => console.log('test')}
          onClickClose={onClose}
        />
      </Box>
    </Drawer>
  );
};
