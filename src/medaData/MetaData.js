import { 
  FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGitAlt, FaGithub, FaNpm, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiRedux, SiAxios, SiJest, SiTestinglibrary, SiCypress,
  SiWebpack, SiVite, SiBabel, SiMongodb, SiExpress, SiGraphql, SiTailwindcss,
  SiStyledcomponents, SiStorybook, SiEslint, SiPrettier,
  SiNextdotjs, SiGatsby, SiFirebase, SiDocker, SiKubernetes, SiPostman, SiVitest,
  SiMui,SiVectorlogozone, SiLangchain,SiContentstack
  // FluentLogo24Filled
} from "react-icons/si";
import { RiAiGenerate,RiAiGenerate2 ,RiAiGenerateText} from 'react-icons/ri';
import { TbPrompt } from "react-icons/tb";
import { PiGearFineDuotone } from "react-icons/pi";
import { GiArtificialIntelligence, } from "react-icons/gi";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { VscVscode,VscJson } from "react-icons/vsc";  // ✅ Correct import


export const workTimelineData = {
  timelineName: "Work Experience",
  items: [
    {
      year: "April 2025 - Present",
      icon: "💼",
      title: "Comviva",
      description:["Comviva is a leading global provider of technology solutions, specializing in mobility, digital financial services, telecom platforms, and customer engagement tools. Headquartered in Gurgaon, India, with significant presence in Bangalore, Mumbai and international offices across Africa, Middle East, Europe, the U.S., and beyond, Comviva serves clients in over 100 countries",
      "Founded in 1999 as Bharti Telesoft, the company merged with CellCloud in 2002, rebranded to Comviva in 2009, and became part of Tech Mahindra in 2012"
    ],
      project: "ViZigoo",
      projectDescription:
        "ViGiggo is a BlueMarble product serving as a comprehensive telecom and IT solutions provider offering mobile services, broadband internet, IPTV, and fixed telephony with AI-powered service optimization and customer engagement features. ViGiggo aims to deliver innovative, reliable, and customer-centric telecom solutions to enhance connectivity and digital experiences for its users.",
      roles: [
        "Engineered GenAI-powered features to enhance customer service capabilities and personalization within the ViGigoo platform.",
        "Implemented intelligent prompt engineering and LLM integration for automated customer interactions and support.",
        "Developed intelligent automation using RAG for knowledge base querying and response generation ",
        "Delivered comprehensive test automation framework using Python, Selenium, and Robot Framework to ensure high-quality software releases.",
        "Provided daily client updates and architectural recommendations for AI implementation and optimization.",
        "Mentored team on GenAI best practices and responsible AI integration strategies.",
        "Collaborated with cross-functional teams to integrate GenAI features seamlessly into existing systems."

      ]
    },
    {
      year: "May 2021 - April 2024",
      icon: "🏢",
      title: "NEC Software Solutions Pvt. Ltd.",
      description:
        "NEC Corporation is a global leader in integrating IT and network technologies, driving innovation under its brand statement, 'Orchestrating a brighter world.' For more information, visit [NEC](http://www.nec.com).",
      project:
        "Workzone (WZ) | Case & Document Management System (Govt. of Denmark)",
      projectDescription:
        "WorkZone is a next-generation Case and Document Management Add-On for Microsoft 365, serving the Denmark Government and enterprise clients. Originally built on .NET/C#, it was re-engineered using modern React.js and React Native technologies. Over the last 1.5 years, pioneered GenAI integration to provide intelligent document analysis, automated case resolution, and smart recommendations.",
      roles: [
        "Architected and developed dynamic, responsive web applications using React.js and JavaScript (ES6+)",
        "Created reusable, modular React components with Redux Toolkit-Saga for state management and asynchronous operations.",
        "Implemented advanced form handling with customizable templates and real-time previews using Formik and Yup.",
        "Delivered Microsoft 365 Add-ins integration enabling seamless case creation from Office, Teams, Outlook",
        "Optimized component performance and bundle size, improving application load times by 25% using code-splitting and lazy loading.",
        "Collaborated with UX/UI designers to implement responsive designs using CSS3, SASS, and Material-UI.",
        "Integrated RESTful APIs for data retrieval and manipulation using Axios and Fetch API.",
        "Conducted unit and integration testing using Jest and React Testing Library, achieving 90%+ code coverage.",
        "Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives to ensure timely delivery of features.",
        "Mentored junior developers on React best practices, code reviews, and performance optimization techniques."
      ],
      roles: [
        "Intelligent Document Analysis: Implemented LLM-powered document understanding to auto-extract metadata, classify case types, and generate summaries from uploaded documents.",
        "Smart Case Recommendations: Built RAG system using LangChain for intelligent case routing and next-step suggestions based on historical data and user behavior.",
        "Automated Content Generation: Developed prompt engineering pipelines for generating case descriptions, legal templates, and client communications using GPT-4.",
        "AI-Powered Search: Implemented vector embeddings and semantic search for intelligent case and document retrieval within the WorkZone platform.",
        "Fine-tuning & Optimization: Experimented with fine-tuning domain-specific LLMs for improved accuracy on legal/governmental terminology and context.",
        "Responsible AI Implementation: Established guidelines for AI explainability, bias detection, and transparent decision-making in case recommendations "
      ]
    },
    {
      year: "Dec 2018 - May 2021",
      icon: "🔗",
      title: "MoBIt Technologies Pvt. Ltd.",
      description:
        "Started my career as an internship in the IT industry with MoBIt Technologies.",
      project: " Transport Management System | Transport domain",
      projectDescription:
        "Transport Management System (TMS) is a web-based application designed to streamline and optimize transportation operations. It provides real-time tracking, route optimization, and efficient management of transport resources.",
      roles: [
        "Developed and maintained web applications using React.js, HTML, CSS, and JavaScript.",
        "Collaborated with cross-functional teams to gather requirements and implement features.",
        "Participated in code reviews and contributed to improving code quality.",
        "Worked on integrating RESTful APIs for data retrieval and manipulation."
      ]
    }
  ]
};



