import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './index.module.css';

interface CheckboxLabelProps {
  label: string;
  checked?: boolean;
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
          size="medium"
          sx={{
            // Добавьте стилизацию для иконки чекбокса здесь
            '& .MuiSvgIcon-root': {
              color: 'primary', // Пример стилизации цвета иконки
            },
          }}
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
};

export default CheckboxLabel;
