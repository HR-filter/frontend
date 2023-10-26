import { Autocomplete, TextField, Typography, Box } from '@mui/material';
import { FC } from 'react';

interface AutocompleteOption {
  name: string;
}

export const InputAuto: FC<{
  name: string;
  options: AutocompleteOption[];
}> = ({ name, options }) => (
  <Box sx={{ width: 232 }}>
    <Typography
      variant="caption"
      display="block"
      gutterBottom
      sx={{
        fontSize: 16,
        fontWeight: 'medium',
      }}
    >
      {name}
    </Typography>
    <Autocomplete
      multiple
      limitTags={2}
      disableCloseOnSelect
      options={options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} placeholder={name} />}
    />
  </Box>
);
