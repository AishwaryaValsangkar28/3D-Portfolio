import { LogLuvLoader } from "three/examples/jsm/Addons.js";
import {
    mobile,
    backend,
    creator,
    web,
    dotnet,
    python,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    Python,
    java,
    Dotnet,
    angular,
    mysql,
    postgresql,
    Github,
    github,
    git,
    iam,
    voiceassistant,
    texttosql,
    bulkencode,
    databasesync,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: ".Net Developer",
      icon: dotnet,
    },
    {
      title: "Python Developer",
      icon: python,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "dotnet",
      icon: Dotnet,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "PostgreSql",
      icon: postgresql,
    },
    {
      name: "GitHub",
      icon: Github,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Integrated Active Monitoring",
      icon: iam,
      iconBg: "#383E56",
      date: "Nov 2023 - Present",
      points: [
        "Designed and developed backend modules using C#, .NET Core, ASP.NET Core, MVC, Entity Framework, and SQL Server.",
        "Built and optimized RESTful APIs for data processing, authentication, and system integration.",
        "Developed and tuned complex SQL queries, stored procedures, and relational data models across SQLServer and MySQL.",
        "Implemented multithreading and event-driven patterns to maintain UI responsiveness and backend synchronization.",
        "Created automated Python workers for data migration and scheduled background tasks across multiple databases.",
        "Collaborated in Agile sprints, contributing to requirement analysis, sprint planning, code reviews, and production support.",
        "Azure DevOps used for work item tracking, Git version control",
        "Improved system reliability by identifying root causes and troubleshooting defects by distributed modules.",
      ],
      
    },
    // {
    //   title: "Web Developer and Designing Intern",
    //   company_name: "Oasis Infobyte",
    //   iconBg: "#E6DEDD",
    //   date: "Jun 2023 - Jul 2023",
    //   points: [
    //     "Designed a custom landing page.",
    //     "Developed a portfolio website using a combination of web technologies.",
    //     "Created a temperature converter website using HTML, CSS, and JavaScript."
    //   ],
      
    // },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
  {
    name: "Voice Assistant Project",
    description:
      "Built a Python-based voice assistant that processes spoken commands and performs tasks like web search, app launch, weather updates, and camera operations. Integrated speech recognition and text-to-speech for real-time interactive responses.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: voiceassistant,
    source_code_link: "https://github.com/",
  },

  {
    name: "Text-to-SQL Query Generator",
    description:
      "Developed an AI-powered system that converts natural language queries into secure SQL using Google Gemini and LangChain with human-readable results.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
    ],
    image: texttosql,
    source_code_link: "https://github.com/",
  },

  {
    name: "Bulk Encoding App",
    description:
      "Designed a .NET-based RFID bulk encoding system and automated EPC generation. Enabled efficient multi-tag encoding workflows through reader integration and backend APIs.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: ".Net Core and Frameworks", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
      { name: "Windows Forms", color: "blue-text-gradient" },
      { name: "API", color: "green-text-gradient" },
    ],
    image: bulkencode,
    source_code_link: "https://github.com/",
  },

  {
    name: "Database Synchronization",
    description:
      "Automated bidirectional data synchronization between enterprise systems using Python and SQL. Implemented delta sync, validation rules, and structured logging to ensure data accuracy and reliability.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "MySql", color: "green-text-gradient" },
      { name: "regex", color: "pink-text-gradient" },
    ],
    image: databasesync,
    source_code_link: "https://github.com/",
  },

  
  // const projects = [
  //   {
  //     name: "Voice Assistant Project",
  //     description:
  //       "Developed a voice-controlled personal assistant in Python using SpeechRecognition, pyttsx3, and Wikipedia API.The assistant listens to user commands, performs actions like web searches, app launches, weather updates, and camera operations, and responds with synthesized speech.",
  //     tags: [
  //       {
  //         name: "python",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mysql",
  //         color: "green-text-gradient",
  //       },
  //       // {
  //       //   name: "tailwind",
  //       //   color: "pink-text-gradient",
  //       // },
  //     ],
  //     image: voiceassistant,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Text-to-SQL Query Generator(AI-Powered Application)",
  //     description:
  //       "Developed an LLM-driven Text-to-SQL system that converts natural language questions into SQL queries using Google Gemini (via LangChain). Executed queries securely on a MySQL database and generated natural language explanations for the results. Implemented SQL safety checks, tabular result formatting, and contextual schema understanding to improve accuracy and reliability.",
  //     tags: [
  //       {
  //         name: "python",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mysql",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "LLM",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: texttosql,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Bulk Encoding Application",
  //     description:
  //       "Built a secure, session-based .NET Core backend for RFID tag encoding via reader interfaces. Implemented automated EPC generation and multi-tag workflow.",
  //     tags: [
  //       {
  //         name: "C#",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: ".Net Core and Frameworks",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "sql",
  //         color: "pink-text-gradient",
  //       },
  //       {
  //         name: "Windows Froms",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "API",
  //         color: "green-text-gradient",
  //       },
  //     ],
  //     image: bulkencode,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Database Synchronization Automation (Python, SQL)",
  //     description:
  //       "Automated data sync between two enterprise systems — preventing duplicates, ensuring correct access rules for inactive/active staff, and syncing biometrics. Implemented delta sync, validation, and structured logging to improve reliability. Executed queries securely on a MySQL database and generated natural language explanations for the results. Implemented SQL safety checks, tabular result formatting, and contextual schema understanding to improve accuracy and reliability.",
  //     tags: [
  //       {
  //         name: "Python",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "MySql",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "regex",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: databasesync,
  //     source_code_link: "https://github.com/",
  //   },
  ];
  
  export { services, technologies, experiences, testimonials, projects };