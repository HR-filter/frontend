import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './index.module.css';

interface CheckboxLabelProps {
  label: string;
  checked?: boolean;
}

function Icon() {
  return (
    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="1.5"
        y=".5"
        width="22"
        height="23"
        rx="3.5"
        fill="#fff"
        stroke="#797981"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="1.5"
        y=".5"
        width="22"
        height="23"
        rx="3.5"
        fill="#fff"
        stroke="#1D6BF3"
      />
      <path
        d="M10.304 15.919L6.385 12a1 1 0 0 0-1.414 1.414l3.92 3.919a1.999 1.999 0 0 0 2.828 0l9.252-9.252a1 1 0 0 0-1.414-1.414l-9.253 9.252z"
        fill="#1D6BF3"
      />
    </svg>
  );
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({
  label,
  checked = false,
}) => {
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
          checked={isChecked}
          onChange={handleChange}
          color="primary"
          size="medium"
          checkedIcon={<CheckIcon />}
          icon={<Icon />}
          sx={{
            '&.MuiButtonBase-root': {
              padding: '0 5px 0 0',
            },
          }}
        />
      }
      sx={{
        height: '25px',
        margin: 0,
      }}
    />
  );
};

export default CheckboxLabel;
