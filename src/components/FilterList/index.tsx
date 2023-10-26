import { Typography, Divider, Stack } from '@mui/material';
import { InputAuto } from '../../ui/InputAuto';

import { BasicButton } from '../../ui/Button';
import { useEffect, useState } from 'react';

export default function FilterList() {
  const [isFiltersUsed, setFiltersUsed] = useState(false);

  useEffect(() => {
    setFiltersUsed(!isFiltersUsed);
  }, []);

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
    <Stack
      border={1}
      borderColor="action.disabledBackground"
      width={280}
      justifyContent="center"
      padding={6}
      gap={5}
      direction="column"
    >
      <Typography
        variant="body1"
        gutterBottom
        fontSize={14}
        color="text.secondary"
      >
        Фильтры
      </Typography>
      <Stack gap={5} justifyContent="center">
        {data.map((item) => (
          <InputAuto
            key={item.title}
            options={item.options}
            name={item.title}
          />
        ))}
      </Stack>
      <Divider />
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <BasicButton text="Сохранить" isFiltersUsed />
        <BasicButton text="Сбросить" isFiltersUsed />
      </Stack>
    </Stack>
  );
}
