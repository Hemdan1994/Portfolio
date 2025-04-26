import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Smart Jobs",
    description: "International recruitment platform with advanced AI features including video CV generation, job matching, and skill recommendations. Separate dashboards for candidates and employers.",
    image: "../../../src/assets/images/smartjobs.jpeg",
    tech: ["React.js 18", "Next.js", "Redux", "Chart.js", "Formik", "SASS","Bootstrap" , "Tailwind Css"],
    link: "https://globalsmartjobs.com",
    featured: true
  },
  {
    title: "DrJobs",
    description: "Comprehensive recruitment platform integrated with major ATS providers like ZOHO and JobSoid. Features employee and employer dashboards with advanced matching capabilities.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "SASS", "JavaScript", "jQuery", "Bootstrap" , "React.js 18" , "Material UI"],
    link: "https://drjobs.ae",
    featured: true
  },
  {
    title: "Diwan E-Book Reader",
    description: "Digital learning platform for UAE Ministry of Education featuring e-books, podcasts, videos, and magazine content with interactive reading capabilities.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    tech: ["HTML5", "SASS", "JavaScript", "jQuery", "Bootstrap"],
    link: "#",
    featured: true
  },
  {
    title: "CV Shots",
    description: "Innovative video resume platform connecting job seekers and employers. Features video introductions and advanced search capabilities for faster recruitment.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "SASS", "JavaScript", "jQuery", "Bootstrap"],
    link: "#",
    featured: false
  },
  {
    title: "Print Persona",
    description: "E-commerce platform for custom print products built on Magento 2. Features online design tools and comprehensive product customization options.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    tech: ["Magento 2", "HTML5", "CSS3", "JavaScript", "jQuery"],
    link: "https://www.printpersona.com",
    featured: false
  },
  {
    title: "Egyptian Hotels Association (EHA)",
    description: "An Egyptian Organization for Rating the hotels and giving the Regulation and Standards ",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "JSON", "Ajax"],
    link: "http://www.egyptianhotels.org/",
    featured: false
  },
  {
    title: "Al-nada Mills",
    description: "Corporate website showcasing company products, categories, portfolio, and timeline with interactive features.",
    image: "https://images.unsplash.com/photo-1518122043280-ffd6c8f273d1?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "JSON", "Ajax"],
    link: "http://alnadamills.com",
    featured: true
  },
  {
    title: "Al-monairy Corn",
    description: "Company website featuring product catalogs, portfolio showcase, and interactive timeline.",
    image: "https://images.unsplash.com/photo-1595974482597-4b8dc398bed8?q=80&w=2073&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://olivelandeg.com",
    featured: true
  },
  {
    title: "Elmonairy Group",
    description: "Corporate website with services showcase, portfolio display, and company timeline integration.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "https://almonairycorn.com",
    featured: false
  },
  {
    title: "Tekegy",
    description: "Company portfolio website featuring services, projects, and interactive timeline.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://tekegy.com",
    featured: false
  },
  {
    title: "B-HUB",
    description: "Business hub platform showcasing services, portfolio, and company milestones.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://theb-hub.com",
    featured: false
  },
  {
    title: "Olamarine",
    description: "E-commerce website for fishing equipment with locations in Cairo & Hurghada.",
    image: "https://images.unsplash.com/photo-1484507175567-8f1b69979472?q=80&w=2071&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://olamarine.com",
    featured: false
  },
  {
    title: "Mi-asset",
    description: "RTL website showcasing company services, portfolio, and timeline with Arabic support.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://mi-asset.com",
    featured: false
  },
  {
    title: "Oper8ly",
    description: "RTL corporate website with service offerings, portfolio showcase, and company history.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://oper8ly.com",
    featured: false
  },
  {
    title: "Facilities",
    description: "RTL service company website with portfolio and interactive features.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://facilities-eg.com",
    featured: false
  },
  {
    title: "AGC Group",
    description: "Corporate website showcasing company services, portfolio, and package pricing with interactive maps and contact features.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "SASS", "JavaScript", "jQuery", "Bootstrap"],
    link: "https://agc-groups.com",
    featured: false
  },
  {
    title: "El Ektsad welbnok",
    description: "RTL news website with comprehensive content management and timeline features.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://elektsadwelbnooknews.com",
    featured: false
  },
  {
    title: "Bosla News",
    description: "RTL news platform featuring services, portfolio, and company timeline integration.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery"],
    link: "http://alboslanews.com",
    featured: false
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <div className="absolute inset-0 z-10 bg-black/80 transition-opacity opacity-0 group-hover:opacity-90" />
      
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="bg-primary/20 text-primary-foreground text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.link} 
            className="text-white hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live project"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground line-clamp-2 mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <h2 className="text-3xl font-bold mb-4 sm:mb-0">
          <span className="text-primary mr-2">04.</span>
          Featured Projects
        </h2>
        
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={cn(
              "px-4 py-2 rounded-full border transition-all duration-300",
              filter === 'all'
                ? "border-primary text-primary bg-primary/5" 
                : "border-muted text-muted-foreground hover:border-primary hover:text-primary"
            )}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={cn(
              "px-4 py-2 rounded-full border transition-all duration-300",
              filter === 'featured'
                ? "border-primary text-primary bg-primary/5" 
                : "border-muted text-muted-foreground hover:border-primary hover:text-primary"
            )}
          >
            Featured
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;