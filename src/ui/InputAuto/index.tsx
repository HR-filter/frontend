import { Autocomplete, TextField, Typography, Box } from '@mui/material';

interface AutocompleteOption {
  label: string;
  id: number;
}

export default function InputAuto({ name = 'Название поля' }) {
  const options: AutocompleteOption[] = [
    { label: 'Junior', id: 1 },
    { label: 'Medium', id: 2 },
    { label: 'WellDone', id: 3 },
  ];

  return (
    <Box sx={{ maxWidth: 264 }}>
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
        disablePortal
        options={options}
        renderInput={(params) => (
          <TextField {...params} placeholder="Не указано" />
        )}
      />
    </Box>
  );
}
