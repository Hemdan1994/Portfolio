
import React, { useRef, useEffect } from 'react';
import PageTransition from '../Layout/PageTransition';

const AboutSection = () => {
  return (
    <PageTransition className="section-container">
      <h2 className="section-title">
        <span className="text-highlight mr-2">01.</span>
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="mb-4 text-lg">
          I'm Mohamed Hemdan, a Front-End Developer with 6+ years of experience building fast, responsive, and SEO-friendly websites. I specialize in React.js, Next.js, and modern UI frameworks like TailwindCSS, Bootstrap, and Material UI. I turn Figma and Adobe XD designs into pixel-perfect, user-friendly interfaces.
          </p>
          
          <p className="mb-4 text-lg">
          Skilled in API integration, performance optimization, and state management (Redux, Context API), I also bring strong experience in Agile environments, version control (Git, Bitbucket), and CI/CD workflows. I’m a team player with a problem-solving mindset, passionate about clean code and great design.
          </p>
          
          {/* <p className="mb-4 text-lg">
         Beyond front-end development, I’m experienced in performance optimization, SEO best practices, CI/CD pipelines, and version control systems like Git, Bitbucket, and Azure DevOps. I thrive in Agile/Scrum teams, using tools like Jira and Trello to manage tasks efficiently and deliver high-quality features on time.
          </p> */}
          {/* <p className="mb-8 text-lg">
          Driven by innovation and design excellence, I’m always eager to contribute to forward-thinking teams and build web solutions that users love.
          </p> */}
          
          <p className="mb-4 text-lg">
            Here are a few technologies I've been working with recently:
          </p>
          
          <ul className="grid grid-cols-2 gap-2 mb-8">
            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'UI/UX ', 'TailwindCSS' , 'SEO' , 'Agile'].map((tech) => (
              <li key={tech} className="flex items-start">
                <span className="text-highlight mr-2">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative group">
          <div className="relative rounded-md overflow-hidden bg-highlight/20 z-10">
            <div className="absolute inset-0 bg-highlight/20 group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=400" 
              alt="Profile" 
              className="rounded-md grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-105 h-auto max-w-full"
            />
          </div>
          <div className="absolute -inset-4 border-2 border-highlight rounded-md z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutSection;
