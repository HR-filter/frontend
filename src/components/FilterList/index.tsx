import { Grid } from '@mui/material';
import { InputAuto } from '../../ui/InputAuto';

export default function FilterList() {
  const data = [
    {
      title: 'Специализация',
      options: [
        {
          id: 1,
          name: 'Фронтенд-разработчик',
        },
        {
          id: 2,
          name: 'Фулстек-разработчик',
        },
        {
          id: 3,
          name: 'Python-разработчик',
        },
        {
          id: 4,
          name: 'Инженер по тестированию',
        },
      ],
    },
    {
      title: 'Навык',
      options: [
        {
          id: 1,
          name: 'Junior',
        },
        {
          id: 2,
          name: 'Middle',
        },
      ],
    },
  ];

  return (
    <Grid sx={{ flexGrow: 1 }} container rowGap={5} justifyContent="center">
      {data.map((item) => (
        <Grid key={item.title} item xs={12}>
          <InputAuto options={item.options} name={item.title} />
        </Grid>
      ))}
    </Grid>
  );
}
