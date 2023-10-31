import { Drawer, Box } from '@mui/material';
import CardFull from '../CardFull';
import { demoResume, resumes } from '../../assets/data/demoResume';

interface SimpleSlideProps {
  id: number | null;
  isOpen?: boolean;
  onClose: () => void;
}

export const SimpleSlide: React.FC<SimpleSlideProps> = ({
  id = 0,
  isOpen = false,
  onClose,
}) => {
  const defaultResumeData = demoResume;
  // Найти резюме по id
  const foundResume = resumes.find((resume) => resume.id === id);

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        sx={{
          m: 1,
          maxWidth: '720px',
        }}
      >
        <CardFull
          data={foundResume || defaultResumeData}
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
