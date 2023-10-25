import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/joy/Checkbox';

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

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          // variant="outlined"
          checked={isChecked}
          onChange={handleChange}
          size="medium"
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
