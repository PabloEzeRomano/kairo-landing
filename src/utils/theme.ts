import { TimeOfDay } from '@/types';

export const getTimeOfDay = (): TimeOfDay => {
  const hour = new Date().getHours();
  console.log('hour', hour);

  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
};

export const getTimeBasedBackground = (timeOfDay: TimeOfDay) => {
  switch (timeOfDay) {
    case 'morning':
      return 'from-amber-100 via-orange-100 to-yellow-50';
    case 'afternoon':
      return 'from-sky-100 via-indigo-100 to-purple-200';
    case 'evening':
      return 'from-orange-200 via-rose-100 to-pink-100';
    case 'night':
      return 'from-slate-800 via-slate-700 to-slate-600';
    default:
      return 'from-sky-100 via-indigo-100 to-purple-200';
  }
};

export const getTimeBasedAccent = (timeOfDay: TimeOfDay) => {
  switch (timeOfDay) {
    case 'morning':
      return 'from-amber-500 to-orange-500';
    case 'afternoon':
      return 'from-sky-500 to-indigo-500';
    case 'evening':
      return 'from-orange-500 to-rose-500';
    case 'night':
      return 'from-blue-400 to-blue-400';
    default:
      return 'from-sky-500 to-indigo-500';
  }
};

export const getTitleColorBasedOnTimeOfDay = (timeOfDay: TimeOfDay) => {
  switch (timeOfDay) {
    case 'morning':
      return 'text-amber-500';
    case 'afternoon':
      return 'text-indigo-500';
    case 'evening':
      return 'text-rose-500';
    case 'night':
      return 'text-blue-400';
    default:
      return 'text-sky-500';
  }
};
export const getDescriptionColorBasedOnTimeOfDay = (timeOfDay: TimeOfDay) => {
  switch (timeOfDay) {
    case 'morning':
      return 'text-amber-700';
    case 'afternoon':
      return 'text-indigo-700';
    case 'evening':
      return 'text-rose-700';
    case 'night':
      return 'text-blue-500';
    default:
      return 'text-sky-500';
  }
};

export const getBoxShadowRGBA = (
  timeOfDay: TimeOfDay,
  opacity: number = 0.3
) => {
  switch (timeOfDay) {
    case 'morning':
      return `rgba(245, 158, 11, ${opacity})`;
    case 'afternoon':
      return `rgba(99, 102, 241, ${opacity})`;
    case 'evening':
      return `rgba(244, 63, 94, ${opacity})`;
    case 'night':
      return `rgba(107, 114, 128, ${opacity})`;
    default:
      return `rgba(14, 165, 233, ${opacity})`;
  }
};
