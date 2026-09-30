import personal from '../assets/images/personal.jpg'
import aybank from '../assets/images/aybank.jpeg'
import tapking from '../assets/images/tapking.jpeg'
import mileo from '../assets/images/mileo.jpeg'
import milaya from '../assets/images/milaya.jpeg'
import drjobs from '../assets/images/dr.jpeg'
import diwan from '../assets/images/diwan.jpg'
import cvshots from '../assets/images/cvshots.jpeg'
import eha from '../assets/images/eha.jpeg'
import alnada from '../assets/images/alnada.jpg'
import olive from '../assets/images/olive.jpg'
import tekegy from '../assets/images/tekegy.jpeg'
import bhub from '../assets/images/bhub.jpg'
import miasset from '../assets/images/mi-asset.jpeg'
import oper8ly from '../assets/images/oper8ly.jpeg'
import facilities from '../assets/images/facilities.jpeg'
import ektsad from '../assets/images/ektsad.jpeg'
import bosla from '../assets/images/bosla.jpeg'
import alfa from '../assets/images/alfa.jpeg'
import smartjobs from '../assets/images/smartjobs.jpeg'
import toutongi from '../assets/images/toutongi.jpeg'
import freelady from '../assets/images/freelady.jpeg'
import monairy from '../assets/images/monairy.jpg'
import logo from '../assets/logo.png'
import hackathonPdf from '../assets/certificates/hackathon.pdf'
import uiPdf from '../assets/certificates/certificate-ui.pdf'
import topTechPdf from '../assets/certificates/top-tech.pdf'

export const profile = {
  name: 'Mohamed Hemdan',
  firstName: 'Mohamed',
  lastName: 'Hemdan',
  role: 'Senior Frontend Developer',
  location: 'Dubai, UAE',
  email: 'mohamedhemdan415@gmail.com',
  github: 'https://github.com/Hemdan1994',
  linkedin: 'https://www.linkedin.com/in/mohamedhemdan/',
  resume: './Mohamed-Hemdan-Resume.pdf',
  photo: personal,
  logo,
  headline:
    'I turn complex product ideas into fast, pixel-perfect web experiences that users — and search engines — love.',
  summary: [
    "I'm Mohamed Hemdan, a Front-End Developer with 6+ years of experience building fast, responsive, and SEO-friendly websites. I specialize in React.js, Next.js, and modern UI frameworks like TailwindCSS, Bootstrap, and Material UI. I turn Figma and Adobe XD designs into pixel-perfect, user-friendly interfaces.",
    'Skilled in API integration, performance optimization, and state management (Redux, Context API), I also bring strong experience in Agile environments, version control (Git, Bitbucket), and CI/CD workflows. I’m a team player with a problem-solving mindset, passionate about clean code and great design.',
  ],
  recentTech: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'UI/UX',
    'TailwindCSS',
    'SEO',
    'Agile',
    'Prompt engineering',
  ],
  rotatingRoles: [
    'Front-End Developer',
    'UI Engineer',
    'Next.js Specialist',
    'Motion Designer',
    'Problem Solver',
  ],
}

export const stats = [
  { value: '6+', label: 'Years shipping UI' },
  { value: '19', label: 'Products launched' },
  { value: '4', label: 'Countries served' },
  { value: '98%', label: 'UI cert. score' },
]

export const services = [
  {
    title: 'Pixel-perfect UI',
    copy: 'Figma and Adobe XD to production-ready, accessible components with obsessive spacing and motion.',
  },
  {
    title: 'Next.js architecture',
    copy: 'SSR, SSG, ISR, CMS delivery APIs, multilingual routing, and scalable front-end systems.',
  },
  {
    title: 'Performance & SEO',
    copy: 'Core Web Vitals, meta strategy, and PageSpeed work that holds up in banking and government products.',
  },
  {
    title: 'Product animation',
    copy: 'GSAP and Framer Motion used with intent — not decoration — so interfaces feel premium and clear.',
  },
  {
    title: 'API-ready interfaces',
    copy: 'REST, GraphQL, and CMS delivery APIs wired into dashboards and public sites that stay fast under real traffic.',
  },
  {
    title: 'Prompt systems',
    copy: 'Structured AI workflows for Figma-to-code and review — same pixel-perfect bar, faster shipping.',
  },
]

