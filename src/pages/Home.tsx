
import React from 'react';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/About/AboutSection';
import SkillsSection from '../components/Skills/SkillsSection';
import ExperienceSection from '../components/Experience/ExperienceSection';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ContactSection from '../components/Contact/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
