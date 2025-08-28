import React from 'react';
import { LightBackground } from '../components/LightBackground';
import { Particles } from '../components/Particles';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Conditional Background Effects */}
        <LightBackground />

        {/* Reduced particles for better performance */}
        <Particles />
        
        <Navbar />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 py-8 text-center border-t border-theme-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground">
              © 2025. Built with React, TypeScript, and Three.js.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
