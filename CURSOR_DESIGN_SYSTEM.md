# Cursor-Inspired Design System

## Overview

This design system is inspired by cursor.com's modern, clean interface with a focus on developer experience and productivity. It features a dark-first approach with subtle gradients, modern typography, and smooth interactions.

## Design Philosophy

- **Dark-First**: Primary focus on dark themes for better developer experience
- **Minimalist**: Clean, uncluttered interfaces with purposeful whitespace
- **Modern**: Subtle gradients, shadows, and smooth animations
- **Accessible**: High contrast ratios and keyboard navigation support
- **Productive**: Optimized for long coding sessions

## Color System

### Primary Colors
```css
/* Cursor-inspired primary palette */
--cursor-primary: #6366f1        /* Indigo - Primary brand color */
--cursor-primary-hover: #4f46e5  /* Darker indigo for hover states */
--cursor-primary-light: #818cf8  /* Lighter indigo for accents */
--cursor-primary-dark: #3730a3   /* Darker indigo for emphasis */

/* Background Colors */
--cursor-bg-primary: #0a0a0a     /* Main background - very dark */
--cursor-bg-secondary: #1a1a1a   /* Secondary background */
--cursor-bg-tertiary: #2a2a2a    /* Tertiary background */
--cursor-bg-card: #1e1e1e        /* Card background */
--cursor-bg-sidebar: #0f0f0f     /* Sidebar background */
--cursor-bg-overlay: rgba(0,0,0,0.8) /* Overlay background */

/* Text Colors */
--cursor-text-primary: #ffffff    /* Primary text */
--cursor-text-secondary: #a1a1aa /* Secondary text */
--cursor-text-tertiary: #71717a   /* Tertiary text */
--cursor-text-muted: #52525b      /* Muted text */
--cursor-text-inverse: #0a0a0a    /* Inverse text for light backgrounds */

/* Border Colors */
--cursor-border-primary: #27272a   /* Primary borders */
--cursor-border-secondary: #3f3f46 /* Secondary borders */
--cursor-border-focus: #6366f1     /* Focus state borders */

/* Accent Colors */
--cursor-accent-success: #10b981   /* Success green */
--cursor-accent-warning: #f59e0b   /* Warning amber */
--cursor-accent-error: #ef4444     /* Error red */
--cursor-accent-info: #06b6d4      /* Info cyan */

/* Special Cursor Colors */
--cursor-selection: rgba(99, 102, 241, 0.2)  /* Text selection */
--cursor-highlight: rgba(99, 102, 241, 0.1)  /* Highlight background */
```

### Gradients
```css
/* Cursor-style gradients */
--cursor-gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)
--cursor-gradient-secondary: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)
--cursor-gradient-card: linear-gradient(135deg, #1e1e1e 0%, #262626 100%)
--cursor-gradient-sidebar: linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)
```

## Typography

### Font Stack
```css
--cursor-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
--cursor-font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace
```

### Font Sizes
```css
--cursor-text-xs: 0.75rem    /* 12px */
--cursor-text-sm: 0.875rem   /* 14px */
--cursor-text-base: 1rem     /* 16px */
--cursor-text-lg: 1.125rem   /* 18px */
--cursor-text-xl: 1.25rem    /* 20px */
--cursor-text-2xl: 1.5rem    /* 24px */
--cursor-text-3xl: 1.875rem  /* 30px */
--cursor-text-4xl: 2.25rem   /* 36px */
```

### Font Weights
```css
--cursor-font-light: 300
--cursor-font-normal: 400
--cursor-font-medium: 500
--cursor-font-semibold: 600
--cursor-font-bold: 700
```

## Spacing System

```css
--cursor-space-1: 0.25rem   /* 4px */
--cursor-space-2: 0.5rem    /* 8px */
--cursor-space-3: 0.75rem   /* 12px */
--cursor-space-4: 1rem      /* 16px */
--cursor-space-5: 1.25rem   /* 20px */
--cursor-space-6: 1.5rem    /* 24px */
--cursor-space-8: 2rem      /* 32px */
--cursor-space-10: 2.5rem   /* 40px */
--cursor-space-12: 3rem     /* 48px */
--cursor-space-16: 4rem     /* 64px */
--cursor-space-20: 5rem     /* 80px */
--cursor-space-24: 6rem     /* 96px */
```

## Border Radius

```css
--cursor-radius-sm: 0.25rem   /* 4px */
--cursor-radius-md: 0.375rem  /* 6px */
--cursor-radius-lg: 0.5rem    /* 8px */
--cursor-radius-xl: 0.75rem   /* 12px */
--cursor-radius-2xl: 1rem     /* 16px */
--cursor-radius-full: 9999px  /* Full rounded */
```

## Shadows

```css
--cursor-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--cursor-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--cursor-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--cursor-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
--cursor-shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3)
```

## Component Specifications

### Buttons
- **Primary**: Indigo background with white text
- **Secondary**: Transparent with border
- **Ghost**: Transparent with hover background
- **Size variants**: sm, md, lg
- **States**: default, hover, active, disabled

### Cards
- **Background**: Subtle gradient
- **Border**: 1px solid border
- **Shadow**: Subtle shadow for depth
- **Padding**: Consistent internal spacing

### Input Fields
- **Background**: Dark with subtle border
- **Focus**: Indigo border with glow effect
- **Placeholder**: Muted text color
- **States**: default, focus, error, disabled

### Navigation
- **Sidebar**: Dark gradient background
- **Active state**: Indigo accent
- **Hover**: Subtle background change
- **Icons**: Consistent sizing and spacing

## Animation & Transitions

```css
--cursor-transition-fast: 150ms ease-in-out
--cursor-transition-normal: 250ms ease-in-out
--cursor-transition-slow: 350ms ease-in-out
--cursor-ease-out: cubic-bezier(0.4, 0, 0.2, 1)
--cursor-ease-in: cubic-bezier(0.4, 0, 1, 1)
```

## Responsive Breakpoints

```css
--cursor-breakpoint-sm: 640px
--cursor-breakpoint-md: 768px
--cursor-breakpoint-lg: 1024px
--cursor-breakpoint-xl: 1280px
--cursor-breakpoint-2xl: 1536px
```