
import React, { useState } from 'react';
import PageTransition from '../Layout/PageTransition';
import { cn } from '@/lib/utils';

interface Job {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tech: string[];
}

const jobs: Job[] = [
  {
    title: "Senior Frontend Developer Nextjs",
    company: "Modsoft UAE",
    duration: "Present",
    location: "Dubai, UAE (Onsite)",
    description: [
      "Use Umbraco CMS Delivery API to handle it with nextjs for better SSR",
      "Converting Figma mockups into reusable, animated, pixel-perfect components",
      "Fix SEO issues and meta tags to achieve top scores on Google PageSpeed test",
      "Test website performance and apply best practices for usability improvements",
      "Implement front-end architecture to support scalable UI concepts",
      "Add new features and review the application to meet user and design requirements",
      "Manage and translate multilingual content"
    ],
    tech: ["Git", "Microsoft Azure", "Umbraco" , "Next JS" , "React JS"],
  },

  {
    title: "Senior UI Developer",
    company: "Blackstone UAE",
    duration: "June 2024 - July 2025 ",
    location: "Cairo, Egypt (Hybrid)",
    description: [
      "Working with Government of Dubai & Ministry of culture for internal Audit systems",
      "Worked in internal system with Government of Abu-Dhabi",
      "Using angular 13 , 17 for Front-end Converting Figma mockups into reusable, animated, pixel-perfect components",
      "Fix SEO issues and meta tags to achieve top scores on Google PageSpeed test",
      "Test website performance and apply best practices for usability improvements",
      "Implement front-end architecture to support scalable UI concepts",
      "Add new features and review the application to meet user and design requirements",
      "Manage and translate multilingual content"
    ],
    tech: ["Git", "Microsoft Azure" , "Angular" , "SEO" , "SSR"],
  },
  {
    title: "Senior Frontend Developer",
    company: "ML Word",
    duration: "May 2023 – March 2024",
    location: "Abu Dhabi, UAE (Remote)",
    description: [
      "Develop reusable, animate, pixel-perfect components using Next.js and React",
      "Fixing responsive issues across various screen sizes",
      "Resolving SEO and meta tag issues for improve Google PageSpeed results",
      "Collaborating with AI developers to build features like face recognition and CV parsing",
      "Implement SSR fixes and dynamic routing solutions",
      "Handle API requests using Axios",
      "Review and added new features per UI/UX requirements",
      "Translate and manage multilingual content"
    ],
    tech: ["Next.js", "React", "Axios", "Git", "Jira", "Bitbucket"]
  },
  {
    title: "Senior UI Developer",
    company: "Ibtikar Solutions UAE",
    duration: "September 2023 – January 2024",
    location: "Dubai, UAE (Remote - Freelance)",
    description: [
      "Convert UI/UX mockups into responsive, reusable, pixel-perfect components",
      "Develop websites using HTML5, CSS3, SASS, Bootstrap (v3–5), Normalize, ECMAScript, and jQuery"
    ],
    tech: ["HTML5", "CSS3", "SASS", "Bootstrap", "Normalize", "ECMAScript", "jQuery"]
  },
  {
    title: "Senior UI Developer",
    company: "Dr.jobs",
    duration: "March 2022 – May 2023",
    location: "Abu Dhabi, UAE (Remote)",
    description: [
      "Built responsive, pixel-perfect UI components from UI/UX designs",
      "Debugg and refactor application code to improve performance",
      "Develop reusable components using React and Next.js (SSR, CSR, caching)",
      "Improve page speed and SEO through best practices",
      "Implement cache services using Workbox",
      "Resolve responsive design issues across devices"
    ],
    tech: ["HTML5", "CSS3", "SASS", "Bootstrap", "ECMAScript 6", "React", "Next.js", "Git", "Jira", "Bitbucket", "Elastic Search", "Kibana"],
  },
  {
    title: "Front-end Developer",
    company: "TekEgy",
    duration: "December 2018 – May 2020",
    location: "Remote",
    description: [
      "Develop websites using HTML5, CSS3, Bootstrap (3–4), Normalize, ECMAScript 6, and jQuery",
      "Refactor and clean legacy code from unused features"
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "ECMAScript 6", "jQuery", "Normalize"]
  },
  {
    title: "Front-end Developer (Magento)",
    company: "Dema for Advertising Digital Printing",
    duration: "October 2019 – March 2022",
    location: "Remote (Part-time)",
    description: [
      "Design and develop website pages using HTML5, CSS3, Bootstrap (3–4), Normalize, ECMAScript 6, and jQuery",
      "Customize and modify existing templates"
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "ECMAScript 6", "jQuery", "Normalize"]
  }
];


const ExperienceSection = () => {
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const activeJob = jobs[activeJobIndex];

  return (
    <PageTransition className="section-container">
      <h2 className="section-title">
        <span className="text-highlight mr-2">04.</span>
        Experience
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <div className="relative flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-thin scrollbar-thumb-highlight scrollbar-track-navy-light">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveJobIndex(index)}
                className={cn(
                  "px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 text-sm font-medium min-w-[200px]",
                  activeJobIndex === index
                    ? "border-highlight text-highlight bg-navy-light/50"
                    : "border-slate/30 text-slate hover:bg-navy-light/30 hover:text-highlight"
                )}
              >
                {job.company}
              </button>
            ))}
            <div 
              className="hidden md:block absolute h-[2px] md:w-[2px] md:h-[calc(100%/6)] bg-highlight transition-all duration-300"
              style={{ 
                left: 0,
                top: `${activeJobIndex * (100 / jobs.length)}%` 
              }}
            />
          </div>
        </div>

        <div className="md:w-2/3 lg:w-3/4">
          <h3 className="text-xl font-bold text-foreground mb-1">
            {activeJob.title} <span className="text-highlight">@ {activeJob.company}</span>
          </h3>
          
          <p className="text-slate-light mb-4">{activeJob.duration} | {activeJob.location}</p>
          
          <ul className="mb-6 space-y-4">
            {activeJob.description.map((point, index) => (
              <li key={index} className="flex">
                <span className="text-highlight mr-2 mt-1 flex-shrink-0">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {activeJob.tech.map((tech) => (
              <span 
                key={tech} 
                className="bg-navy-light text-slate-light text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ExperienceSection;