export const process = [
  {
    n: '01',
    title: 'Listen & map',
    copy: 'Understand the product, users, CMS, and constraints before a single component is built.',
  },
  {
    n: '02',
    title: 'System first',
    copy: 'Reusable tokens and components from Figma — not one-off pages that fall apart at scale.',
  },
  {
    n: '03',
    title: 'Build & animate',
    copy: 'Next.js and React in production: SSR, multilingual routing, GSAP where motion earns it.',
  },
  {
    n: '04',
    title: 'Ship & prove',
    copy: 'PageSpeed, SEO, accessibility, and review. Then iterate on what the metrics say.',
  },
]

export const marqueeLine =
  'I DESIGN SLEEK, HIGH-PERFORMANCE WEB EXPERIENCES THAT HELP BRANDS STAND OUT  —  '

export const stack = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Angular',
  'Redux',
  'TailwindCSS',
  'GSAP',
  'Umbraco CMS',
  'Azure',
  'Git',
  'Figma',
]

export const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'El-Shorouk Academy',
    duration: '2012 — 2016',
    yearsStart: '2012',
    yearsEnd: '2016',
    location: 'Cairo, Egypt',
    credential: 'B.Sc.',
    note: 'Four-year computer science degree — the academic start of the path that led to production frontend work in 2018.',
  },
]

export const educationPath = [
  { year: '2012', label: 'Enrolled' },
  { year: '2016', label: 'Graduated' },
  { year: '2018', label: 'First frontend role' },
  { year: 'Now', label: 'Dubai' },
]

export const aiPrompt = {
  file: 'prompt.md',
  role: 'Senior frontend on a live design system',
  task: 'Turn this Figma frame into a reusable Next.js component',
  constraints: [
    'Tailwind tokens only — no one-off colors',
    'Match the existing Card API',
    'Keep PageSpeed, SEO, and accessibility',
    'GSAP only if the file already moves',
  ],
}

export const aiCases = [
  {
    title: 'Product AI',
    context: 'ML Word · hiring platform',
    copy: 'Worked with the AI team on face recognition and CV parsing — the frontend that made those models usable for recruiters and candidates.',
    tags: ['CV parsing', 'Face recognition', 'Next.js'],
  },
  {
    title: 'Prompt systems',
    context: 'Daily delivery',
    copy: 'Structured prompts for Figma-to-code, refactors, SEO passes, and component APIs — so the output matches the design system, not a generic template.',
    tags: ['Prompt engineering', 'Design systems', 'Code review'],
  },
  {
    title: 'AI-assisted shipping',
    context: 'Cursor · Copilot · ChatGPT',
    copy: 'Faster UI implementation on production work, with the same pixel-perfect and PageSpeed bar — AI drafts, I review and ship.',
    tags: ['Cursor', 'GitHub Copilot', 'ChatGPT'],
  },
]

