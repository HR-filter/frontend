import { FC, ReactNode } from 'react';
import { CardActions } from '@mui/material';

const CardActionsResume: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <CardActions
      sx={{
        padding: 0,
        justifyContent: 'space-between',
      }}
    >
      {children}
    </CardActions>
  );
};

export default CardActionsResume;
