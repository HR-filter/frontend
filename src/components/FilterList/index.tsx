import { Divider, Stack } from '@mui/material';
import { InputAuto } from '../../ui/InputAuto';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BasicButton } from '../../ui/Button';
import { useEffect, useState } from 'react';
import { Title } from '../../ui/Title/index';

interface IFormProps {
  name: string;
  options: [
    {
      id: number;
      label: string;
    },
  ];
}

const data = [
  {
    title: 'Специализация',
    name: 'specialization',
    options: [
      {
        id: 1,
        label: 'Фронтенд-разработчик',
      },
      {
        id: 2,
        label: 'Фулстек-разработчик',
      },
      {
        id: 3,
        label: 'Python-разработчик',
      },
      {
        id: 4,
        label: 'Инженер по тестированию',
      },
    ],
  },
  {
    title: 'Навык',
    name: 'skill',
    options: [
      {
        id: 1,
        label: 'Junior',
      },
      {
        id: 2,
        label: 'Middle',
      },
    ],
  },
];

export default function FilterList() {
  const [isFiltersUsed, setFiltersUsed] = useState(true);

  useEffect(() => {
    setFiltersUsed(!isFiltersUsed);
  }, []);

  const methods = useForm<IFormProps>();

  const submitFilters: SubmitHandler<IFormProps> = async (info: IFormProps) => {
    console.log('data submitted', info);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitFilters)}>
        <Stack
          border={1}
          borderColor="action.disabledBackground"
          width={280}
          justifyContent="center"
          padding={6}
          gap={5}
          direction="column"
          borderRadius={1}
        >
          <Title title="Фильтры" color="text.secondary" fontSize={14} />
          <Stack gap={5} justifyContent="center">
            {data.map((item) => (
              <InputAuto
                key={item.title}
                name={item.name}
                options={item.options}
                title={item.title}
              />
            ))}
          </Stack>
          <Stack></Stack>
          <Divider />
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <BasicButton text="Сохранить" isFiltersUsed type="submit" />
            <BasicButton text="Сбросить" isFiltersUsed type="reset" />
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  );
}
