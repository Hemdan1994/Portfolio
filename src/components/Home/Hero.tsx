
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import TypewriterEffect from '../ui/type-writer-effect';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark">
      <div className="absolute inset-0 bg-[url('./../../../src/assets/images/bg.jpeg')] opacity-5 bg-fixed bg-cover bg-center" />
      
      <div className="relative z-10 flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-center w-full">
          <div className="lg:col-span-4 space-y-6">
            <p className={cn(
              "text-highlight font-mono mb-4 transition-all duration-300 delay-100",
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}>
              Hi, my name is
            </p>
            
            <h1 className={cn(
              "text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-slate-light bg-clip-text text-transparent mb-4 transition-all duration-300 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}>
           Mohamed Hemdan
            </h1>
            
            <h2 className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate mb-8 transition-all duration-300 delay-300",
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}>
              <TypewriterEffect 
                words={[
                  "Front-End Developer",
                  "UI Developer",
                  "UI/UX Enthusiast",
                  "Problem Solver",
                  "Web Developer"
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                delay={1500}
              />
            </h2>
            
            <p className={cn(
              "text-slate max-w-2xl text-xl leading-relaxed mb-12 transition-all duration-300 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}>
            Driven by innovation and design excellence, I’m always eager to contribute to forward-thinking teams and build web solutions that users love.
            </p>
            
            <div className={cn(
              "transition-all duration-300 delay-500",
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}>
              <Link 
                to="/projects" 
                className="inline-flex items-center px-8 py-4 text-lg rounded-md bg-highlight text-navy hover:bg-highlight/90 transition-colors duration-300 font-medium"
              >
                Check out my work
              </Link>
            </div>
          </div>

          <div className={cn(
            " lg:col-span-2  transition-all duration-300 delay-600 m-w-lg",
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}>
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
