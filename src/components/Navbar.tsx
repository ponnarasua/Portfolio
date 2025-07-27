import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';
import { useTheme, ColorTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { colorTheme, darkMode, setColorTheme, toggleDarkMode } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const colorThemes: { name: string; value: ColorTheme; color: string }[] = [
    { name: 'Red', value: 'red', color: '#ef4444' },
    { name: 'Green', value: 'green', color: '#22c55e' },
    { name: 'Blue', value: 'blue', color: '#3b82f6' },
    { name: 'Violet', value: 'violet', color: '#8b5cf6' },
    { name: 'Pink', value: 'pink', color: '#ec4899' },
    { name: 'Orange', value: 'orange', color: '#f97316' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold text-theme-primary">Ponnarasu's Portfolio</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link px-3 py-2 text-sm font-medium text-foreground hover:text-theme-primary transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="glow-hover"
            >
              {darkMode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="glow-hover"
              >
                <Palette className="h-4 w-4" />
              </Button>
              
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-48 glass rounded-lg shadow-lg p-2"
                  >
                    <div className="grid grid-cols-3 gap-2">
                      {colorThemes.map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => {
                            setColorTheme(theme.value);
                            setShowThemeMenu(false);
                          }}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            colorTheme === theme.value
                              ? 'border-foreground scale-110'
                              : 'border-transparent hover:scale-105'
                          }`}
                          style={{ backgroundColor: theme.color }}
                          title={theme.name}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="glow-hover"
            >
              {darkMode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-theme-primary transition-colors w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Theme Selector */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Color Theme</p>
                <div className="grid grid-cols-6 gap-2">
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() => setColorTheme(theme.value)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        colorTheme === theme.value
                          ? 'border-foreground scale-110'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: theme.color }}
                      title={theme.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;