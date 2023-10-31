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
    'https://www.journal.zarplata.ru/content/images/2021/07/------------_014-1.jpg',
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
    photo: 'https://photoresume.ru/images/portfolio/03.jpg',
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
      'https://www.journal.zarplata.ru/content/images/2021/07/------------_014-1.jpg',
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
  {
    id: 3,
    user: {
      email: 'Max@789.com',
      id: 4,
      username: 'Max',
      first_name: 'Максим',
      last_name: 'Петров',
    },
    age: 26,
    achievements: [2, 5, 8],
    photo:
      'https://bogdo.studio/assets/images/resources/69/medium/delovaya_fotosessia_biznesman_na_fone_biznescentra.jpg',
    contact_info: {
      phone_number: '+9876543210',
      alternate_email: 'max2@hotmail.com',
      telegram_login: '@max789',
    },
    academic_status: {
      id: 1,
      name: 'Студент (бакалавр)',
    },
    employment_status: {
      id: 3,
      name: 'Работаю',
    },
    grade: {
      id: 3,
      name: 'Senior',
    },
    work_experience: [
      {
        id: 3,
        name: 'Tech Innovators',
        start_date: '10 сентября 2020',
        end_date: 'настоящее',
        description:
          'Frontend Developer\r\n* Разработка современных веб-приложений\r\n* Оптимизация производительности',
        total_experience_months: 36,
      },
    ],
    location: {
      id: 1,
      name: 'Киев',
    },
    portfolio: [
      {
        id: 3,
        url: 'https://portfolio.max.com',
      },
    ],
    languages: [
      {
        id: 1,
        name: 'Русский (родной)',
      },
      {
        id: 4,
        name: 'Немецкий A2',
      },
    ],
    educations: [
      {
        institution: 'Университет КНУ',
        specialization: 'Информационные системы',
        education_level: 'Бакалавр',
      },
    ],
    description:
      'Стремлюсь к профессиональному росту и достижению новых высот в разработке программного обеспечения.',
    specialization: {
      id: 1,
      name: 'Frontend Developer',
    },
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Разработка крупной платформы для онлайн-торговли.',
      },
      {
        title: 'Система управления контентом',
        description: 'Создание CMS для управления веб-сайтами.',
      },
    ],
    courses: [
      {
        id: 4,
        specialization: {
          id: 1,
          name: 'Frontend Developer',
        },
        skills: [
          {
            id: 33,
            name: 'React',
          },
          {
            id: 34,
            name: 'Node.js',
          },
          {
            id: 35,
            name: 'Redux',
          },
          {
            id: 36,
            name: 'HTML/CSS',
          },
          {
            id: 37,
            name: 'Git',
          },
        ],
      },
    ],
    has_higher_education: true,
    has_participated_in_hackathons: false,
    has_personal_projects: true,
    skills_verified: true,
    has_video_presentation: true,
    percentage_match: 85,
    viewed: false,
    is_favorited: false,
  },
  {
    id: 4,
    user: {
      email: 'Elena@xyz.com',
      id: 5,
      username: 'Elena',
      first_name: 'Елена',
      last_name: 'Смирнова',
    },
    age: 27,
    achievements: [3, 6, 7],
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjz-zvHlrdOcdoiAj4oaiAoTGPFselUgS_UnTJvqEb&s',
    contact_info: {
      phone_number: '+9876543211',
      alternate_email: 'elena2@gmail.com',
      telegram_login: '@elena_xyz',
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
        id: 4,
        name: 'Data Analytics Co.',
        start_date: '20 марта 2022',
        end_date: 'настоящее',
        description:
          'Аналитик данных\r\n* Анализ данных и создание отчётов\r\n* Моделирование бизнес-процессов',
        total_experience_months: 10,
      },
    ],
    location: {
      id: 4,
      name: 'Санкт-Петербург',
    },
    portfolio: [
      {
        id: 4,
        url: 'https://linkedin.com/in/elena_smirnova',
      },
    ],
    languages: [
      {
        id: 2,
        name: 'Английский B2',
      },
    ],
    educations: [
      {
        institution: 'Университет СПБГУ',
        specialization: 'Анализ данных',
        education_level: 'Высшее образование',
      },
    ],
    description: 'Увлекаюсь анализом данных и разработкой дашбордов.',
    specialization: {
      id: 3,
      name: 'Аналитик данных',
    },
    projects: [
      {
        title: 'Анализ пользовательского поведения',
        description: 'Исследование данных для оптимизации продукта.',
      },
      {
        title: 'Создание отчётности',
        description: 'Разработка автоматизированных отчётов для клиентов.',
      },
    ],
    courses: [
      {
        id: 2,
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
            id: 32,
            name: 'Power BI',
          },
          {
            id: 38,
            name: 'Cygwin/Terminal',
          },
        ],
      },
    ],
    has_higher_education: true,
    has_participated_in_hackathons: true,
    has_personal_projects: true,
    skills_verified: true,
    has_video_presentation: true,
    percentage_match: 85,
    viewed: false,
    is_favorited: false,
  },
  {
    id: 5,
    user: {
      email: 'Ivan@company.com',
      id: 6,
      username: 'Ivan',
      first_name: 'Иван',
      last_name: 'Соколов',
    },
    age: 30,
    achievements: [1, 4, 7, 8],
    photo: 'https://photo-ideal.ru/upload/iblock/bb8/foto_na_rezyume_47.jpg',
    contact_info: {
      phone_number: '+12345670000',
      alternate_email: 'ivan@workplace.com',
      telegram_login: '@ivan_s',
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
      id: 3,
      name: 'Senior',
    },
    work_experience: [
      {
        id: 5,
        name: 'Tech Solutions Ltd.',
        start_date: '10 октября 2017',
        end_date: '1 мая 2023',
        description:
          'Full Stack Developer\r\n* Разработка веб-приложений\r\n* Управление командой разработчиков',
        total_experience_months: 68,
      },
    ],
    location: {
      id: 3,
      name: 'Москва',
    },
    portfolio: [
      {
        id: 5,
        url: 'https://ivan-portfolio.com',
      },
    ],
    languages: [
      {
        id: 3,
        name: 'Английский C1',
      },
    ],
    educations: [
      {
        institution: 'Московский Университет',
        specialization: 'Информационные технологии',
        education_level: 'Высшее образование',
      },
    ],
    description: 'Опытный разработчик, готовый к новым проектам и вызовам.',
    specialization: {
      id: 1,
      name: 'Full Stack Developer',
    },
    projects: [
      {
        title: 'Социальная платформа',
        description:
          'Разработка социальной сети с использованием новейших технологий.',
      },
      {
        title: 'Управление задачами',
        description: 'Создание системы управления задачами для бизнеса.',
      },
    ],
    courses: [
      {
        id: 1,
        specialization: {
          id: 1,
          name: 'Full Stack Developer',
        },
        skills: [
          {
            id: 33,
            name: 'React',
          },
          {
            id: 34,
            name: 'Node.js',
          },
          {
            id: 36,
            name: 'HTML/CSS',
          },
          {
            id: 37,
            name: 'Git',
          },
        ],
      },
    ],
    has_higher_education: true,
    has_participated_in_hackathons: false,
    has_personal_projects: true,
    skills_verified: true,
    has_video_presentation: true,
    percentage_match: 90,
    viewed: false,
    is_favorited: false,
  },
  {
    id: 7,
    user: {
      email: 'Alex@example.com',
      id: 8,
      username: 'Alex',
      first_name: 'Алексей',
      last_name: 'Попов',
    },
    age: 29,
    achievements: [3, 5, 8],
    photo: 'https://simpledoc.ru/resume/examples/ekonomist/res/i/photo.jpg',
    contact_info: {
      phone_number: '+12345671235',
      alternate_email: 'alex@workplace.com',
      telegram_login: '@alex_example',
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
      id: 2,
      name: 'Middle',
    },
    work_experience: [
      {
        id: 7,
        name: 'Data Insights LLC',
        start_date: '15 сентября 2020',
        end_date: '1 апреля 2023',
        description:
          'Data Analyst\r\n* Анализ данных и создание дашбордов\r\n* Сотрудничество с бизнес-заказчиками',
        total_experience_months: 30,
      },
    ],
    location: {
      id: 3,
      name: 'Москва',
    },
    portfolio: [
      {
        id: 7,
        url: 'https://alex-portfolio.com',
      },
    ],
    languages: [
      {
        id: 2,
        name: 'Английский B2',
      },
    ],
    educations: [
      {
        institution: 'Московский Университет',
        specialization: 'Анализ данных',
        education_level: 'Высшее образование',
      },
    ],
    description:
      'Стремлюсь к обработке данных и предоставлению ценных инсайтов.',
    specialization: {
      id: 3,
      name: 'Data Analyst',
    },
    projects: [
      {
        title: 'Анализ пользовательского поведения',
        description: 'Исследование данных для оптимизации продукта.',
      },
      {
        title: 'Создание дашбордов',
        description: 'Разработка дашбордов для мониторинга KPI.',
      },
    ],
    courses: [
      {
        id: 2,
        specialization: {
          id: 3,
          name: 'Data Analyst',
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
    has_participated_in_hackathons: false,
    has_personal_projects: true,
    skills_verified: true,
    has_video_presentation: true,
    percentage_match: 85,
    viewed: false,
    is_favorited: false,
  },
  {
    id: 6,
    user: {
      email: 'Olga@example.com',
      id: 7,
      username: 'Olga',
      first_name: 'Ольга',
      last_name: 'Козлова',
    },
    age: 28,
    achievements: [2, 5, 7],
    photo: 'https://photo-ideal.ru/upload/iblock/7de/foto_na_rezyume_4.jpg',
    contact_info: {
      phone_number: '+12345671234',
      alternate_email: 'olga@gmail.com',
      telegram_login: '@olga_example',
    },
    academic_status: {
      id: 1,
      name: 'Студент (бакалавр)',
    },
    employment_status: {
      id: 3,
      name: 'Работаю',
    },
    grade: {
      id: 3,
      name: 'Senior',
    },
    work_experience: [
      {
        id: 6,
        name: 'Tech Innovations Inc.',
        start_date: '5 августа 2019',
        end_date: 'настоящее',
        description:
          'Software Engineer\r\n* Разработка высоконагруженных систем\r\n* Тестирование и оптимизация',
        total_experience_months: 42,
      },
    ],
    location: {
      id: 2,
      name: 'Санкт-Петербург',
    },
    portfolio: [
      {
        id: 6,
        url: 'https://olga-portfolio.com',
      },
    ],
    languages: [
      {
        id: 1,
        name: 'Русский (родной)',
      },
      {
        id: 4,
        name: 'Немецкий B1',
      },
    ],
    educations: [
      {
        institution: 'Университет СПБГУ',
        specialization: 'Информационные системы',
        education_level: 'Бакалавр',
      },
    ],
    description:
      'Разработка - моя страсть, и я всегда стремлюсь к совершенствованию.',
    specialization: {
      id: 4,
      name: 'Software Engineer',
    },
    projects: [
      {
        title: 'Система управления заказами',
        description:
          'Разработка системы для управления заказами в реальном времени.',
      },
      {
        title: 'Оптимизация баз данных',
        description: 'Повышение производительности баз данных на проекте.',
      },
    ],
    courses: [
      {
        id: 5,
        specialization: {
          id: 4,
          name: 'Software Engineer',
        },
        skills: [
          {
            id: 35,
            name: 'JSON/XML',
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
    has_higher_education: true,
    has_participated_in_hackathons: true,
    has_personal_projects: true,
    skills_verified: true,
    has_video_presentation: false,
    percentage_match: 80,
    viewed: false,
    is_favorited: false,
  },
];

export { resumes, demoResume };
