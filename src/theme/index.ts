export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Theme colors using CSS custom properties
export const themeColors = {
  light: {
    // Background colors
    'bg-primary': '#ffffff',
    'bg-secondary': '#f8fafc',
    'bg-tertiary': '#f1f5f9',
    'bg-sidebar': '#1e293b',
    
    // Text colors
    'text-primary': '#0f172a',
    'text-secondary': '#475569',
    'text-tertiary': '#64748b',
    'text-inverse': '#ffffff',
    
    // Border colors
    'border-primary': '#e2e8f0',
    'border-secondary': '#cbd5e1',
    
    // Accent colors
    'accent-primary': '#3b82f6',
    'accent-secondary': '#1d4ed8',
    'accent-success': '#10b981',
    'accent-warning': '#f59e0b',
    'accent-error': '#ef4444',
    
    // Status colors
    'status-pending': '#fbbf24',
    'status-processing': '#3b82f6',
    'status-shipped': '#8b5cf6',
    'status-delivered': '#10b981',
    'status-cancelled': '#ef4444',
  },
  dark: {
    // Background colors
    'bg-primary': '#0f172a',
    'bg-secondary': '#1e293b',
    'bg-tertiary': '#334155',
    'bg-sidebar': '#020617',
    
    // Text colors
    'text-primary': '#f8fafc',
    'text-secondary': '#cbd5e1',
    'text-tertiary': '#94a3b8',
    'text-inverse': '#0f172a',
    
    // Border colors
    'border-primary': '#334155',
    'border-secondary': '#475569',
    
    // Accent colors
    'accent-primary': '#60a5fa',
    'accent-secondary': '#3b82f6',
    'accent-success': '#34d399',
    'accent-warning': '#fbbf24',
    'accent-error': '#f87171',
    
    // Status colors
    'status-pending': '#fbbf24',
    'status-processing': '#60a5fa',
    'status-shipped': '#a78bfa',
    'status-delivered': '#34d399',
    'status-cancelled': '#f87171',
  },
};

// Apply theme to document
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
  const colors = theme === 'system' 
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? themeColors.dark : themeColors.light)
    : themeColors[theme];
  
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};

// Get current theme
export const getCurrentTheme = (): Theme => {
  return (localStorage.getItem('theme') as Theme) || 'system';
};

// Set theme
export const setTheme = (theme: Theme) => {
  localStorage.setItem('theme', theme);
  applyTheme(theme);
};

// Initialize theme
export const initializeTheme = () => {
  const theme = getCurrentTheme();
  applyTheme(theme);
  
  // Listen for system theme changes
  if (theme === 'system') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      applyTheme('system');
    });
  }
};