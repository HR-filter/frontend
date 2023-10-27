import Button from '@mui/material/Button';
import { FC } from 'react';
// import { DeleteIcon } from '../../assets/images/icons/DeleteIcon';

export const BasicButton: FC<{
  text: string;
  isFiltersUsed: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
}> = ({ text, isFiltersUsed, type }) => {
  return (
    <Button
      sx={{
        fontSize: 14,
        textTransform: 'none',
      }}
      variant="text"
      type={type}
      disabled={!isFiltersUsed}
    >
      {text}
    </Button>
  );
};
