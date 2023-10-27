import { Autocomplete, TextField, Typography, Box } from '@mui/material';
import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

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
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
          fontSize: 14,
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
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
            onChange={(values) => {
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
