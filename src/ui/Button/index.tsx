import Button from '@mui/material/Button';
import { FC } from 'react';
// import { DeleteIcon } from '../../assets/images/icons/DeleteIcon';

export const BasicButton: FC<{
  text: string;
  isFiltersUsed: boolean;
  deleteIcon?: boolean;
}> = ({ text, isFiltersUsed }) => {
  return (
    <Button
      sx={{
        fontSize: 14,
        textTransform: 'none',
      }}
      variant="text"
      disabled={isFiltersUsed}
      // startIcon={<DeleteIcon />}
    >
      {text}
    </Button>
  );
};
