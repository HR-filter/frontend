import Button from '@mui/material/Button';

export default function TestButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'all !important',
          backgroundColor: (theme) => theme.palette.primary.light,
        },
      }}
      disabled
    >
      Тестовая кнопка из MUI
    </Button>
  );
}
