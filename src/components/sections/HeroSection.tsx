import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollTowork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="min-h-screen pt-20 relative flex items-center justify-center overflow-hidden overflow-x-hidden">
      {/* Background gradient */}
      <img src="/hero-background.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-theme-primary">Ponnarasu A</span>
            </h1>
            
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground"
            >
              Full Stack Developer
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Creating beautiful, functional, and user-friendly digital experiences
            with modern technologies and innovative solutions.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-theme-primary hover:bg-theme-primary/90 text-white px-8 py-4 text-lg glow-hover animate-glow-pulse group"
              onClick={() => scrollTowork()}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-theme-primary text-theme-primary hover:bg-theme-primary/10 px-8 py-4 text-lg glow-hover group"
              onClick={() => window.open('https://shorturl.at/lRM9H', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '0.6+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                className="glass rounded-lg p-6 hover:scale-105 transition-transform glow-hover"
              >
                <div className="text-3xl md:text-4xl font-bold text-theme-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -bottom-40 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-theme-primary cursor-pointer"
            onClick={scrollToNext}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;