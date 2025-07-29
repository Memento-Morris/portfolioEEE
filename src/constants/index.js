export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  
];



export const myProjects = [
  {
    title: 'Thermal Monitoring and Regulation of Southern Yellow-billed Hornbill Nest Boxes',
    desc: 'ThermoNest" is an automated climate-control system designed to protect endangered hornbills by maintaining optimal nest temperatures.',
    subdesc:
      ' My primary contribution involved designing the microcontroller and sensor subsystem, where I implemented an Extended Kalman Filter (EKF) algorithm to fuse data from multiple temperature sensors, achieving ±0.5°C estimation accuracy. The system not only stabilizes nest microclimates but also provides researchers with real-time environmental data through a cloud-connected dashboard',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Raspberry Pi',
        path: '/assets/pi.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/algo.png',
      },
      
      
    ],
  },
  {
    title: 'Microphone Array-Based Sound Localization System',
    desc: 'This project involved the collaborative design and testing of an acoustic triangulation system for 2D sound source localization using a four-microphone array synchronized via Raspberry Pi Zeros. Working as a team, we implemented signal processing algorithms (including GCC-PHAT for time-delay estimation) and developed triangulation methods to map sound origins, while addressing hardware/software integration challenges.',
    subdesc:
      'Our system achieved measurable accuracy in controlled conditions, though we identified limitations in quadrant detection and noise sensitivity that suggest future improvements through machine learning or advanced TDoA algorithms.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Raspberry Pi',
        path: '/assets/pi.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Group Investment Project',
    desc: 'This project provided hands-on experience in the financial sector by simulating real-world investing through EasyEquities.',
    subdesc:
      ' Working in a team of four, we practiced and implemented various investment strategies, conducting thorough research on company performance, financial track records, and market trends. Each member contributed to analyzing data and compiling research reports to support informed investment decisions.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Environment Sensing Hat',
    desc: 'This project focused on designing a Hardware Attached on Top (HAT) using an STM32F051C6T6 microcontroller to collect data from digital and analog sensors. ',
    subdesc:
      'My partner and I successfully integrated a digital light sensor and an analog temperature sensor, ensuring reliability for industrial use or extreme weather conditions. The temperature sensor continuously monitors environmental conditions to prevent HAT damage. My key responsibilities included microcontroller programming and sensor assembly.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Raspberry Pi',
        path: '/assets/pi.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Inductor Project',
    desc: 'This project was conducted by a team of three, where we designed, modeled, and analyzed a silicon steel core inductor through numerical simulations, prototyping, and rigorous testing.',
    subdesc:
      'A comprehensive report was produced, documenting the entire development process, including key findings and performance evaluations.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};




export const workExperiences = [
  {
    id: 1,
    name: 'AIP Voltage Current Sensing',
    pos: 'Research Developer',
    duration: 'Jun 2025 - Jul 2025',
    title: "Collaborated with a team to develop a real-time current and voltage sensing system for power applications at UCT's Electrical Engineering department.",
    icon: '/assets/research.svg',
    animation: 'typing',
  },
  {
    id: 2,
    name: 'BMH',
    pos: 'Engineering Intern',
    duration: 'Dec 2024 - Jan 2025',
    title: "Maintained and repaired industrial machinery and automation systems, gaining hands-on experience with industrial engineering applications.",
    icon: '/assets/industry.svg',
    animation: 'working',
  },
  {
    id: 3,
    name: 'University of Cape Town',
    pos: 'EEE1007 Tutor',
    duration: 'Aug 2023 - Oct 2023',
    title: "Facilitated tutorial sessions and assisted students with coursework understanding in electrical engineering.",
    icon: '/assets/teaching.svg',
    animation: 'teaching',
  },
  {
    id: 4,
    name: 'CPUT Techs',
    pos: 'Trainee',
    duration: 'Nov 2022 - Jan 2023',
    title: "Completed training in automation, welding, fitting, and software development across multiple engineering disciplines.",
    icon: '/assets/training.svg',
    animation: 'learning',
  },
  {
    id: 5,
    name: 'Siyanda Engineering',
    pos: 'Engineering Assistant',
    duration: 'Dec 2021 - Jan 2022',
    title: "Shadowed engineers in consultations and design projects, observing engineering practice in consulting environment.",
    icon: '/assets/industry.svg',
    animation: 'observing',
  },
  {
    id: 6,
    name: 'Forest Hill Residence',
    pos: 'Block Chair - Treasurer',
    duration: 'Mar 2025 - Present',
    title: "Manage residence events and facilitate community building initiatives while promoting inclusivity and student welfare.",
    icon: '/assets/leadership.svg',
    animation: 'presenting',
  },
  {
    id: 7,
    name: 'UCT Residence Life',
    pos: 'Transformation Council Chairperson',
    duration: 'Oct 2023 - Sep 2024',
    title: "Spearheaded strategic planning and implementation of transformation initiatives within university residence system.",
    icon: '/assets/leadership.svg',
    animation: 'speaking',
  },
  {
    id: 8,
    name: 'UCT IEEE Student Chapter',
    pos: 'Executive Committee Member',
    duration: 'Aug 2022 - Sep 2024',
    title: "Oversaw marketing, public relations, and event planning activities, increasing student engagement by 43%.",
    icon: '/assets/leadership.svg',
    animation: 'planning',
  },
  {
    id: 9,
    name: 'Ubunye',
    pos: 'Inkanyezi Logistics Co-Ordinator',
    duration: 'Feb 2022 - Oct 2023',
    title: "Coordinated logistics for mentorship program supporting underprivileged Grade 11 learners.",
    icon: '/assets/leadership.svg',
    animation: 'organizing',
  },
  {
    id: 10,
    name: 'Tutorials by Tijana',
    pos: 'Private Tutor',
    duration: 'Feb 2021 - Mar 2023',
    title: "Delivered personalized online tutoring sessions for physics and mathematics.",
    icon: '/assets/teaching.svg',
    animation: 'explaining',
  },
  {
    id: 11,
    name: 'Edenvale Baptist Church',
    pos: 'Youth Leader',
    duration: 'Nov 2019 - Jan 2021',
    title: "Engaged with youth members to foster community and development through organized programs.",
    icon: '/assets/teaching.svg',
    animation: 'encouraging',
  },
  {
    id: 12,
    name: 'Tribes Restaurant',
    pos: 'Front Desk and Host',
    duration: 'Nov 2023 - Jan 2024',
    title: "Handled reservations and addressed customer service queries, developing professional communication skills.",
    icon: '/assets/hospitality.svg',
    animation: 'greeting',
  },
  {
    id: 13,
    name: 'Lethabong Stationers',
    pos: 'Inventory Clerk',
    duration: 'Jun 2021 - Jul 2021',
    title: "Managed inventory and bookkeeping; resolved customer queries across multiple channels.",
    icon: '/assets/inventory.svg',
    animation: 'organizing',
  },
];
