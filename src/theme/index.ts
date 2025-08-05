export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Enhanced theme colors with better contrast and accessibility
export const themeColors = {
  light: {
    // Background colors
    'bg-primary': '#ffffff',
    'bg-secondary': '#f8fafc',
    'bg-tertiary': '#f1f5f9',
    'bg-sidebar': '#1e293b',
    'bg-card': '#ffffff',
    'bg-overlay': 'rgba(0, 0, 0, 0.5)',
    
    // Text colors
    'text-primary': '#0f172a',
    'text-secondary': '#475569',
    'text-tertiary': '#64748b',
    'text-inverse': '#ffffff',
    'text-muted': '#94a3b8',
    
    // Border colors
    'border-primary': '#e2e8f0',
    'border-secondary': '#cbd5e1',
    'border-focus': '#2563eb',
    
    // Enhanced Accent colors - More vibrant and accessible
    'accent-primary': '#2563eb',
    'accent-primary-hover': '#1d4ed8',
    'accent-secondary': '#7c3aed',
    'accent-success': '#059669',
    'accent-warning': '#d97706',
    'accent-error': '#dc2626',
    'accent-info': '#0891b2',
    
    // Status colors with better contrast
    'status-pending': '#f59e0b',
    'status-processing': '#3b82f6',
    'status-shipped': '#8b5cf6',
    'status-delivered': '#10b981',
    'status-cancelled': '#ef4444',
    
    // Shadow system
    'shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  dark: {
    // Background colors
    'bg-primary': '#0f172a',
    'bg-secondary': '#1e293b',
    'bg-tertiary': '#334155',
    'bg-sidebar': '#020617',
    'bg-card': '#1e293b',
    'bg-overlay': 'rgba(0, 0, 0, 0.7)',
    
    // Text colors
    'text-primary': '#f8fafc',
    'text-secondary': '#cbd5e1',
    'text-tertiary': '#94a3b8',
    'text-inverse': '#0f172a',
    'text-muted': '#64748b',
    
    // Border colors
    'border-primary': '#334155',
    'border-secondary': '#475569',
    'border-focus': '#60a5fa',
    
    // Enhanced Dark Accent colors
    'accent-primary': '#3b82f6',
    'accent-primary-hover': '#60a5fa',
    'accent-secondary': '#8b5cf6',
    'accent-success': '#10b981',
    'accent-warning': '#f59e0b',
    'accent-error': '#ef4444',
    'accent-info': '#06b6d4',
    
    // Dark Status colors
    'status-pending': '#fbbf24',
    'status-processing': '#60a5fa',
    'status-shipped': '#a78bfa',
    'status-delivered': '#34d399',
    'status-cancelled': '#f87171',
    
    // Dark Shadows
    'shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
    'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
    'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
  },
};

// Theme utilities
export const getThemeColors = (theme: Theme) => {
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return themeColors[systemTheme];
  }
  return themeColors[theme];
};

// Apply theme to document with enhanced functionality
export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove('light', 'dark');
  
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
  
  // Apply CSS custom properties
  const colors = getThemeColors(theme);
  
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
  
  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    metaThemeColor.setAttribute('content', isDark ? '#0f172a' : '#ffffff');
  }
};

// Get current theme with fallback
export const getCurrentTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme;
  return savedTheme && ['light', 'dark', 'system'].includes(savedTheme) ? savedTheme : 'system';
};

// Set theme with validation
export const setTheme = (theme: Theme) => {
  if (!['light', 'dark', 'system'].includes(theme)) {
    console.warn(`Invalid theme: ${theme}. Using 'system' as fallback.`);
    theme = 'system';
  }
  
  localStorage.setItem('theme', theme);
  applyTheme(theme);
  
  // Dispatch custom event for theme change
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
};

// Initialize theme with enhanced setup
export const initializeTheme = () => {
  const theme = getCurrentTheme();
  applyTheme(theme);
  
  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleSystemThemeChange = () => {
    if (getCurrentTheme() === 'system') {
      applyTheme('system');
    }
  };
  
  mediaQuery.addEventListener('change', handleSystemThemeChange);
  
  // Cleanup function
  return () => {
    mediaQuery.removeEventListener('change', handleSystemThemeChange);
  };
};

// Theme utilities for components
export const useTheme = () => {
  const getTheme = () => getCurrentTheme();
  const setThemeHandler = (theme: Theme) => setTheme(theme);
  
  return {
    theme: getTheme(),
    setTheme: setThemeHandler,
    isDark: () => {
      const currentTheme = getTheme();
      return currentTheme === 'dark' || (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    },
    isLight: () => {
      const currentTheme = getTheme();
      return currentTheme === 'light' || (currentTheme === 'system' && !window.matchMedia('(prefers-color-scheme: dark)').matches);
    },
  };
};

// Export theme constants for use in components
export const THEME_OPTIONS = [
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'dark', label: 'Dark', icon: '🌙' },
  { value: 'system', label: 'System', icon: '💻' },
] as const;