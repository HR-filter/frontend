import { FC } from 'react';
import { Chip, Avatar } from '@mui/material';
import dotPath from '../../assets/images/icons/dot.svg';

const ChipSkill: FC<{ label: string }> = ({ label }) => {
  return (
    <Chip
      icon={<Avatar sx={{ height: 6, width: 6 }} src={dotPath} />}
      label={label}
      variant="filled"
      sx={{
        boxShadow: 1,
        backgroundColor: 'primary.light',
        borderRadius: 1,
        height: 24,
        fontSize: '13px',
      }}
    />
  );
};

export default ChipSkill;
