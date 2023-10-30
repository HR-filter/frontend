const demoResume = {
  user: {
    email: 'Kirill@123.ru',
    id: 2,
    username: 'Kirill',
    first_name: 'Кирилл',
    last_name: 'Тарелкин',
  },
  age: 28,
  achievements: [2, 4, 5, 7, 1],
  photo:
    'http://127.0.0.1:8000/media/student_photos/None/1600253854_10_uwxlO8o.jpg',
  contact_info: {
    phone_number: '+12345647778',
    alternate_email: 'kirill2@ya.ru',
    telegram_login: '@kirill123',
  },
  academic_status: {
    id: 3,
    name: 'Выпускник',
  },
  employment_status: {
    id: 1,
    name: 'Ищу работу',
  },
  grade: {
    id: 1,
    name: 'Junior',
  },
  work_experience: [
    {
      id: 1,
      name: 'Стартап FocusGroup',
      start_date: '2023-05-18',
      end_date: null,
      description:
        'Специалист по информационной безопасности\r\n* Разработка и внедрение политики безопасности\r\n* бла бла бла',
      total_experience_months: 5,
    },
  ],
  location: {
    id: 3,
    name: 'Москва',
  },
  portfolio: [
    {
      id: 1,
      url: 'https://github.com',
    },
  ],
  languages: [
    {
      id: 3,
      name: 'Английский B1',
    },
  ],
  educations: [
    {
      institution: 'Университет УМСС',
      specialization: 'Инженер технолог',
      education_level: 'Высшее образование',
    },
  ],
  description: 'Я специалист в области защиты информации...',
  specialization: {
    id: 4,
    name: 'Инженер по тестированию',
  },
  projects: [
    {
      title: 'Информационная безопасность',
      description:
        'В рамках хакатона проверл анализ и оценку рисков безопасности.',
    },
    {
      title: 'Защита информации на максимим',
      description: 'Шифрование данных и управление инцидентами безопасности.',
    },
  ],
  courses: [
    {
      id: 4,
      specialization: {
        id: 4,
        name: 'Инженер по тестированию',
      },
      skills: [
        {
          id: 31,
          name: 'Figma',
        },
        {
          id: 32,
          name: 'Яндекс.Трекер',
        },
        {
          id: 33,
          name: 'Android Studio',
        },
        {
          id: 34,
          name: 'Postman',
        },
        {
          id: 35,
          name: 'JSON/XML',
        },
        {
          id: 36,
          name: 'XML/XSD',
        },
        {
          id: 37,
          name: 'Apidoc/Swagger',
        },
        {
          id: 38,
          name: 'Cygwin/Terminal',
        },
      ],
    },
  ],
  has_higher_education: false,
  has_participated_in_hackathons: false,
  has_personal_projects: false,
  skills_verified: false,
  has_video_presentation: false,
  percentage_match: 0,
  viewed: false,
  is_favorited: false,
};

