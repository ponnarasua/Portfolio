import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import CodingProfilesSection from '../components/sections/CodingProfilesSection';
import ArticlesSection from '../components/sections/ArticlesSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        <ParticleBackground />
        <Navbar />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <CodingProfilesSection />
          <ArticlesSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 py-8 text-center border-t border-theme-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground">
              © 2024 Alex Developer. Built with React, TypeScript, and Three.js.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
