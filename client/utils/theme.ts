// Theme utility functions
export const getTextColor = (isDark: boolean, variant: 'primary' | 'secondary' | 'muted' = 'primary') => {
  if (variant === 'primary') {
    return isDark ? 'text-white' : 'text-gray-900';
  }
  if (variant === 'secondary') {
    return isDark ? 'text-white/80' : 'text-gray-700';
  }
  if (variant === 'muted') {
    return isDark ? 'text-white/60' : 'text-gray-600';
  }
  return isDark ? 'text-white' : 'text-gray-900';
};

export const getBackgroundColor = (isDark: boolean) => {
  return isDark ? 'bg-black' : 'bg-gradient-to-br from-white via-gray-50 to-slate-100';
};
