import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@mui/styles';

interface CheckboxProps {
  label: string;
  checked?: boolean;
}

export default function CheckboxLabel({
  label,
  checked = false,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const useStyles = makeStyles({
    invertedCheckbox: {
      '&.Mui-checked': {
        color: '#5a9bff', // Blue color for the checkmark when checked
      },
      '&.MuiCheckbox-root': {
        border: '1px solid #5a9bff', // Blue border
        backgroundColor: 'white', // White background
      },
    },
  });

  const classes = useStyles();

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          className={classes.invertedCheckbox}
        />
      }
      sx={{
        '& .MuiFormControlLabel-label': {
          fontFamily: 'YS Text, sans-serif',
          fontSize: '14px',
          color: '#02f8',
        },
      }}
    />
  );
}
