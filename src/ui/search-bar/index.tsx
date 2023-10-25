import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { FC, useState } from 'react';
import loupePath from '../../assets/images/search.svg';

interface SearchBarProps {
  value: string;
}

const SearchBar: FC<SearchBarProps> = ({ value = 'Поиск' }) => {
  const [currentValue, setCurrentValue] = useState('');

  // Позже будем через пропс или через контекст прокидывать значение сюда чтобы сохранять значение при переключении между экранами
  function handleChangeInput(e) {
    setCurrentValue(e.target.value);
  }

  return (
    <TextField
      fullWidth
      placeholder="Поиск"
      type="string"
      label=""
      variant="outlined"
      value={currentValue}
      onChange={handleChangeInput}
      InputLabelProps={{
        disabled: true,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={loupePath} alt="Иконка поиска" />
          </InputAdornment>
        ),
      }}
      sx={{
        input: {
          pr: 1.5,
          pl: 0,
          pt: 1.25,
          pb: 1.25,
          fontSize: 14,
        },
      }}
    />
  );
};

export default SearchBar;
