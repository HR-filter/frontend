import { useEffect } from 'react';
import Slide from '@mui/material/Slide';
import classnames from 'classnames';
import classes from './style.module.scss';
import CardFull from '../CardFull';
import { demoResume, resumes } from '../../assets/data/demoResume';

interface SimpleSlideProps {
  // setIsSlideOpen?: (isSlideOpen: boolean) => void;
  id: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const SimpleSlide: React.FC<SimpleSlideProps> = ({
  id = '0',
  isOpen = false,
  onClose = () => {},
}) => {
  const defaultResumeData = demoResume;

  const getPopupClasses = classnames(classes.popup, {
    [classes.popup_opened]: isOpen,
  });

  useEffect(() => {
    console.log(id);
  }, []);

  // Найти резюме по id
  const foundResume = resumes.find((resume) => resume.id === Number(id));

  useEffect(() => {
    function handleEscClose(evt: Event) {
      const keyboardEvent = evt as unknown as KeyboardEvent;
      if (keyboardEvent.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleCloseByOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if ((e.target as HTMLElement).classList.contains(classes.popup)) {
      onClose();
    }
  };

  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <section className={getPopupClasses} onClick={handleCloseByOverlay}>
        <div className={classes.popup__form}>
          <CardFull
            // TODO: прокинуть пропсом id и по id найти через апи данные для этой карты
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
        </div>
      </section>
    </Slide>
  );
};
