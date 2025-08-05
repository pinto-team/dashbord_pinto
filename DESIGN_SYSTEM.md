# Pars Wholesale Admin Dashboard - Design System

## Overview

This document outlines the design system for the Pars Wholesale Admin Dashboard, a modern React/TypeScript application with comprehensive theming, internationalization, and accessibility features.

## Architecture

### Technology Stack
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Internationalization**: i18next with English/Farsi support
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Font**: IRANSansX (Persian-optimized font family)

### Project Structure
```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (App, Theme)
├── i18n/              # Internationalization
├── modals/            # Modal components
├── pages/             # Page components (tabs)
├── theme/             # Theme system
├── utils/             # Utility functions
└── assets/            # Static assets
```

## Design Tokens

### Color System

#### Light Theme
```css
/* Background Colors */
--bg-primary: #ffffff        /* Main background */
--bg-secondary: #f8fafc      /* Secondary background */
--bg-tertiary: #f1f5f9       /* Tertiary background */
--bg-sidebar: #1e293b        /* Sidebar background */
--bg-card: #ffffff           /* Card background */
--bg-overlay: rgba(0,0,0,0.5) /* Overlay background */

/* Text Colors */
--text-primary: #0f172a      /* Primary text */
--text-secondary: #475569     /* Secondary text */
--text-tertiary: #64748b      /* Tertiary text */
--text-inverse: #ffffff       /* Inverse text */
--text-muted: #94a3b8        /* Muted text */

/* Border Colors */
--border-primary: #e2e8f0    /* Primary borders */
--border-secondary: #cbd5e1   /* Secondary borders */
--border-focus: #2563eb       /* Focus state borders */

/* Accent Colors */
--accent-primary: #2563eb     /* Primary accent */
--accent-primary-hover: #1d4ed8 /* Primary hover */
--accent-secondary: #7c3aed   /* Secondary accent */
--accent-success: #059669      /* Success state */
--accent-warning: #d97706      /* Warning state */
--accent-error: #dc2626        /* Error state */
--accent-info: #0891b2         /* Info state */
```

#### Dark Theme
```css
/* Background Colors */
--bg-primary: #0f172a        /* Main background */
--bg-secondary: #1e293b      /* Secondary background */
--bg-tertiary: #334155       /* Tertiary background */
--bg-sidebar: #020617        /* Sidebar background */
--bg-card: #1e293b           /* Card background */
--bg-overlay: rgba(0,0,0,0.7) /* Overlay background */

/* Text Colors */
--text-primary: #f8fafc      /* Primary text */
--text-secondary: #cbd5e1    /* Secondary text */
--text-tertiary: #94a3b8     /* Tertiary text */
--text-inverse: #0f172a      /* Inverse text */
--text-muted: #64748b        /* Muted text */

/* Accent Colors */
--accent-primary: #3b82f6    /* Primary accent */
--accent-primary-hover: #60a5fa /* Primary hover */
--accent-secondary: #8b5cf6  /* Secondary accent */
--accent-success: #10b981    /* Success state */
--accent-warning: #f59e0b    /* Warning state */
--accent-error: #ef4444      /* Error state */
--accent-info: #06b6d4       /* Info state */
```

### Typography

#### Font Family
- **Primary**: IRANSansX (Persian-optimized)
- **Fallback**: system-ui, Avenir, Helvetica, Arial, sans-serif

#### Font Sizes
```css
text-xs: 0.75rem (12px)
text-sm: 0.875rem (14px)
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)
text-2xl: 1.5rem (24px)
text-3xl: 1.875rem (30px)
text-4xl: 2.25rem (36px)
text-5xl: 3rem (48px)
text-6xl: 3.75rem (60px)
```

#### Font Weights
- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 800

### Spacing System
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
```

### Border Radius
```css
--radius-sm: 0.25rem (4px)
--radius-md: 0.375rem (6px)
--radius-lg: 0.5rem (8px)
--radius-xl: 0.75rem (12px)
--radius-2xl: 1rem (16px)
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
```

### Transitions
```css
--transition-fast: 150ms ease-in-out
--transition-normal: 250ms ease-in-out
--transition-slow: 350ms ease-in-out
```

## Component Guidelines

### Button System
```tsx
// Primary Button
<button className="btn btn-primary">Primary Action</button>

// Secondary Button
<button className="btn btn-secondary">Secondary Action</button>