export const jobs = [
  {
    title: 'Senior Frontend Developer',
    company: 'Modsoft UAE',
    duration: 'July 2025 — Present',
    location: 'Dubai, UAE (Onsite)',
    description: [
      'Use Umbraco CMS Delivery API with Next.js for stronger SSR and content flexibility.',
      'Convert Figma mockups into reusable, animated, pixel-perfect components.',
      'Use structured prompts and AI-assisted workflows to ship UI faster without skipping review.',
      'Fix SEO issues and meta tags to achieve top scores on Google PageSpeed.',
      'Test website performance and apply best practices for usability improvements.',
      'Implement front-end architecture to support scalable UI concepts.',
      'Add new features and review the application to meet user and design requirements.',
      'Manage and translate multilingual content.',
    ],
    tech: ['Git', 'Microsoft Azure', 'Umbraco', 'Next.js', 'React', 'Cursor'],
  },
  {
    title: 'Senior UI Developer',
    company: 'Blackstone UAE',
    duration: 'June 2024 — July 2025',
    location: 'Cairo, Egypt (Hybrid)',
    description: [
      'Worked with the Government of Dubai and Ministry of Culture on internal audit systems.',
      'Built internal systems with the Government of Abu Dhabi.',
      'Used Angular 13 and 17 to convert Figma mockups into reusable, animated, pixel-perfect components.',
      'Fixed SEO issues and meta tags to achieve top scores on Google PageSpeed.',
      'Tested website performance and applied usability best practices.',
      'Implemented front-end architecture to support scalable UI concepts.',
      'Added features and reviewed the application against user and design requirements.',
      'Managed and translated multilingual content.',
    ],
    tech: ['Git', 'Microsoft Azure', 'Angular', 'SEO', 'SSR'],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'ML Word',
    duration: 'May 2023 — March 2024',
    location: 'Abu Dhabi, UAE (Remote)',
    description: [
      'Collaborated with AI developers on features like face recognition and CV parsing.',
      'Developed reusable, animated, pixel-perfect components using Next.js and React.',
      'Fixed responsive issues across a wide range of screen sizes.',
      'Resolved SEO and meta tag issues to improve Google PageSpeed results.',
      'Implemented SSR fixes and dynamic routing solutions.',
      'Handled API requests using Axios.',
      'Reviewed and added features per UI/UX requirements.',
      'Translated and managed multilingual content.',
    ],
    tech: ['Next.js', 'React', 'Axios', 'AI APIs', 'Git', 'Jira', 'Bitbucket'],
  },
  {
    title: 'Senior UI Developer',
    company: 'Ibtikar Solutions UAE',
    duration: 'September 2023 — January 2024',
    location: 'Dubai, UAE (Remote — Freelance)',
    description: [
      'Converted UI/UX mockups into responsive, reusable, pixel-perfect components.',
      'Developed websites using HTML5, CSS3, SASS, Bootstrap (v3–5), Normalize, ECMAScript, and jQuery.',
    ],
    tech: ['HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Normalize', 'ECMAScript', 'jQuery'],
  },
  {
    title: 'Senior UI Developer',
    company: 'Dr.jobs',
    duration: 'March 2022 — May 2023',
    location: 'Abu Dhabi, UAE (Remote)',
    description: [
      'Built responsive, pixel-perfect UI components from UI/UX designs.',
      'Debugged and refactored application code to improve performance.',
      'Developed reusable components using React and Next.js (SSR, CSR, caching).',
      'Improved page speed and SEO through best practices.',
      'Implemented cache services using Workbox.',
      'Resolved responsive design issues across devices.',
    ],
    tech: [
      'HTML5',
      'CSS3',
      'SASS',
      'Bootstrap',
      'ECMAScript 6',
      'React',
      'Next.js',
      'Git',
      'Jira',
      'Bitbucket',
      'Elasticsearch',
      'Kibana',
    ],
  },
  {
    title: 'Front-end Developer',
    company: 'TekEgy',
    duration: 'December 2018 — May 2020',
    location: 'Remote',
    description: [
      'Developed websites using HTML5, CSS3, Bootstrap (3–4), Normalize, ECMAScript 6, and jQuery.',
      'Refactored and cleaned legacy code from unused features.',
    ],
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'ECMAScript 6', 'jQuery', 'Normalize'],
  },
  {
    title: 'Front-end Developer (Magento)',
    company: 'Dema for Advertising Digital Printing',
    duration: 'October 2019 — March 2022',
    location: 'Remote (Part-time)',
    description: [
      'Designed and developed website pages using HTML5, CSS3, Bootstrap (3–4), Normalize, ECMAScript 6, and jQuery.',
      'Customized and modified existing templates.',
    ],
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'ECMAScript 6', 'jQuery', 'Normalize'],
  },
]

export const skills = [
  { name: 'HTML & CSS', level: 98, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Redux', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 75, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Angular', level: 65, category: 'frontend' },
  { name: 'TailwindCSS', level: 85, category: 'frontend' },
  { name: 'Bootstrap', level: 95, category: 'frontend' },
  { name: 'Material UI', level: 75, category: 'frontend' },
  { name: 'Shadcn/ui', level: 70, category: 'frontend' },
  { name: 'Node.js', level: 50, category: 'backend' },
  { name: 'PHP', level: 40, category: 'backend' },
  { name: 'RESTful APIs', level: 80, category: 'backend' },
  { name: 'GraphQL', level: 60, category: 'backend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Jira', level: 85, category: 'tools' },
  { name: 'Microsoft Azure', level: 85, category: 'tools' },
  { name: 'Adobe Suite', level: 90, category: 'tools' },
  { name: 'Docker', level: 65, category: 'tools' },
  { name: 'Figma', level: 75, category: 'tools' },
  { name: 'Jest', level: 75, category: 'tools' },
  { name: 'Jasmine', level: 70, category: 'tools' },
  { name: 'Prompt engineering', level: 82, category: 'ai' },
  { name: 'Cursor', level: 85, category: 'ai' },
  { name: 'ChatGPT', level: 80, category: 'ai' },
  { name: 'GitHub Copilot', level: 75, category: 'ai' },
] as const

