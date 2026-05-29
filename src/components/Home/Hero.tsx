
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import TypewriterEffect from '../ui/type-writer-effect';
import bgImage from '../../../src/assets/images/bg.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Hero = () => {
  const bgImg = new URL('../../../src/assets/images/bg.jpeg', import.meta.url).href;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark"
      variants={containerVariants}
      initial="hidden"
      animate={mounted ? 'visible' : 'hidden'}
    >
      <div className="absolute inset-0 opacity-5 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
      
      <div className="relative z-10 flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-center w-full">
          <div className="lg:col-span-4 space-y-6">
            <motion.p variants={itemVariants} className="text-highlight font-mono mb-4">
              Hi, my name is
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-slate-light bg-clip-text text-transparent mb-4">
              Mohamed Hemdan
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate mb-8">
              <TypewriterEffect 
                words={[
                  'Front-End Developer',
                  'UI Developer',
                  'UI/UX Enthusiast',
                  'Problem Solver',
                  'Web Developer'
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                delay={1500}
              />
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-slate max-w-2xl text-xl leading-relaxed mb-12">
              Driven by innovation and design excellence, I’m always eager to contribute to forward-thinking teams and build web solutions that users love.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/projects" 
                className="inline-flex items-center px-8 py-4 text-lg rounded-md bg-highlight text-navy hover:bg-highlight/90 transition-colors duration-300 font-medium"
              >
                Check out my work
              </Link>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-2 transition-all duration-300 m-w-lg">
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