// Success Button
<button className="btn btn-success">Success Action</button>

// Warning Button
<button className="btn btn-warning">Warning Action</button>

// Error Button
<button className="btn btn-error">Error Action</button>
```

### Card System
```tsx
<div className="card p-6">
  <h3 className="text-lg font-semibold text-text-primary">Card Title</h3>
  <p className="text-text-secondary">Card content</p>
</div>
```

### Input System
```tsx
<input 
  type="text" 
  className="input" 
  placeholder="Enter text..."
/>
```

### Status Badges
```tsx
<span className="badge badge-pending">Pending</span>
<span className="badge badge-processing">Processing</span>
<span className="badge badge-shipped">Shipped</span>
<span className="badge badge-delivered">Delivered</span>
<span className="badge badge-cancelled">Cancelled</span>
```

### Table System
```tsx
<table className="table">
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

## Theme System

### Theme Types
- **Light**: Bright theme for daytime use
- **Dark**: Dark theme for low-light environments
- **System**: Automatically follows system preference

### Theme Switching
```tsx
import { useTheme } from '../theme';

const { theme, setTheme, isDark, isLight } = useTheme();
```

### Theme Persistence
- Themes are stored in localStorage
- System theme changes are automatically detected
- Theme changes trigger custom events for components

## Internationalization

### Supported Languages
- **English (en)**: Primary language
- **Persian/Farsi (fa)**: Secondary language with RTL support

### RTL Support
- Automatic text direction switching
- Proper icon and layout mirroring
- Persian number formatting
- Custom scrollbar styling for RTL

### Translation Usage
```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
const message = t('common.save');
```

## Accessibility

### Focus Management
- Visible focus indicators on all interactive elements
- Keyboard navigation support
- Screen reader compatibility

### Color Contrast
- All color combinations meet WCAG AA standards
- High contrast mode support
- Color-blind friendly palette

### Semantic HTML
- Proper heading hierarchy
- ARIA labels and roles
- Alt text for images

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interface elements

## Animation Guidelines

### Micro-interactions
- Hover effects: 200ms duration
- Focus transitions: 150ms duration
- Loading states: 300ms duration

### Page Transitions
- Fade in: 300ms ease-in-out
- Slide animations: 300ms ease-out
- Staggered animations: 100ms delays

### Performance
- Use transform and opacity for animations
- Avoid animating layout properties
- Hardware acceleration for smooth animations

## Best Practices

### Component Design
1. **Composition over inheritance**: Use composition patterns
2. **Single responsibility**: Each component has one clear purpose
3. **Props interface**: Define clear TypeScript interfaces
4. **Default props**: Provide sensible defaults
5. **Error boundaries**: Handle errors gracefully

### Styling Guidelines
1. **Utility-first**: Use Tailwind utility classes
2. **Custom properties**: Use CSS custom properties for theming
3. **Consistent spacing**: Follow the spacing system
4. **Semantic colors**: Use semantic color names
5. **Responsive design**: Mobile-first approach

### Performance
1. **Code splitting**: Lazy load components and routes
2. **Memoization**: Use React.memo for expensive components
3. **Bundle optimization**: Minimize bundle size
4. **Image optimization**: Use appropriate image formats
5. **Caching**: Implement proper caching strategies

## Development Workflow

### Component Creation
1. Create component file in appropriate directory
2. Define TypeScript interface for props
3. Implement component with proper styling
4. Add accessibility attributes
5. Include RTL support if needed
6. Add translations for text content
7. Test across different themes and languages

### Theme Changes
1. Update color values in `src/theme/index.ts`
2. Update CSS custom properties in `src/index.css`
3. Test in both light and dark modes
4. Verify contrast ratios
5. Update documentation if needed

### Adding New Languages
1. Create language file in `src/i18n/locales/`
2. Add language configuration in i18n setup
3. Update language toggle component
4. Test RTL layout if applicable
5. Update documentation

## Future Enhancements

### Planned Features
- Custom theme builder
- Advanced animation system
- Component library documentation
- Design token export
- Figma integration
- Automated accessibility testing

### Scalability Considerations
- Modular component architecture
- Plugin system for extensions
- Performance monitoring
- A/B testing framework
- Analytics integration

---

This design system ensures consistency, accessibility, and maintainability across the Pars Wholesale Admin Dashboard. Regular updates and improvements are made based on user feedback and evolving best practices.