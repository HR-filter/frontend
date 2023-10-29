import { Chip } from '@mui/material';
import { FC } from 'react';

const ChipResumeStatus: FC<{ label: string }> = ({ label }) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: '#FFF9D3',
        borderRadius: '6px',
        height: '28px',
        marginRight: 'auto',
        fontSize: '13px',
      }}
    />
  );
};

export default ChipResumeStatus;
