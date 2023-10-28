import { Divider, Stack } from '@mui/material';
import { InputAuto } from '../../ui/InputAuto';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BasicButton } from '../../ui/Button';
import { useEffect, useState } from 'react';
import { Title } from '../../ui/Title/index';
import CheckboxLabel from '../../ui/checkbox/index';

interface IFormProps {
  name: string;
  options: [
    {
      id: number;
      label: string;
    },
  ];
  checkbox: [
    {
      label: boolean;
    },
  ];
}

const filterData = [
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

const checkboxData = [
  { title: 'Высшее образование', label: 'has_higher_education' },
];
// "Участие в хакатонах", "Наличие пет-проектов", "Навыки подтверждены", "С видео презентацией"

export default function FilterList() {
  const [isFiltersUsed, setFiltersUsed] = useState(true);

  useEffect(() => {
    setFiltersUsed(!isFiltersUsed);
  }, []);

  const methods = useForm<IFormProps>({ defaultValues: {} });

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
            {filterData.map((item) => (
              <InputAuto
                key={item.title}
                name={item.name}
                options={item.options}
                title={item.title}
              />
            ))}
          </Stack>
          <Title title="Дополнительно" />
          <Stack gap={5} justifyContent="center">
            {checkboxData.map((item, index) => (
              <CheckboxLabel
                key={index}
                label={item.label}
                title={item.title}
              />
            ))}
          </Stack>
          <Divider />
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <BasicButton text="Сохранить" isFiltersUsed type="submit" />
            <BasicButton text="Сбросить" isFiltersUsed />
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  );
}
