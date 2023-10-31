import { ToggleButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FC } from 'react';
import { Favorite } from '@mui/icons-material';

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
      sx={{
        width: '36px',
        height: '36px',
        borderRadius: '6px',
        border: 0,
        '&.Mui-selected': { backgroundColor: 'white' },
        boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
      }}
    >
      {isActive ? (
        <Favorite color="primary" />
      ) : (
        <FavoriteBorderOutlinedIcon color="primary" />
      )}
    </ToggleButton>
  );
};

export default FavouriteToggleResume;
