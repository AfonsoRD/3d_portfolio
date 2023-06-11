import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  git,
  angular,
  vodafone,
  fnac,
  trofa,
  fujitsu,
  apple,
  api,
  myflix,
  meet,
  pokedex,
  chat,
  threejs
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Responsive Developer',
    icon: backend
  },
  {
    title: 'Backend Developer',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Angular JS',
    icon: angular
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Bootstrap CSS',
    icon: bootstrap
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  }
];

const experiences = [
  {
    title: 'Service Desk Agent',
    company_name: 'Fujitsu',
    icon: fujitsu,
    iconBg: '#E6DEDD',
    date: 'Feb 2021 - Sep 2021',
    points: [
      'Support for normal technical issues related to Microsoft products, operating system, basic networking, PCs for Schneider Electric in Spanish-speaking countries, English-speaking countries and Portugal.',
      'Resolve problems as needed to provide the required level of service and meet or exceed customer/SLAs expectations. Monitor performance through reporting and statistical analysis.',
      'Participating in SLA and KPI reviews and providing constructive feedback to the team.'
    ]
  },
  {
    title: 'Client Manager',
    company_name: 'Hospital Trofa Saúde - Amadora ',
    icon: trofa,
    iconBg: '#E6DEDD',
    date: 'Sep 2019 - Feb 2021',
    points: [
      'Optimization of the management of the operating room agenda and the office surgery of more than 15 medical specialties for two hospitals of Trofa Saúde in the Lisbon area .',
      "Organization of documentation to request authorization for surgery to the client's health insurance.",
      'Weekly report on percentage of surgeries performed, medical specialties, invoiced amounts and planning.'
    ]
  },
  {
    title: 'Department Store Salesperson',
    company_name: 'FNAC Portugal',
    icon: fnac,
    iconBg: '#E6DEDD',
    date: 'Oct 2018 - May 2019',
    points: [
      'Stock organization for easy access in product replacement.',
      'Mastering the techniques and strategies for selling products and services, considering the focus on the client and achieving the results proposed by the team leader.',
      'Excellent customer service with good communication skills, team spirit, initiative and dynamism, following the company values.'
    ]
  },
  {
    title: 'AppleCare Technical Advisor',
    company_name: 'Apple Inc.',
    icon: apple,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'First line customer service for all Apple products in Spanish-speaking countries, English-speaking countries and Portugal.',
      'On-site support to junior agents, quality control and SLA monitoring according to company standards.',
      'Monitor performance through reporting and statistical analysis.',
      'Participating in team meeting and providing constructive feedback to improve de SLA and KPI score.'
    ]
  },
  {
    title: 'Call Center Operator',
    company_name: 'Vodafone Portugal',
    icon: vodafone,
    iconBg: '#E6DEDD',
    date: 'May 2016 - Feb 2017',
    points: [
      'First and second line customer service, solving problems related to billing, service installation and new contract creation.',
      'Back-office service, giving product-related support to Vodafone stores, organizing mailbox, monitoring installations by giving support to technicians responsible for installing fiber optics.'
    ]
  }
];

const projects = [
  {
    name: 'My Flix Client',
    description:
      'This project is a single-page application (SPA), a client-side of myFlix app built using React as a framework, and was created to show movies using My Flix API.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Parcel',
        color: 'blue-text-gradient'
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient'
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient'
      }
    ],
    image: myflix,
    source_code_link: 'https://github.com/AfonsoRD/myFlix-client',
    website_link: 'https://myflix-by-afonsord.netlify.app/login'
  },
  {
    name: 'My Flix API',
    description:
      'This project is a REST API for a movie platform application that interacts with a database and displays data about different movies, directors, and genres. The database can store movies and users to the users be able to sign up, login and create a list of their favorite movies. This API is hosted using Vercel and the database using Atlas MongoDB.',
    tags: [
      {
        name: 'Express',
        color: 'blue-text-gradient'
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient'
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'Mongoose',
        color: 'pink-text-gradient'
      }
    ],
    image: api,
    source_code_link: 'https://github.com/AfonsoRD/movie_api',
    website_link: 'https://movie-api-afonsord.vercel.app/'
  },
  {
    name: 'LEET - PWA',
    description:
      'This project is a PWA App to display events related to coding around the world. This progressive web application is serverless, hosted with AWS and built in React, using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Express',
        color: 'blue-text-gradient'
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient'
      },
      {
        name: 'Axios',
        color: 'pink-text-gradient'
      }
    ],
    image: meet,
    source_code_link: 'https://github.com/AfonsoRD/meet',
    website_link: 'https://afonsord.github.io/meet/'
  },
  {
    name: 'Chat APP',
    description:
      'A Chat App for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient'
      },
      {
        name: 'EXPO',
        color: 'green-text-gradient'
      },
      {
        name: 'Google Firebase',
        color: 'pink-text-gradient'
      }
    ],
    image: chat,
    source_code_link: 'https://github.com/AfonsoRD/chat-bot',
    website_link: 'https://github.com/AfonsoRD/chat-bot'
  },
  {
    name: 'JS Pokédex APP',
    description:
      'The JS Pokédex is an JavaScript Web App that loads data from Pokémon API using the most modern HTML, CSS and ES6 that enable the viewing of a list of 1154 Pokémons.',
    tags: [
      {
        name: 'jQuery',
        color: 'blue-text-gradient'
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient'
      }
    ],
    image: pokedex,
    source_code_link: 'https://github.com/AfonsoRD/JS-Pokedex',
    website_link: 'https://afonsord.github.io/JS-Pokedex/'
  }
];

export { services, technologies, experiences, projects };
