import { TimeOfDay } from '@/types';

export type ThemeConfig = {
  backgroundGradient: string;
  accentGradient: string;
  titleColor: string;
  descriptionColor: string;
  getBoxShadowRGBA: (opacity?: number) => string;
  timeOfDay: TimeOfDay;
};

export const getThemeConfig = (): ThemeConfig => {
  const hour = new Date().getHours();
  console.log(hour);

  if (hour >= 5 && hour < 12) return timeBasedTheme.morning;
  if (hour >= 12 && hour < 17) return timeBasedTheme.afternoon;
  if (hour >= 17 && hour < 21) return timeBasedTheme.evening;
  return timeBasedTheme.night;
};

export const timeBasedTheme: Record<TimeOfDay, ThemeConfig> = {
  morning: {
    backgroundGradient: 'from-amber-100 via-orange-100 to-yellow-50',
    accentGradient: 'from-amber-500 to-orange-500',
    titleColor: 'text-amber-500',
    descriptionColor: 'text-amber-700',
    getBoxShadowRGBA: (opacity = 0.3) => `rgba(245, 158, 11, ${opacity})`,
    timeOfDay: 'morning',
  },
  afternoon: {
    backgroundGradient: 'from-sky-100 via-indigo-100 to-purple-200',
    accentGradient: 'from-sky-500 to-indigo-500',
    titleColor: 'text-indigo-500',
    descriptionColor: 'text-indigo-700',
    getBoxShadowRGBA: (opacity = 0.3) => `rgba(99, 102, 241, ${opacity})`,
    timeOfDay: 'afternoon',
  },
  evening: {
    backgroundGradient: 'from-orange-200 via-rose-100 to-pink-100',
    accentGradient: 'from-orange-500 to-rose-500',
    titleColor: 'text-rose-500',
    descriptionColor: 'text-rose-700',
    getBoxShadowRGBA: (opacity = 0.3) => `rgba(244, 63, 94, ${opacity})`,
    timeOfDay: 'evening',
  },
  night: {
    backgroundGradient: 'from-slate-800 via-slate-700 to-slate-600',
    accentGradient: 'from-blue-400 to-blue-400',
    titleColor: 'text-blue-400',
    descriptionColor: 'text-blue-500',
    getBoxShadowRGBA: (opacity = 0.3) => `rgba(107, 114, 128, ${opacity})`,
    timeOfDay: 'night',
  },
};
