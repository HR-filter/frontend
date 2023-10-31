import CloseIcon from '@mui/icons-material/Close';

import { IconButton } from '@mui/material';
import { FC } from 'react';

const IconButtonClose: FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  const handleClose = () => {
    onClick();
  };
  return (
    <IconButton
      onClick={handleClose}
      sx={{
        width: '36px',
        height: '36px',
        borderRadius: '6px',
        marginLeft: '14px',
      }}
    >
      <CloseIcon sx={{ width: '20px', height: '20px' }} />
    </IconButton>
  );
};

export default IconButtonClose;
