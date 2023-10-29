import { IconButton } from '@mui/material';
import { FC, ReactNode } from 'react';

const IconButtonResume: FC<{
  children: ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{ width: '44px', height: '44px', borderRadius: '6px' }}
    >
      {children}
    </IconButton>
  );
};

export default IconButtonResume;