export const projects = [
  {
    title: 'Aybank',
    description:
      'Corporate banking platform with modern UI and content management. Built with Next.js and Umbraco CMS Delivery API. SSR/SSG, dynamic routing, multilingual support, and secure API handling.',
    image: aybank,
    tech: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'React Query', 'Framer Motion'],
    link: 'https://aybank.com',
    featured: true,
  },
  {
    title: 'Tapking',
    description:
      'Recruitment and talent platform with advanced filtering and dashboards. Next.js + Umbraco CMS, SSR/ISR, Redux Toolkit, lazy loading, code-splitting, and WCAG-accessible components.',
    image: tapking,
    tech: ['Next.js', 'Umbraco CMS', 'Material UI', 'Redux Toolkit', 'Framer Motion'],
    link: 'https://tapking.com',
    featured: true,
  },
  {
    title: 'Mileo Hotels',
    description:
      'Hotel booking platform with CMS-driven content and a room booking interface. SSR, multilingual support, and GSAP / Framer Motion animations for a hospitality-grade feel.',
    image: mileo,
    tech: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    link: 'https://mileohotels.com',
    featured: true,
  },
  {
    title: 'Milaya Properties',
    description:
      'Dubai real estate platform with direct listings and a zero-commission model. Property filters, community exploration, owner forms, transparent pricing, FAQs, and comparison tables.',
    image: milaya,
    tech: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'React Query', 'Framer Motion'],
    link: 'https://milayaproperties.com',
    featured: true,
  },
  {
    title: 'DrJobs',
    description:
      'Recruitment platform integrated with ATS providers like ZOHO and JobSoid. Employee and employer dashboards with advanced matching.',
    image: drjobs,
    tech: ['React 18', 'Material UI', 'Bootstrap', 'SASS', 'JavaScript'],
    link: 'https://drjobs.ae',
    featured: true,
  },
  {
    title: 'Diwan E-Book Reader',
    description:
      'Digital learning platform for the UAE Ministry of Education featuring e-books, podcasts, videos, and magazines with interactive reading.',
    image: diwan,
    tech: ['HTML5', 'SASS', 'JavaScript', 'jQuery', 'Bootstrap'],
    link: '#',
    featured: true,
  },
  {
    title: 'CV Shots',
    description:
      'Video resume platform connecting job seekers and employers with video introductions and advanced search.',
    image: cvshots,
    tech: ['HTML5', 'SASS', 'JavaScript', 'jQuery', 'Bootstrap'],
    link: '#',
    featured: false,
  },
  {
    title: 'Print Persona',
    description:
      'E-commerce platform for custom print products on Magento 2, with online design tools and product customization.',
    image: olive,
    tech: ['Magento 2', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    link: 'https://www.printpersona.com',
    featured: false,
  },
  {
    title: 'Egyptian Hotels Association',
    description:
      'Organization site for hotel rating, regulation, and industry standards in Egypt.',
    image: eha,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ajax'],
    link: 'http://www.egyptianhotels.org/',
    featured: false,
  },
  {
    title: 'Al-nada Mills',
    description:
      'Corporate website with products, categories, portfolio, and an interactive company timeline.',
    image: alnada,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ajax'],
    link: 'http://alnadamills.com',
    featured: false,
  },
  {
    title: 'Al-monairy Corn',
    description:
      'Company website with product catalogs, portfolio showcase, and an interactive timeline.',
    image: olive,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
    link: 'https://olivelandeg.com',
    featured: false,
  },
  {
    title: 'Tekegy',
    description: 'Company portfolio website featuring services, projects, and an interactive timeline.',
    image: tekegy,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: 'http://tekegy.com',
    featured: false,
  },
  {
    title: 'B-HUB',
    description: 'Business hub platform showcasing services, portfolio, and company milestones.',
    image: bhub,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: 'http://theb-hub.com',
    featured: false,
  },
  {
    title: 'Olamarine',
    description: 'E-commerce website for fishing equipment with locations in Cairo and Hurghada.',
    image: bhub,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: 'http://olamarine.com',
    featured: false,
  },
  {
    title: 'Mi-asset',
    description: 'RTL website showcasing services, portfolio, and timeline with Arabic support.',
    image: miasset,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: 'http://mi-asset.com',
    featured: false,
  },
  {
    title: 'Oper8ly',
    description: 'RTL corporate website with services, portfolio showcase, and company history.',
    image: oper8ly,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: 'http://oper8ly.com',
    featured: false,
  },
  {
    title: 'Facilities',
    description: 'RTL service company website with portfolio and interactive features.',
    image: facilities,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: '#',
    featured: false,
  },
  {
    title: 'El Ektsad welbnok',
    description: 'RTL news website with content management and timeline features.',
    image: ektsad,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: 'http://elektsadwelbnooknews.com',
    featured: false,
  },
  {
    title: 'Bosla News',
    description: 'RTL news platform featuring services, portfolio, and company timeline integration.',
    image: bosla,
    tech: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery'],
    link: 'http://alboslanews.com',
    featured: false,
  },
]

