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

export default demoResume;
