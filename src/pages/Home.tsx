
import React from 'react';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/About/AboutSection';
import SkillsSection from '../components/Skills/SkillsSection';
import ExperienceSection from '../components/Experience/ExperienceSection';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ContactSection from '../components/Contact/ContactSection';
import CertificateSection from '@/components/Certificates/Certificates';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <CertificateSection/>
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