export const certificates = [
  {
    title: 'Hackathon 2.0 — powered by HCLTech',
    issuer: 'HCLTech',
    date: 'June 28, 2025',
    description:
      'Competed, collaborated, and showcased real-world problem-solving in a high-impact, real-time environment.',
    pdf: hackathonPdf,
  },
  {
    title: 'Certified UI Developer',
    issuer: 'NTI Egypt',
    date: 'March 2022',
    description: 'Certified UI Developer with a test score of 98%.',
    pdf: uiPdf,
  },
  {
    title: 'Top Tech Performance Award',
    issuer: 'Drjobs',
    date: 'August 2022',
    description: 'Delivered a project before the deadline with unit tests.',
    pdf: topTechPdf,
  },
]

export const clients = [
  'Government of Dubai',
  'Ministry of Culture',
  'Government of Abu Dhabi',
  'UAE Ministry of Education',
  'Aybank',
  'Mileo Hotels',
]

export const cases = [
  {
    title: 'Aybank',
    sector: 'Corporate banking',
    host: 'aybank.com',
    link: 'https://aybank.com',
    image: aybank,
    problem:
      'A private bank needed a public platform that marketing could run from a CMS — without losing SEO or load speed.',
    owned:
      'Next.js on Umbraco Delivery API: SSR/SSG, multilingual routing, and PageSpeed-oriented meta.',
    stack: ['Next.js', 'Umbraco CMS', 'Tailwind', 'React Query'],
  },
  {
    title: 'Tapking',
    sector: 'Recruitment product',
    host: 'tapking.com',
    link: 'https://tapking.com',
    image: tapking,
    problem:
      'A talent platform needed filter-heavy dashboards that stayed fast and accessible as content changed.',
    owned:
      'Next.js + ISR, Redux Toolkit, lazy loading, and WCAG-minded components on Umbraco.',
    stack: ['Next.js', 'Umbraco CMS', 'Material UI', 'Redux Toolkit'],
  },
  {
    title: 'Mileo Hotels',
    sector: 'Hospitality',
    host: 'mileohotels.com',
    link: 'https://mileohotels.com',
    image: mileo,
    problem:
      'A hotel brand needed booking-ready pages that still felt premium on mobile.',
    owned:
      'SSR hotel content, multilingual UI, and GSAP / Framer Motion used on real booking flows.',
    stack: ['Next.js', 'Umbraco CMS', 'GSAP', 'Tailwind'],
  },
  {
    title: 'Milaya Properties',
    sector: 'Dubai real estate',
    host: 'milayaproperties.com',
    link: 'https://milayaproperties.com',
    image: milaya,
    problem:
      'Owners needed a zero-commission listing site with clear filters and direct contact.',
    owned:
      'Property filtering, community pages, owner forms, and comparison tables on a CMS-driven Next.js app.',
    stack: ['Next.js', 'Umbraco CMS', 'Tailwind', 'React Query'],
  },
  {
    title: 'DrJobs',
    sector: 'Hiring platform',
    host: 'drjobs.ae',
    link: 'https://drjobs.ae',
    image: drjobs,
    problem:
      'Employers and candidates needed dashboards wired into real ATS tools, not a brochure site.',
    owned:
      'React 18 UI, matching flows, and integrations with ZOHO and JobSoid.',
    stack: ['React 18', 'Material UI', 'SASS', 'Bootstrap'],
  },
  {
    title: 'Diwan E-Book Reader',
    sector: 'UAE Ministry of Education',
    host: 'Internal product',
    link: '#',
    image: diwan,
    problem:
      'The ministry needed a digital reader for e-books, podcasts, video, and magazines.',
    owned: 'Interactive reading UI in a production learning platform.',
    stack: ['HTML5', 'SASS', 'JavaScript', 'Bootstrap'],
  },
]

