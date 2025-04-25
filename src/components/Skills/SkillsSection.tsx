import React from 'react';
import PageTransition from '../Layout/PageTransition';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Server, 
  Wrench, 
  Layers, 
  Wind,
  LayoutGrid,
  Layout,
  Component,
  Link,
  Network,
  GitBranch,
  ListChecks,
  Cloud,
  PenTool,
  Box,
  Atom,
  Figma as FigmaIcon,
  TestTube
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'HTML & CSS', level: 98, category: 'frontend', icon: <Code2 className="w-5 h-5" /> },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: <Code2 className="w-5 h-5" /> },
  { name: 'React', level: 80, category: 'frontend', icon: <Atom  className="w-5 h-5" color="#61DAFB" /> },
  { name: 'Redux', level: 85, category: 'frontend', icon: <Layers className="w-5 h-5" /> },
  { name: 'TypeScript', level: 75, category: 'frontend', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Next.js', level: 80, category: 'frontend', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Angular', level: 65, category: 'frontend', icon: <Code2 className="w-5 h-5" /> },
  { name: 'TailwindCSS', level: 85, category: 'frontend', icon: <Wind className="w-5 h-5" /> },
  { name: 'Bootstrap', level: 95, category: 'frontend', icon: <LayoutGrid className="w-5 h-5" /> },
  { name: 'Material UI', level: 75, category: 'frontend', icon: <Layout className="w-5 h-5" /> },
  { name: 'Shadcn/ui', level: 70, category: 'frontend', icon: <Component className="w-5 h-5" /> },
  { name: 'Node.js', level: 50, category: 'backend', icon: <Server className="w-5 h-5" /> },
  { name: 'php', level: 40, category: 'backend', icon: <Code2 className="w-5 h-5" /> },
  { name: 'RESTful APIs', level: 80, category: 'backend', icon: <Link className="w-5 h-5" /> },
  { name: 'GraphQL', level: 60, category: 'backend', icon: <Network className="w-5 h-5" /> },
  { name: 'Git', level: 85, category: 'tools', icon: <GitBranch className="w-5 h-5" /> },
  { name: 'Jira', level: 85, category: 'tools', icon: <ListChecks className="w-5 h-5" /> },
  { name: 'Microsoft Azure', level: 85, category: 'tools', icon: <Cloud className="w-5 h-5" /> },
  { name: 'Adobe Suits', level: 90, category: 'tools', icon: <PenTool className="w-5 h-5" /> },
  { name: 'Docker', level: 65, category: 'tools', icon: <Box className="w-5 h-5" /> },
  { name: 'Figma', level: 75, category: 'tools', icon: <FigmaIcon className="w-5 h-5" /> },
  { name: 'Jest', level: 75, category: 'tools', icon: <TestTube className="w-5 h-5" /> },
  { name: 'Jasmine', level: 70, category: 'tools', icon: <TestTube className="w-5 h-5" /> },
];

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'frontend':
      return <Code2 className="w-5 h-5 text-blue-500" />;
    case 'backend':
      return <Server className="w-5 h-5 text-green-500" />;
    case 'tools':
      return <Wrench className="w-5 h-5 text-purple-500" />;
    default:
      return null;
  }
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/40">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {skill.icon}
            <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {skill.level}%
          </span>
        </div>
        <Progress 
          value={skill.level} 
          className="h-2 bg-secondary"
        />
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState<'frontend' | 'backend' | 'tools' | 'all'>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend', icon: <Code2 className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <PageTransition className="section-container py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-8 text-4xl font-bold">
          <span className="text-highlight mr-2">02.</span>
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300",
                activeCategory === id 
                  ? "border-highlight text-highlight bg-highlight/5" 
                  : "border-slate/30 text-slate hover:border-highlight hover:text-highlight"
              )}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsSection;
