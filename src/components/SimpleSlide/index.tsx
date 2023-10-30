import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

interface SimpleSlideProps {
  isSlideOpen?: boolean;
  setIsSlideOpen?: (isSlideOpen: boolean) => void;
  children: ReactNode;
}

export const SimpleSlide: React.FC<SimpleSlideProps> = ({
  isSlideOpen,
  setIsSlideOpen,
  children,
}) => {
  console.log(setIsSlideOpen);
  // onClose={setIsSlideOpen}

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Slide direction="left" in={isSlideOpen} mountOnEnter unmountOnExit>
        <div>{children}</div>
      </Slide>
    </Box>
  );
};