export const studyTimelineData = {
   timelineName: "Education History",
  items: [
    {
      year: "April 2017 - October 2018",
      icon: "🎓",
      title: "Post Graduation - (P.G.T.D)",
      description: "Completed PG in CAD / CAM from TRTC, Patna (BHAR)",
    detail: "Completed PG in CAD / CAM from TRTC, Patna (BIHAR)",
  },
  {
    year: "July 2012 - August 2016",
    icon: "🎓",
    title: "B.Tech",
    description: "Graduated from Roorkee College of Engineering, Roorkee (U.K).",
    detail: "Graduated from Roorkee College of Engineering, Roorkee (U.K).",
  },
  {
    year: "July 2009 - November 2011",
    icon: "📖",
    title: "Intermediate ( 10+2th )",
    description: "Completed 12th from National Institute of Schooling, Patna",
    detail: "Completed 12th from NIOS",
  },
  {
    year: "May 2009 - May 2010",
    icon: "📚",
    title: "Matriculation (10th)",
    description: "Completed 10th from JMV Residential School,Patna (Bihar).",
    detail: "Completed 10th from JMV Residential School,Patna (Bihar).",
  },
]};

export const moreInfo = [
  { content: "Built and maintained responsive single-page applications (SPA) using React.js, improving user experience and reducing page load times by 30%." },
  { content: "Ensured cross-browser compatibility and responsive design for desktop and mobile users." },
  { content: "Integrated RESTful APIs and handled asynchronous data flow using Axios and Fetch API." },
  { content: "Utilized React hooks (useState, useEffect, useReducer) to manage component lifecycle and logic efficiently." },
  { content: "Implemented state management solutions using Redux and React's built-in Context API to streamline data handling across the application." },
  { content: "Developed reusable UI components and styled them using CSS3, SASS, and Bootstrap." },
  { content: "Optimized application performance by identifying and resolving bottlenecks and improving load times." },
  { content: "Collaborated with backend developers to design and implement RESTful APIs and integrate them into the application." },
  { content: "Conducted code reviews and provided constructive feedback to improve code quality and maintainability." },
  { content: "Participated in daily stand-ups and sprint planning meetings to discuss project requirements and timelines." },
  { content: "Worked closely with QA engineers to identify and resolve bugs and ensure the application's stability." },
  { content: "Deployed applications to cloud platforms like Netlify and Heroku and monitored their performance." },
  { content: "Implemented unit and integration tests using Jest and React Testing Library to ensure code quality and reliability." },
  { content: "Continuously learned and adopted new technologies and best practices to improve development processes." },
  { content: "Contributed to open-source projects and collaborated with the developer community to share knowledge and insights." },
  { content: "Provided technical support and guidance to junior developers and interns to help them grow and succeed." },
  { content: "Participated in hackathons and coding challenges to enhance problem-solving skills and creativity." },
  { content: "Attended tech conferences and workshops to stay updated on the latest trends and advancements in web development." },
  { content: "Engaged in online courses and tutorials to learn new technologies and expand my skill set." },
  { content: "Actively participated in tech meetups and networking events to connect with industry professionals and build relationships." },
  { content: "Volunteered as a mentor at coding boot camps and hackathons to help aspiring developers learn and grow." },
];

