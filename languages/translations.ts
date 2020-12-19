const translations = {
  ru: {
    title: 'Юденич Александр. Фронтенд разработчик. Портфолио.',
    description: 'Юденич Александр. Фронтенд разработчик. Портфолио.',
    themeSwitcher: {
      lightIconAlt: 'Иконка светлой темы сайта',
      darkIconAlt: 'Иконка тёмной темы сайта',
    },
    languageSwitcher: {
      iconAlt: 'Иконка смены языка сайта',
    },
    navigation: {
      navigationIconAlt: 'Навигация',
      navigationItems: [
        // {
        //   link: '#aboutMe',
        //   text: 'Обо мне',
        // },
        {
          link: '#experience',
          text: 'Опыт',
        },
        {
          link: '#portfolio',
          text: 'Портфолио',
        },
        {
          link: '#skills',
          text: 'Навыки',
        },
        {
          link: '#certificates',
          text: 'Сертификаты',
        },
        {
          link: '#contacts',
          text: 'Контакты',
        },
      ],
    },
    intro: {
      name: 'Юденич Александр',
      proffesion: 'Фронтенд разработчик',
    },
    aboutMe: {
      caption: 'Обо мне',
      photo: {
        url: '/images/about_me/photo.jpg',
        alt: 'Фото',
      },
      text: [
        `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
        `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).`,
      ],
    },
    skills: {
      caption: 'Навыки',
      skillsList: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Redux',
        'React Router',
        'Formik',
        'Next.js',
        'Webpack',
        'Git',
        'SCSS',
        'BEM',
        'Adaptive layout',
        'Styled components',
        'CSS modules',
        'Material UI',
        'Bootstrap',
        'Express.js',
        'Python',
        'C++',
        'Qt',
      ],
    },
    experience: {
      caption: 'Опыт',
      experienceList: [
        {
          period: 'Сентябрь 2014 - Июль 2019',
          title: 'Обучение в Университете',
          description:
            'Обучение в Кубанском государственном технологическом университете по специальности «Программная инженерия».',
        },
        {
          period: 'Июль 2019 - Июль 2020',
          title: 'Технополис «ЭРА»',
          description:
            'Прохождение военной службы по призыву в качестве оператора научной роты в Военном инновационном технополисе «ЭРА».',
        },
        {
          period: 'Июль 2020 - Октябрь 2020',
          title: 'Фриланс',
          description:
            'Адаптивная вёрстка страниц согласно макету. Разработка плагинов для программы «AutoCAD».',
        },
        {
          period: 'Октябрь 2020 - По настоящее время',
          title: 'Magic Digital Agency',
          description:
            'Разработка компонентов для интерактивной обучающей платформы. Адаптивная вёрстка страниц согласно макету.',
        },
      ],
    },
    portfolio: {
      caption: 'Портфолио',
      sourceCodeImageAlt: 'Исходный код',
      portfolioList: [
        {
          imageURL: '/images/portfolio/chat-rooms.jpg',
          link: 'https://chat-rooms.yudenichaa.vercel.app/',
          title: 'Чат',
          description:
            'Создание комнат и обмен сообщениями в режиме реального времени. Для аутентификации пользователей используется «Firebase authentication». В качестве метода аутентификации используется почта. Для хранения сообщений используется «Firebase cloud firestore».',
          technologies: [
            'React',
            'TypeScript',
            'Firebase',
            'Material UI',
            'React Router',
            'HTML',
            'SCSS',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/chat-rooms',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/covid-tracker.jpg',
          link: 'https://covid-tracker.yudenichaa.vercel.app/ ',
          title: 'Трекер Covid-19 ',
          description:
            'Отслеживание количества заболевших, выздоровевших и смертельных исходов. Данные доступны в виде таблицы, графика и карты. Доступен просмотр данных для определённой страны или по всему миру.',
          technologies: [
            'React',
            'JavaScript',
            'HTML',
            'SCSS',
            'Material UI',
            'Chart.js',
            'Leaflet',
            'Numeral',
            'Babel',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/covid-tracker',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/instagram-posts.jpg',
          link: 'https://instagram-posts.yudenichaa.vercel.app/',
          title: 'Посты в инстаграм',
          description:
            'Добавление публикаций в режиме реального времени. Публикации содержат изображение, описание и комментарии. Для аутентификации пользователей используется «Firebase authentication». В качестве метода аутентификации используется почта. Для хранения изображений и сообщений используется «Firebase cloud firestore» и «Firebase storage».',
          technologies: [
            'React',
            'JavaScript',
            'Firebase',
            'HTML',
            'SCSS',
            'Material UI',
            'Babel',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/instagram-posts',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/netflix-movies.jpg',
          link: 'https://netflix-movies.yudenichaa.vercel.app',
          title: 'Фильмы Netflix',
          description:
            'Просмотр популярных фильмов в различных категориях. Фильмы отображаются в виде ленты, пролистывание которой осуществляется при помощи мыши или жестов. Для поиска трейлера фильма используется библиотека «movie-trailer». Для показа трейлера используется библиотека «react-youtube».',
          technologies: [
            'React',
            'TypeScript',
            'HTML',
            'SCSS',
            'react-youtube',
            'movie-trailer',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/netflix-movies',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/image-gallery.jpg',
          link: 'https://image-gallery.yudenichaa.vercel.app/',
          title: 'Галерея изображений',
          description:
            'Для каждого пользователя отображается список его альбомов с изображениями. При клике на изображении оно открывается в модальном окне, содержащем изображение в большем разрешении и миниатюры из данного альбома. В качестве источника данных используется сервис «jsonplaceholder».',
          technologies: [
            'React',
            'JavaScript',
            'HTML',
            'Styled components',
            'Babel',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/ImageGallery',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/adyax.jpg',
          link: 'https://adyax.yudenichaa.vercel.app',
          title: 'Adyax',
          description:
            'Форма обратной связи, содержащая кастомные элементы ввода, такие как «выбор файла», «чекбоксы» и «радиокнопки».',
          technologies: ['JavaScript', 'HTML', 'SCSS'],
          sources: {
            link: 'https://github.com/yudenichaa/adyax',
            imageURL: '/images/contacts/github.svg',
          },
        },
      ],
    },
    certificates: {
      caption: 'Сертификаты',
      certificatesList: [
        {
          title: 'Алгоритмы',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/V4MA6M3ABFC6',
          imageURL: '/images/certificates/algorithmic_toolbox.jpg',
          description:
            'Курс охватывает базовые алгоритмические методы и идеи для вычислительных задач, часто возникающих в практических приложениях: сортировка и поиск, разделяй и властвуй, жадные алгоритмы, динамическое программирование.',
        },
        {
          title: 'Структуры данных',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/T35M4WJLRQ6K',
          imageURL: '/images/certificates/data_structures.jpg',
          description:
            'В этом курсе рассматриваются общие структуры данных, которые используются в различных вычислительных задачах.',
        },
        {
          title: 'Основы разработки на C++: белый пояс',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/2FDBUJ7WZSJR',
          imageURL: '/images/certificates/c++_white.jpg',
          description:
            'Этот курс посвящён знакомству с языком программирования С++. В нём рассматриваются основные конструкции языка, создание своих типов данных, классы и функции.',
        },
        {
          title: 'Основы разработки на C++: жёлтый пояс',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/HTHNFSJ2JHBG',
          imageURL: '/images/certificates/c++_yellow.jpg',
          description:
            'Этот курс является продолжением курса "Основы разработки на C++: белый пояс". В курсе рассмотрены: целочисленные типы языка C++, пары и кортежи, шаблоны функций, наследование и полиморфизм, итераторы и стандартные алгоритмы, распределение кода по нескольким файлам.',
        },
      ],
    },
    contacts: [
      {
        link: 'mailto:yudenichalexandr@yandex.ru',
        image: {
          url: '/images/contacts/mail.svg',
          alt: 'Почта',
        },
        text: 'yudenichalexandr@yandex.ru',
      },
      {
        link: 'https://t.me/yudenichaa',
        image: {
          url: '/images/contacts/telegram.svg',
          alt: 'Телеграм',
        },
        text: '@yudenichaa',
      },
      {
        link: 'https://github.com/yudenichaa',
        image: {
          url: '/images/contacts/github.svg',
          alt: 'Гитхаб',
        },
        text: 'yudenichaa',
      },
      {
        link: 'skype:yudenichaa?chat',
        image: {
          url: '/images/contacts/skype.svg',
          alt: 'Скайп',
        },
        text: 'live:yudenichaa',
      },
    ],
  },
  en: {
    title: 'Yudenich Alexandr. Frontend developer. Portfolio.',
    description: 'Yudenich Alexandr. Frontend developer. Portfolio.',
    themeSwitcher: {
      lightIconAlt: 'Light theme icon',
      darkIconAlt: 'Dark theme icon',
    },
    languageSwitcher: {
      iconAlt: 'Website language change icon',
    },
    navigation: {
      navigationIconAlt: 'Навигация',
      navigationItems: [
        // {
        //   link: '#aboutMe',
        //   text: 'About me',
        // },
        {
          link: '#experience',
          text: 'Experience',
        },
        {
          link: '#portfolio',
          text: 'Portfolio',
        },
        {
          link: '#skills',
          text: 'Skills',
        },
        {
          link: '#certificates',
          text: 'Certificates',
        },
        {
          link: '#contacts',
          text: 'Contacts',
        },
      ],
    },
    intro: {
      name: 'Yudenich Alexandr',
      proffesion: 'Frontend developer',
    },
    aboutMe: {
      caption: 'About me',
      photo: {
        url: '/images/about_me/photo.jpg',
        alt: 'Фото',
      },
      text: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      ],
    },
    skills: {
      caption: 'Skills',
      skillsList: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Redux',
        'React Router',
        'Formik',
        'Next.js',
        'Webpack',
        'Git',
        'SCSS',
        'BEM',
        'Adaptive layout',
        'Styled components',
        'CSS modules',
        'Material UI',
        'Bootstrap',
        'Express.js',
        'Python',
        'C++',
        'Qt',
      ],
    },
    experience: {
      caption: 'Experience',
      experienceList: [
        {
          period: 'September 2014 - July 2019',
          title: 'University studies',
          description:
            'Studying at the Kuban State Technological University with a degree in software engineering.',
        },
        {
          period: 'July 2019 - July 2020',
          title: 'Technopolis «ERA»',
          description:
            'Military service by conscription as an operator of a scientific company in the Military Innovative Technopolis «ERA».',
        },
        {
          period: 'July 2020 - October 2020',
          title: 'Freelance',
          description:
            'Responsive page layout according to the maquette. Plugin development for AutoCAD program.',
        },
        {
          period: 'October 2020 - Until now',
          title: 'Magic Digital Agency',
          description:
            'Development of components for an interactive learning platform. Responsive page layout according to the maquette.',
        },
      ],
    },
    portfolio: {
      caption: 'Portfolio',
      sourceCodeImageAlt: 'Source code',
      portfolioList: [
        {
          imageURL: '/images/portfolio/chat-rooms.jpg',
          link: 'https://chat-rooms.yudenichaa.vercel.app/',
          title: 'Chat',
          description:
            'Creating rooms and exchange messages in real time. For user authentication, "Firebase authentication" is used. Mail is used as an authentication method. "Firebase cloud firestore" is used to store messages.',
          technologies: [
            'React',
            'TypeScript',
            'Firebase',
            'Material UI',
            'React Router',
            'HTML',
            'SCSS',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/chat-rooms',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/covid-tracker.jpg',
          link: 'https://covid-tracker.yudenichaa.vercel.app/ ',
          title: 'Covid-19 tracker',
          description:
            'Tracking the number of cases, recovered and deaths. Data is available in the form of table, graph and map. Available to view data for a specific country or around the world.',
          technologies: [
            'React',
            'JavaScript',
            'HTML',
            'SCSS',
            'Material UI',
            'Chart.js',
            'Leaflet',
            'Numeral',
            'Babel',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/covid-tracker',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/instagram-posts.jpg',
          link: 'https://instagram-posts.yudenichaa.vercel.app/',
          title: 'Instagram posts',
          description:
            'Adding publications in real time. The publications contain an image, description and comments. For user authentication, "Firebase authentication" is used. Mail is used as an authentication method. For storing images and messages, "Firebase cloud firestore" and "Firebase storage" are used.',
          technologies: [
            'React',
            'JavaScript',
            'Firebase',
            'HTML',
            'SCSS',
            'Material UI',
            'Babel',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/instagram-posts',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/netflix-movies.jpg',
          link: 'https://netflix-movies.yudenichaa.vercel.app',
          title: 'Netflix movies',
          description:
            'View popular movies in various categories. Movies are displayed in the form of a tape, scrolling through which you can use the mouse or gestures. The "movie-trailer" library is used to search for a movie trailer. The "react-youtube" library is used to show the trailer.',
          technologies: [
            'React',
            'TypeScript',
            'HTML',
            'SCSS',
            'react-youtube',
            'movie-trailer',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/netflix-movies',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/image-gallery.jpg',
          link: 'https://image-gallery.yudenichaa.vercel.app/',
          title: 'Image gallery',
          description:
            'For each user, a list of their picture albums is displayed. When you click on an image, it opens in a modal window containing a higher resolution image and thumbnails from this album. The "jsonplaceholder" service is used as a data source.',
          technologies: [
            'React',
            'JavaScript',
            'HTML',
            'Styled components',
            'Babel',
            'Webpack',
          ],
          sources: {
            link: 'https://github.com/yudenichaa/ImageGallery',
            imageURL: '/images/contacts/github.svg',
          },
        },
        {
          imageURL: '/images/portfolio/adyax.jpg',
          link: 'https://adyax.yudenichaa.vercel.app',
          title: 'Adyax',
          description:
            'A feedback form containing custom input elements such as "file selection", "checkboxes" and "radio buttons".',
          technologies: ['JavaScript', 'HTML', 'SCSS'],
          sources: {
            link: 'https://github.com/yudenichaa/adyax',
            imageURL: '/images/contacts/github.svg',
          },
        },
      ],
    },
    certificates: {
      caption: 'Certificates',
      certificatesList: [
        {
          title: 'Algorithmic Toolbox',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/V4MA6M3ABFC6',
          imageURL: '/images/certificates/algorithmic_toolbox.jpg',
          description:
            'The course covers basic algorithmic techniques and ideas for computational problems arising frequently in practical applications: sorting and searching, divide and conquer, greedy algorithms, dynamic programming.',
        },
        {
          title: 'Data Structures',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/T35M4WJLRQ6K',
          imageURL: '/images/certificates/data_structures.jpg',
          description:
            'In this course considering the common data structures that are used in various computational problems.',
        },
        {
          title: 'C++ Development Fundamentals: White Belt',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/2FDBUJ7WZSJR',
          imageURL: '/images/certificates/c++_white.jpg',
          description:
            'This course is dedicated to acquaintance with the C ++ programming language. It covers the basic constructions of the language, data types creation, classes and functions.',
        },
        {
          title: 'C++ Development Fundamentals: The Yellow Belt',
          link:
            'https://www.coursera.org/account/accomplishments/certificate/HTHNFSJ2JHBG',
          imageURL: '/images/certificates/c++_yellow.jpg',
          description:
            'This course is a follow-up to C++ Development Fundamentals: White Belt. The course covers: integer types of the C ++ language, pairs and tuples, function templates, inheritance and polymorphism, iterators and standard algorithms, distribution of code across several files.',
        },
      ],
    },
    contacts: [
      {
        link: 'mailto:yudenichalexandr@yandex.ru',
        image: {
          url: '/images/contacts/mail.svg',
          alt: 'Mail',
        },
        text: 'yudenichalexandr@yandex.ru',
      },
      {
        link: 'https://t.me/yudenichaa',
        image: {
          url: '/images/contacts/telegram.svg',
          alt: 'Telegram',
        },
        text: '@yudenichaa',
      },
      {
        link: 'https://github.com/yudenichaa',
        image: {
          url: '/images/contacts/github.svg',
          alt: 'GitHub',
        },
        text: 'yudenichaa',
      },
      {
        link: 'skype:yudenichaa?chat',
        image: {
          url: '/images/contacts/skype.svg',
          alt: 'Skype',
        },
        text: 'live:yudenichaa',
      },
    ],
  },
};

export default translations;