const resumes = [
  {
    id: 1,
    user: {
      email: 'Kirill@123.ru',
      id: 2,
      username: 'Kirill',
      first_name: 'Кирилл',
      last_name: 'Тарелкин',
    },
    age: 28,
    achievements: [2, 4, 5, 7, 1],
    photo:
      'http://127.0.0.1:8000/media/student_photos/None/1600253854_10_uwxlO8o.jpg',
    contact_info: {
      phone_number: '+12345647778',
      alternate_email: 'kirill2@ya.ru',
      telegram_login: '@kirill123',
    },
    academic_status: {
      id: 3,
      name: 'Выпускник',
    },
    employment_status: {
      id: 1,
      name: 'Ищу работу',
    },
    grade: {
      id: 1,
      name: 'Junior',
    },
    work_experience: [
      {
        id: 1,
        name: 'Стартап FocusGroup',
        start_date: '18 мая 2023',
        end_date: 'настоящее',
        description:
          'Специалист по информационной безопасности\r\n* Разработка и внедрение политики безопасности\r\n* бла бла бла',
        total_experience_months: 5,
      },
    ],
    location: {
      id: 3,
      name: 'Москва',
    },
    portfolio: [
      {
        id: 1,
        url: 'https://github.com',
      },
    ],
    languages: [
      {
        id: 3,
        name: 'Английский B1',
      },
    ],
    educations: [
      {
        institution: 'Университет УМСС',
        specialization: 'Инженер технолог',
        education_level: 'Высшее образование',
      },
    ],
    description: 'Я специалист в области защиты информации...',
    specialization: {
      id: 4,
      name: 'Инженер по тестированию',
    },
    projects: [
      {
        title: 'Информационная безопасность',
        description:
          'В рамках хакатона проверл анализ и оценку рисков безопасности.',
      },
      {
        title: 'Защита информации на максимим',
        description: 'Шифрование данных и управление инцидентами безопасности.',
      },
    ],
    courses: [
      {
        id: 4,
        specialization: {
          id: 4,
          name: 'Инженер по тестированию',
        },
        skills: [
          {
            id: 31,
            name: 'Figma',
          },
          {
            id: 32,
            name: 'Яндекс.Трекер',
          },
          {
            id: 33,
            name: 'Android Studio',
          },
          {
            id: 34,
            name: 'Postman',
          },
          {
            id: 35,
            name: 'JSON/XML',
          },
          {
            id: 36,
            name: 'XML/XSD',
          },
          {
            id: 37,
            name: 'Apidoc/Swagger',
          },
          {
            id: 38,
            name: 'Cygwin/Terminal',
          },
        ],
      },
    ],
    has_higher_education: false,
    has_participated_in_hackathons: false,
    has_personal_projects: false,
    skills_verified: false,
    has_video_presentation: false,
    percentage_match: 0,
    viewed: false,
    is_favorited: false,
  },
  {
    id: 2,
    user: {
      email: 'Anna@456.ru',
      id: 3,
      username: 'Anna',
      first_name: 'Анна',
      last_name: 'Иванова',
    },
    age: 25,
    achievements: [1, 3, 6],
    photo:
      'http://127.0.0.1:8000/media/student_photos/None/1600253854_10_uwxlO8o.jpg',
    contact_info: {
      phone_number: '+12345678901',
      alternate_email: 'anna2@gmail.com',
      telegram_login: '@anna456',
    },
    academic_status: {
      id: 2,
      name: 'Студент',
    },
    employment_status: {
      id: 2,
      name: 'На стажировке',
    },
    grade: {
      id: 2,
      name: 'Middle',
    },
    work_experience: [
      {
        id: 2,
        name: 'IT Consulting Co.',
        start_date: '15 апреля 2022',
        end_date: 'настоящее',
        description:
          'Системный аналитик\r\n* Анализ и оптимизация бизнес-процессов\r\n* Управление проектами',
        total_experience_months: 12,
      },
    ],
    location: {
      id: 2,
      name: 'Санкт-Петербург',
    },
    portfolio: [
      {
        id: 2,
        url: 'https://linkedin.com/in/annaivanova',
      },
    ],
    languages: [
      {
        id: 2,
        name: 'Английский C1',
      },
    ],
    educations: [
      {
        institution: 'Университет СПБГУ',
        specialization: 'Информационные технологии',
        education_level: 'Высшее образование',
      },
    ],
    description: 'Люблю работать с данными и анализировать процессы.',
    specialization: {
      id: 3,
      name: 'Аналитик данных',
    },
    projects: [
      {
        title: 'Оптимизация производственных процессов',
        description: 'Разработка и внедрение системы мониторинга производства.',
      },
      {
        title: 'Автоматизация отчётности',
        description: 'Создание автоматизированных отчётов для руководства.',
      },
    ],
    courses: [
      {
        id: 3,
        specialization: {
          id: 3,
          name: 'Аналитик данных',
        },
        skills: [
          {
            id: 29,
            name: 'Python',
          },
          {
            id: 30,
            name: 'SQL',
          },
          {
            id: 31,
            name: 'Tableau',
          },
          {
            id: 32,
            name: 'Power BI',
          },
        ],
      },
    ],
    has_higher_education: true,
    has_participated_in_hackathons: true,
    has_personal_projects: true,
    skills_verified: true,
    has_video_presentation: true,
    percentage_match: 90,
    viewed: false,
    is_favorited: false,
  },
];

export { resumes, demoResume };