export const techSkills = [
  // Core Frontend
  { skill: "React.js", short: "React", icon: <FaReact color="#150290ff" /> },
  { skill: "React Native", short: "Native", icon: <FaReact color="#61DBFB" /> },
  { skill: "Next.js", short: "Next", icon: <SiNextdotjs color="#000000" /> },
  { skill: "JavaScript (ES6+)", short: "JS", icon: <SiJavascript color="#f7df1e" /> },
  { skill: "TypeScript", short: "TS", icon: <SiTypescript color="#3178c6" /> },
  { skill: "HTML5", short: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { skill: "CSS3", short: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { skill: "SASS / SCSS", short: "SASS", icon: <FaSass color="#cc6699" /> },
  { skill: "TailwindCSS", short: "Tailwind", icon: <SiTailwindcss color="#06b6d4" /> },
  { skill: "Styled Components", short: "SC", icon: <SiStyledcomponents color="#db7093" /> },
  { skill: "Bootstrap", short: "BS", icon: <FaBootstrap color="#7952b3" /> },
  { skill: "Material UI", short: "MUI", icon: <SiMui color="#007fff" /> },
  // { skill: "Fluent UI", short: "Fluent", icon: <FluentLogo24Filled color="#0078d4" /> },

  // State Management
  { skill: "Redux", short: "Redux", icon: <SiRedux color="#764abc" /> },
  { skill: "Context API", short: "Ctx", icon: <VscJson color="#f0db4f" /> },

  // APIs
  { skill: "RESTful APIs", short: "REST", icon: <SiAxios color="#5a29e4" /> },
  { skill: "Axios", short: "Axios", icon: <SiAxios color="#5a29e4" /> },
  { skill: "GraphQL", short: "GraphQL", icon: <SiGraphql color="#e10098" /> },
  { skill: "Postman", short: "Postman", icon: <SiPostman color="#ef5b25" /> },

  // Node + Backend (light touch since you’re frontend-focused)
  { skill: "Node.js", short: "Node", icon: <FaNodeJs color="#339933" /> },
  { skill: "Express.js", short: "Express", icon: <SiExpress color="#000000" /> },
  { skill: "MongoDB", short: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { skill: "Firebase", short: "Firebase", icon: <SiFirebase color="#ffca28" /> },

  // Testing
  { skill: "Jest", short: "Jest", icon: <SiJest color="#99425b" /> },
  { skill: "React Testing Library", short: "RTL", icon: <SiTestinglibrary color="#e33332" /> },


  // Build Tools
  { skill: "Webpack", short: "Webpack", icon: <SiWebpack color="#8dd6f9" /> },
  { skill: "Vite", short: "Vite", icon: <SiVite color="#646cff" /> },
  { skill: "Babel", short: "Babel", icon: <SiBabel color="#f9dc3e" /> },

  // Productivity
  { skill: "Storybook", short: "SB", icon: <SiStorybook color="#ff4785" /> },
  { skill: "ESLint", short: "ESLint", icon: <SiEslint color="#4b32c3" /> },
  { skill: "Prettier", short: "Prettier", icon: <SiPrettier color="#f7b93e" /> },

  // DevOps / Tools
  { skill: "Git", short: "Git", icon: <FaGitAlt color="#f34f29" /> },
  { skill: "GitHub", short: "GH", icon: <FaGithub /> },
  { skill: "NPM", short: "NPM", icon: <FaNpm color="#cb3837" /> },
  { skill: "VS Code", short: "VSCode", icon: <VscVscode color="#0078d7" /> },
  { skill: "Docker", short: "Docker", icon: <SiDocker color="#2496ed" /> },
  { skill: "Kubernetes", short: "K8s", icon: <SiKubernetes color="#326ce5" /> },

  // Agile Practices
  { skill: "Agile Methodologies", short: "Agile", icon: <SiJest color="#99425b" /> },
  { skill: "CI/CD", short: "CI/CD", icon: <SiVitest color="#646cff" /> },
  // { skill: "Testing", short: "Testing", icon: <SiTestinglibrary color="#e33332" /> },
  { skill: "Postman", short: "Postman", icon: <SiPostman color="#ef5b25" /> },
  { skill: "Vitest", short: "Vitest", icon: <SiVitest color="#646cff" /> },

  // Gen AI
  { skill: "Generative AI", short: "GenAI", icon: <RiAiGenerate2 color="#ef5b25" /> },
  { skill: "Prompt Engineering", short: "Prompt", icon: <TbPrompt color="#ef5b25" /> },
  { skill: "LangChain", short: "LangChain", icon: <SiLangchain color="#ef5b25" /> }, 
  { skill: "RAG", short: "RAG", icon: <RiAiGenerateText color="#ef5b25" /> },
  { skill: "LLM Integration", short: "LLM", icon: <RiAiGenerate color="#ef5b25" /> },
  { skill: "Vector Embeddings", short: "Vector", icon: <SiVectorlogozone color="#ef5b25" /> },
  { skill: "Fine-tuning", short: "Fine-tune", icon: <PiGearFineDuotone color="#ef5b25" /> },
  { skill: "Responsible AI", short: "RespAI", icon: <RiAiGenerate2 color="#ef5b25" /> },
  { skill: "Semantic Search", short: "SemSearch", icon: <FaSearch color="#ef5b25" /> },
  { skill: "Automated Content Gen", short: "AutoContent", icon: <SiContentstack color="#ef5b25" /> },
  { skill: "AI-Powered Search", short: "AISearch", icon: <GiArtificialIntelligence color="#ef5b25" /> },
  { skill: "Intelligent Automation", short: "IntelliAuto", icon: <RiAiGenerate2 color="#ef5b25" /> },
  { skill: "Document Analysis", short: "DocAnalysis", icon: <GrDocumentPerformance color="#ef5b25" /> },
  { skill: "Case Recommendations", short: "CaseRec", icon: <SiVectorlogozone color="#ef5b25" /> }, 
  { skill: "Content Generation", short: "ContentGen", icon: <SiContentstack color="#ef5b25" /> },
  { skill: "AI Integration", short: "AIIntegrate", icon: <GiArtificialIntelligence color="#ef5b25" /> },
  { skill: "Knowledge Retrieval", short: "KnowRetrieval", icon: <FaSearch color="#ef5b25" /> },
  { skill: "AI Optimization", short: "AIOptimize", icon: <PiGearFineDuotone color="#ef5b25" /> },
  { skill: "LLM Fine-tuning", short: "LLMFineTune", icon: <RiAiGenerate color="#ef5b25" /> },
  { skill: "AI Explainability", short: "AIExplain", icon: <GiArtificialIntelligence color="#ef5b25" /> },
  { skill: "Bias Detection", short: "BiasDetect", icon: <GiArtificialIntelligence color="#ef5b25" /> },
];

export const LanguagesIntrests = [
  { content: "I can efficiently communicate in HINDI & ENGLISH" },
  { content: "I love Gardening & Traveling" },
  { content: "Love to do Mediteation & Yoga Sometime...." },
  { content: "I am a good listener & a quick learner" },
]

export const contactInfo = [
  { content: "Email: amitrisi0345@gmail.com" },
  { content: "Phone: +91-7464060122" },
  { content: "Address: Bangalore, India" },
]