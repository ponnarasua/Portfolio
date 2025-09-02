import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
  // Memoize scroll functions to prevent recreation on every render
  const scrollToNext = React.useCallback(() => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  const scrollTowork = React.useCallback(() => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Memoize stats data to prevent recreation on every render
  const statsData = React.useMemo(() => [
    { number: '10+', label: 'Projects Completed' },
    { number: '0.6+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ], []);

  return (
    <section id="home" className="min-h-screen pt-20 relative flex items-center justify-center overflow-hidden section-container">
      {/* Background gradient */}
      <img 
        src="/hero-background.jpg" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        loading="eager"
        decoding="async"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-theme-primary">Ponnarasu</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating beautiful, functional, and user-friendly digital experiences
            with modern technologies and innovative solutions.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-theme-primary hover:bg-theme-primary/90 text-white px-8 py-4 text-lg transition-colors group"
              onClick={scrollTowork}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-theme-primary text-theme-primary hover:bg-theme-primary/10 px-8 py-4 text-lg transition-colors group"
              onClick={() => window.open('https://shorturl.at/lRM9H', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-lg p-6 hover:scale-105 transition-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-theme-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator - simplified */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div
            className="text-theme-primary cursor-pointer animate-bounce"
            onClick={scrollToNext}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
