/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'iransans': ['IRANSansX', 'system-ui', 'sans-serif'],
        'iransansx': ['IRANSansX', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Theme colors using CSS custom properties
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-sidebar': 'var(--bg-sidebar)',
        
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-inverse': 'var(--text-inverse)',
        
        'border-primary': 'var(--border-primary)',
        'border-secondary': 'var(--border-secondary)',
        
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-success': 'var(--accent-success)',
        'accent-warning': 'var(--accent-warning)',
        'accent-error': 'var(--accent-error)',
        
        'status-pending': 'var(--status-pending)',
        'status-processing': 'var(--status-processing)',
        'status-shipped': 'var(--status-shipped)',
        'status-delivered': 'var(--status-delivered)',
        'status-cancelled': 'var(--status-cancelled)',
      },
    },
  },
  plugins: [],
}