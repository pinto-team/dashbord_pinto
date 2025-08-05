/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cursor-inspired color palette
        cursor: {
          primary: '#6366f1',
          'primary-hover': '#4f46e5',
          'primary-light': '#818cf8',
          'primary-dark': '#3730a3',
          bg: {
            primary: '#0a0a0a',
            secondary: '#1a1a1a',
            tertiary: '#2a2a2a',
            card: '#1e1e1e',
            sidebar: '#0f0f0f',
          },
          text: {
            primary: '#ffffff',
            secondary: '#a1a1aa',
            tertiary: '#71717a',
            muted: '#52525b',
            inverse: '#0a0a0a',
          },
          border: {
            primary: '#27272a',
            secondary: '#3f3f46',
            focus: '#6366f1',
          },
          accent: {
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#06b6d4',
          },
          selection: 'rgba(99, 102, 241, 0.2)',
          highlight: 'rgba(99, 102, 241, 0.1)',
        },
      },
      backgroundImage: {
        'cursor-gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'cursor-gradient-secondary': 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)',
        'cursor-gradient-card': 'linear-gradient(135deg, #1e1e1e 0%, #262626 100%)',
        'cursor-gradient-sidebar': 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)',
      },
      fontFamily: {
        'cursor': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'cursor-mono': ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        'cursor-xs': '0.75rem',
        'cursor-sm': '0.875rem',
        'cursor-base': '1rem',
        'cursor-lg': '1.125rem',
        'cursor-xl': '1.25rem',
        'cursor-2xl': '1.5rem',
        'cursor-3xl': '1.875rem',
        'cursor-4xl': '2.25rem',
      },
      fontWeight: {
        'cursor-light': '300',
        'cursor-normal': '400',
        'cursor-medium': '500',
        'cursor-semibold': '600',
        'cursor-bold': '700',
      },
      spacing: {
        'cursor-1': '0.25rem',
        'cursor-2': '0.5rem',
        'cursor-3': '0.75rem',
        'cursor-4': '1rem',
        'cursor-5': '1.25rem',
        'cursor-6': '1.5rem',
        'cursor-8': '2rem',
        'cursor-10': '2.5rem',
        'cursor-12': '3rem',
        'cursor-16': '4rem',
        'cursor-20': '5rem',
        'cursor-24': '6rem',
      },
      borderRadius: {
        'cursor-sm': '0.25rem',
        'cursor-md': '0.375rem',
        'cursor-lg': '0.5rem',
        'cursor-xl': '0.75rem',
        'cursor-2xl': '1rem',
      },
      boxShadow: {
        'cursor-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'cursor-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cursor-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'cursor-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'cursor-glow': '0 0 20px rgba(99, 102, 241, 0.3)',
      },
      transitionDuration: {
        'cursor-fast': '150ms',
        'cursor-normal': '250ms',
        'cursor-slow': '350ms',
      },
      transitionTimingFunction: {
        'cursor-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'cursor-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      screens: {
        'cursor-sm': '640px',
        'cursor-md': '768px',
        'cursor-lg': '1024px',
        'cursor-xl': '1280px',
        'cursor-2xl': '1536px',
      },
    },
  },
  plugins: [],
}