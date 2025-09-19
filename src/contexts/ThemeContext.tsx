'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import {
  getThemeConfig,
  timeBasedTheme,
} from '@/utils/theme';
import { TimeOfDay } from '@/types';

interface ThemeContextType {
  timeOfDay: TimeOfDay;
  accentGradient: string;
  titleColor: string;
  backgroundGradient: string;
  descriptionColor: string;
  getBoxShadowRGBA: (opacity?: number) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Default to afternoon theme to avoid hydration mismatch
  const [themeValues, setThemeValues] = useState(timeBasedTheme.afternoon);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only calculate theme on client side to avoid SSR mismatch
    setMounted(true);
    const updateTheme = () => {
      const currentTheme = getThemeConfig();
      setThemeValues(currentTheme);
    };

    updateTheme();

    // Update theme every minute to catch time changes
    const interval = setInterval(updateTheme, 3600000);

    return () => clearInterval(interval);
  }, []);

  // During SSR and initial hydration, use default theme
  const currentTheme = mounted ? themeValues : timeBasedTheme.afternoon;

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
