import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const BoxText: FC<{
  text: string;
}> = ({ text }) => {
  return (
    <Box>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default BoxText;