export const heroStats = [
  { value: '19+', label: 'Products launched' },
  { value: '6+', label: 'Years of experience' },
  { value: '4', label: 'Countries served' },
]

export const mosaic = [
  [aybank, tapking, mileo],
  [milaya, drjobs, diwan],
  [cvshots, eha, smartjobs],
]

export const howIWork = [
  'I turn Figma and Adobe XD designs into pixel-perfect, reusable components with motion that feels intentional, never decorative.',
  'I build on Next.js and React with SSR, multilingual routing, and CMS delivery APIs, so products stay fast and SEO-friendly at scale.',
  'I use structured prompts and AI-assisted workflows to ship faster, while every line still gets a senior review before it goes live.',
]

export const skillBars = [
  { name: 'HTML & CSS', level: 98 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'React & Next.js', level: 88 },
  { name: 'Tailwind / Bootstrap', level: 95 },
  { name: 'SEO & Performance', level: 90 },
  { name: 'Prompt engineering', level: 82 },
]

export const techStack = [
  { name: 'React', icon: 'siReact' },
  { name: 'Next.js', icon: 'siNextdotjs' },
  { name: 'TypeScript', icon: 'siTypescript' },
  { name: 'JavaScript', icon: 'siJavascript' },
  { name: 'Tailwind CSS', icon: 'siTailwindcss' },
  { name: 'Angular', icon: 'siAngular' },
  { name: 'Redux', icon: 'siRedux' },
  { name: 'GSAP', icon: 'siGreensock' },
  { name: 'Umbraco', icon: 'siUmbraco' },
  { name: 'Sass', icon: 'siSass' },
  { name: 'Figma', icon: 'siFigma' },
  { name: 'Cursor', icon: 'siCursor' },
] as const

export const experience = [
  { years: '2025 - Now', title: 'Senior Frontend Developer', company: 'Modsoft UAE · Dubai' },
  { years: '2024 - 2025', title: 'Senior UI Developer', company: 'Blackstone UAE · Gov. of Dubai & Abu Dhabi' },
  { years: '2023 - 2024', title: 'Senior Frontend Developer', company: 'ML Word · AI hiring platform' },
  { years: '2023 - 2024', title: 'Senior UI Developer (Freelance)', company: 'Ibtikar Solutions UAE' },
  { years: '2022 - 2023', title: 'Senior UI Developer', company: 'Dr.jobs · Abu Dhabi' },
  { years: '2019 - 2022', title: 'Front-end Developer (Magento)', company: 'Dema Digital Printing' },
  { years: '2018 - 2020', title: 'Front-end Developer', company: 'TekEgy' },
  { years: '2012 - 2016', title: 'B.Sc. Computer Science', company: 'El-Shorouk Academy · Cairo' },
]

