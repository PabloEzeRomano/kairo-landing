'use client';

import { createContext, useContext, ReactNode } from 'react';
import {
  getThemeConfig,
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
  // Calculate theme values fresh each time to ensure they're current
  const themeValues = getThemeConfig();

  return (
    <ThemeContext.Provider value={themeValues}>
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
