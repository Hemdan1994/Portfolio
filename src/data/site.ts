import personal from '../assets/images/hemdan.webp?hq'
import portrait from '../assets/images/hemdan-personal.jpeg?hero'
import aybankTile from '../assets/images/aybank.jpeg?tile'
import tapkingTile from '../assets/images/tapking.jpeg?tile'
import mileoTile from '../assets/images/mileo.jpeg?tile'
import milayaTile from '../assets/images/milaya.jpeg?tile'
import drjobsTile from '../assets/images/dr.jpeg?tile'
import diwanTile from '../assets/images/diwan.jpg?tile'
import cvshotsTile from '../assets/images/cvshots.jpeg?tile'
import ehaTile from '../assets/images/eha.jpeg?tile'
import oliveTile from '../assets/images/olive.jpg?tile'
import smartjobsTile from '../assets/images/smartjobs.jpeg?tile'
import aybankCard from '../assets/images/aybank.jpeg?card'
import tapkingCard from '../assets/images/tapking.jpeg?card'
import mileoCard from '../assets/images/mileo.jpeg?card'
import milayaCard from '../assets/images/milaya.jpeg?card'
import drjobsCard from '../assets/images/dr.jpeg?card'
import diwanCard from '../assets/images/diwan.jpg?card'
import cvshotsCard from '../assets/images/cvshots.jpeg?card'
import ehaCard from '../assets/images/eha.jpeg?card'
import oliveCard from '../assets/images/olive.jpg?card'
import toutongiCard from '../assets/images/toutongi.jpeg?card'
import alfaCard from '../assets/images/alfa.jpeg?card'
import aybankThumb from '../assets/images/aybank.jpeg?thumb'
import mileoThumb from '../assets/images/mileo.jpeg?thumb'
import freeladyThumb from '../assets/images/freelady.jpeg?thumb'
import monairyThumb from '../assets/images/monairy.jpg?thumb'
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
  heroPhoto: portrait,
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

export const heroStats = [
  { value: '19+', label: 'Products launched' },
  { value: '6+', label: 'Years of experience' },
  { value: '4', label: 'Countries served' },
]

export const mosaic = [
  [aybankTile, tapkingTile, mileoTile],
  [milayaTile, drjobsTile, diwanTile],
  [cvshotsTile, ehaTile, smartjobsTile],
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
    image: aybankCard,
    cover: aybankTile,
    tags: ['Banking', 'Next.js', 'Umbraco'],
    link: 'https://aybank.com',
    about:
      'Corporate banking platform run from a CMS. Built on Next.js and the Umbraco Delivery API with SSR/SSG, dynamic routing, multilingual support, and secure API handling, tuned for PageSpeed and SEO.',
    tools: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'React Query', 'Framer Motion'],
  },
  {
    title: 'Tapking',
    image: tapkingCard,
    cover: tapkingTile,
    tags: ['Platform', 'Next.js', 'Redux'],
    link: 'https://tapking.com',
    about:
      'Talent platform with filter-heavy dashboards. Next.js with ISR, Redux Toolkit, lazy loading, and code-splitting, plus WCAG-minded components on top of Umbraco CMS.',
    tools: ['Next.js', 'Umbraco CMS', 'Material UI', 'Redux Toolkit', 'Framer Motion'],
  },
  {
    title: 'Mileo Hotels',
    image: mileoCard,
    cover: mileoTile,
    tags: ['Hospitality', 'Booking', 'GSAP'],
    link: 'https://mileohotels.com',
    about:
      'Hotel booking platform with CMS-driven content and a room booking interface. SSR, multilingual UI, and GSAP / Framer Motion animations for a hospitality-grade feel on every device.',
    tools: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'Milaya Properties',
    image: milayaCard,
    cover: milayaTile,
    tags: ['Real Estate', 'Dubai', 'Filters'],
    link: 'https://milayaproperties.com',
    about:
      'Dubai real estate platform with a zero-commission model: property filters, community exploration, owner forms, transparent pricing, FAQs, and comparison tables.',
    tools: ['Next.js', 'Umbraco CMS', 'Tailwind CSS', 'React Query', 'Framer Motion'],
  },
  {
    title: 'DrJobs',
    image: drjobsCard,
    cover: drjobsTile,
    tags: ['Hiring', 'ATS', 'React'],
    link: 'https://drjobs.ae',
    about:
      'Recruitment platform integrated with ATS providers like ZOHO and JobSoid. Employee and employer dashboards with advanced matching, caching via Workbox, and SSR on Next.js.',
    tools: ['React 18', 'Next.js', 'Material UI', 'SASS', 'Workbox'],
  },
  {
    title: 'Diwan Reader',
    image: diwanCard,
    cover: diwanTile,
    tags: ['Gov', 'Education', 'E-Books'],
    link: '',
    about:
      'Digital learning platform for the UAE Ministry of Education featuring e-books, podcasts, videos, and magazines with an interactive reading experience.',
    tools: ['HTML5', 'SASS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'CV Shots',
    image: cvshotsCard,
    cover: cvshotsTile,
    tags: ['Video CV', 'Hiring', 'UI'],
    link: '',
    about:
      'Video resume platform connecting job seekers and employers through video introductions and advanced search.',
    tools: ['HTML5', 'SASS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Print Persona',
    image: oliveCard,
    cover: oliveTile,
    tags: ['E-Commerce', 'Magento 2', 'Custom'],
    link: 'https://www.printpersona.com',
    about:
      'E-commerce platform for custom print products on Magento 2, with online design tools and product customization flows.',
    tools: ['Magento 2', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
  },
  {
    title: 'Egyptian Hotels',
    image: ehaCard,
    cover: ehaTile,
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
    image: milayaCard,
  },
  {
    title: 'Next.js Development',
    copy: 'SSR, SSG, and ISR apps with multilingual routing, dynamic pages, and CMS delivery APIs such as Umbraco, built to scale from landing pages to full platforms.',
    image: aybankCard,
  },
  {
    title: 'Performance & SEO',
    copy: 'Core Web Vitals, meta strategy, caching, and PageSpeed work that holds up in banking, government, and hospitality products with real traffic.',
    image: mileoCard,
  },
  {
    title: 'Motion & Interaction',
    copy: 'GSAP and Framer Motion used with intent, from scroll-driven storytelling to micro-interactions, so interfaces feel premium without hurting speed.',
    image: toutongiCard,
  },
  {
    title: 'Dashboards & APIs',
    copy: 'REST and GraphQL wired into dashboards with Redux, React Query, and clean state, so data-heavy products stay fast, readable, and easy to maintain.',
    image: tapkingCard,
  },
  {
    title: 'AI-Assisted Delivery',
    copy: 'Structured prompt systems for Figma-to-code, refactors, and review with Cursor, Copilot, and ChatGPT: faster shipping at the same senior quality bar.',
    image: alfaCard,
  },
]

export const badgeFaces = [aybankThumb, mileoThumb, freeladyThumb, monairyThumb]
