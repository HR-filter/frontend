import Button from '@mui/material/Button';
import { FC } from 'react';
// import { DeleteIcon } from '../../assets/images/icons/DeleteIcon';

export const BasicButton: FC<{
  text: string;
  isFiltersUsed?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: () => void;
}> = ({ text, isFiltersUsed, type, handleClick }) => {
  return (
    <Button
      sx={{
        fontSize: 14,
        textTransform: 'none',
      }}
      variant="text"
      type={type}
      disabled={!isFiltersUsed}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
