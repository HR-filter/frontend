import { Autocomplete, TextField, Box } from '@mui/material';
import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Title } from '../Title';

interface AutocompleteOption {
  id: number;
  label: string;
}

export const InputAuto: FC<{
  title: string;
  name: string;
  options: AutocompleteOption[];
}> = ({ title, name, options }) => {
  const { control } = useFormContext();

  return (
    <Box sx={{ width: 232 }}>
      <Title title={title} />
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <Autocomplete
            disablePortal
            multiple
            limitTags={2}
            disableCloseOnSelect
            options={options}
            onChange={(_event, values) => {
              onChange(values);
            }}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </Box>
  );
};
