import { ToggleButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FC } from 'react';

const FavouriteToggleResume: FC<{
  isEnabled: boolean;
  isActive: boolean;
  value: boolean;
  onChange: () => void;
}> = ({ isEnabled, isActive, onChange, value }) => {
  return (
    <ToggleButton
      value={value}
      disabled={!isEnabled}
      onChange={onChange}
      selected={isActive}
      sx={{ width: '36px', height: '36px', borderRadius: '6px' }}
    >
      <FavoriteBorderOutlinedIcon color="primary" />
    </ToggleButton>
  );
};

export default FavouriteToggleResume;
