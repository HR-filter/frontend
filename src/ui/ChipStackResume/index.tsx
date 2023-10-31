import { FC, ReactNode } from 'react';
import { Stack } from '@mui/material';

const ChipStackResume: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
      {children}
    </Stack>
  );
};

export default ChipStackResume;