export const featuredWork = [
  {
    title: 'Aybank',
    image: aybank,
    tags: ['Banking', 'Next.js', 'Umbraco'],
    link: 'https://aybank.com',
    about:
      'Corporate banking platform run from a CMS. Built on Next.js and the Umbraco Delivery API with SSR/SSG, dynamic routing, multilingual support, and secure API handling, tuned for PageSpeed and SEO.',
    tools: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'React Query', 'Framer Motion'],
  },
  {
    title: 'Tapking',
    image: tapking,
    tags: ['Platform', 'Next.js', 'Redux'],
    link: 'https://tapking.com',
    about:
      'Talent platform with filter-heavy dashboards. Next.js with ISR, Redux Toolkit, lazy loading, and code-splitting, plus WCAG-minded components on top of Umbraco CMS.',
    tools: ['Next.js', 'Umbraco CMS', 'Material UI', 'Redux Toolkit', 'Framer Motion'],
  },
  {
    title: 'Mileo Hotels',
    image: mileo,
    tags: ['Hospitality', 'Booking', 'GSAP'],
    link: 'https://mileohotels.com',
    about:
      'Hotel booking platform with CMS-driven content and a room booking interface. SSR, multilingual UI, and GSAP / Framer Motion animations for a hospitality-grade feel on every device.',
    tools: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'Milaya Properties',
    image: milaya,
    tags: ['Real Estate', 'Dubai', 'Filters'],
    link: 'https://milayaproperties.com',
    about:
      'Dubai real estate platform with a zero-commission model: property filters, community exploration, owner forms, transparent pricing, FAQs, and comparison tables.',
    tools: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'React Query', 'Framer Motion'],
  },
  {
    title: 'DrJobs',
    image: drjobs,
    tags: ['Hiring', 'ATS', 'React'],
    link: 'https://drjobs.ae',
    about:
      'Recruitment platform integrated with ATS providers like ZOHO and JobSoid. Employee and employer dashboards with advanced matching, caching via Workbox, and SSR on Next.js.',
    tools: ['React 18', 'Next.js', 'Material UI', 'SASS', 'Workbox'],
  },
  {
    title: 'Diwan Reader',
    image: diwan,
    tags: ['Gov', 'Education', 'E-Books'],
    link: '',
    about:
      'Digital learning platform for the UAE Ministry of Education featuring e-books, podcasts, videos, and magazines with an interactive reading experience.',
    tools: ['HTML5', 'SASS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'CV Shots',
    image: cvshots,
    tags: ['Video CV', 'Hiring', 'UI'],
    link: '',
    about:
      'Video resume platform connecting job seekers and employers through video introductions and advanced search.',
    tools: ['HTML5', 'SASS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Print Persona',
    image: olive,
    tags: ['E-Commerce', 'Magento 2', 'Custom'],
    link: 'https://www.printpersona.com',
    about:
      'E-commerce platform for custom print products on Magento 2, with online design tools and product customization flows.',
    tools: ['Magento 2', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
  },
  {
    title: 'Egyptian Hotels',
    image: eha,
    tags: ['Association', 'Hospitality', 'Web'],
    link: 'http://www.egyptianhotels.org/',
    about:
      'Organization site for hotel rating, regulation, and industry standards across Egypt.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ajax'],
  },
]

export const serviceCards = [
  {
    title: 'Pixel-Perfect UI',
    copy: 'Figma and Adobe XD turned into production-ready, accessible components with obsessive spacing, typography, and responsive behavior across every screen size.',
    image: milaya,
  },
  {
    title: 'Next.js Development',
    copy: 'SSR, SSG, and ISR apps with multilingual routing, dynamic pages, and CMS delivery APIs such as Umbraco, built to scale from landing pages to full platforms.',
    image: aybank,
  },
  {
    title: 'Performance & SEO',
    copy: 'Core Web Vitals, meta strategy, caching, and PageSpeed work that holds up in banking, government, and hospitality products with real traffic.',
    image: mileo,
  },
  {
    title: 'Motion & Interaction',
    copy: 'GSAP and Framer Motion used with intent, from scroll-driven storytelling to micro-interactions, so interfaces feel premium without hurting speed.',
    image: toutongi,
  },
  {
    title: 'Dashboards & APIs',
    copy: 'REST and GraphQL wired into dashboards with Redux, React Query, and clean state, so data-heavy products stay fast, readable, and easy to maintain.',
    image: tapking,
  },
  {
    title: 'AI-Assisted Delivery',
    copy: 'Structured prompt systems for Figma-to-code, refactors, and review with Cursor, Copilot, and ChatGPT: faster shipping at the same senior quality bar.',
    image: alfa,
  },
]

export const badgeFaces = [aybank, mileo, freelady, monairy]
