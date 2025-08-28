import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';

export type ColorTheme = 'red' | 'green' | 'blue' | 'violet' | 'pink' | 'orange';
export type DarkMode = 'light' | 'dark';

interface ThemeContextType {
  colorTheme: ColorTheme;
  darkMode: DarkMode;
  setColorTheme: (theme: ColorTheme) => void;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('blue');
  const [darkMode, setDarkMode] = useState<DarkMode>('dark');

  useEffect(() => {
    // Load theme from localStorage
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme;
    const savedDarkMode = localStorage.getItem('darkMode') as DarkMode;
    
    if (savedColorTheme) {
      setColorThemeState(savedColorTheme);
    }
    
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  useEffect(() => {
    // Apply themes to document
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-violet', 'theme-pink', 'theme-orange');
    root.classList.remove('dark');
    
    // Add current color theme
    root.classList.add(`theme-${colorTheme}`);
    
    // Add dark mode if enabled
    if (darkMode === 'dark') {
      root.classList.add('dark');
    }
  }, [colorTheme, darkMode]);

  const setColorTheme = useCallback((theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem('colorTheme', theme);
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newMode = darkMode === 'light' ? 'dark' : 'light';
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  }, [darkMode]);

  const value = useMemo(() => ({
    colorTheme,
    darkMode,
    setColorTheme,
    toggleDarkMode
  }), [colorTheme, darkMode, setColorTheme, toggleDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};