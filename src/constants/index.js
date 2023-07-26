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
  myflix,
  meet,
  find_a_car,
  threejs,
  resume
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
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Frontend Web Developer',
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
    title: 'Backend Web Developer',
    icon: creator
  }
];

const resume_file = [
  {
    name: 'Resume',
    resume_link: resume
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
    name: 'Find-a-Car',
    description:
      'Introducing a business rent-a-car app, built with the latest Next.js 13 features, including server-side rendering and the Next.js 13 App Router. The app offers advanced search functionality, filtering options, and optimized metadata for improved SEO. With a well-organized file structure and adherence to clean code principles, maintainability is ensured. ',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'Next.js 13',
        color: 'green-text-gradient'
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient'
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient'
      },
      {
        name: 'Vercel',
        color: 'pink-text-gradient'
      },
      {
        name: 'Server Side',
        color: 'green-text-gradient'
      }
    ],
    image: find_a_car,
    source_code_link: 'https://github.com/AfonsoRD/find_a_car',
    website_link: 'https://find-a-car.vercel.app/'
  },
  {
    name: 'My Flix APP',
    description:
      'This project is a single-page application (SPA), built using the MERN stack, that provides users with access to information about movies, directors, and genres. Users are able to create an account, update their personal data, and create a list of favorite movies.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'Node.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'Express',
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
    name: 'LEET - PWA',
    description:
      'This project is a PWA App to display events related to coding around the world. This progressive web application is serverless, hosted with AWS and built in React, using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
    tags: [
      {
        name: 'React.js',
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
  }
];

export { services, technologies, experiences, projects, resume };
