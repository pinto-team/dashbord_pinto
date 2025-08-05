# Cursor-Inspired Dashboard

A modern, dark-themed admin dashboard inspired by cursor.com's clean and developer-focused design system.

## 🎨 Design Philosophy

This dashboard follows cursor.com's design principles:
- **Dark-First**: Optimized for developer experience with dark themes
- **Minimalist**: Clean, uncluttered interfaces with purposeful whitespace
- **Modern**: Subtle gradients, shadows, and smooth animations
- **Productive**: Optimized for long coding sessions and development workflows

## ✨ Features

- **Modern UI**: Cursor-inspired design with dark theme
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Component System**: Reusable components with consistent styling
- **Interactive Elements**: Hover effects, transitions, and animations
- **Developer-Focused**: Designed with developers in mind

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cursor-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Design System

### Color Palette

The design system uses a carefully crafted color palette inspired by cursor.com:

- **Primary**: Indigo (#6366f1) - Main brand color
- **Backgrounds**: Dark grays (#0a0a0a, #1a1a1a, #2a2a2a)
- **Text**: White and gray variations for hierarchy
- **Accents**: Success (green), warning (amber), error (red), info (cyan)

### Typography

- **Primary Font**: Inter - Modern, readable sans-serif
- **Monospace**: JetBrains Mono - For code and technical content
- **Weights**: 300, 400, 500, 600, 700

### Components

The dashboard includes several reusable components:

- **Buttons**: Primary, secondary, ghost variants
- **Cards**: With hover effects and gradients
- **Navigation**: Sidebar with active states
- **Inputs**: Modern form controls
- **Badges**: Status indicators
- **Metrics**: Key performance indicators

## 📁 Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles and design system
├── components/         # Reusable UI components
├── contexts/          # React contexts
├── pages/             # Page components
├── utils/             # Utility functions
└── assets/            # Static assets
```

## 🎨 Customization

### Colors

Colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  cursor: {
    primary: '#6366f1',
    'primary-hover': '#4f46e5',
    // ... more colors
  }
}
```

### Components

All components use the `cursor-` prefix for easy identification and customization.

### CSS Variables

The design system uses CSS custom properties for easy theming:

```css
:root {
  --cursor-primary: #6366f1;
  --cursor-bg-primary: #0a0a0a;
  --cursor-text-primary: #ffffff;
  /* ... more variables */
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS classes for styling
- Maintain consistent component structure

### Adding New Components

1. Create component in `src/components/`
2. Use the `cursor-` prefix for classes
3. Follow the established design patterns
4. Add TypeScript interfaces for props

### Styling Guidelines

- Use the provided design tokens
- Maintain consistent spacing with `cursor-` spacing classes
- Use semantic color names
- Implement hover and focus states

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🙏 Acknowledgments

- Inspired by [cursor.com](https://cursor.com)'s beautiful design
- Icons from [Lucide](https://lucide.dev)
- Fonts from Google Fonts (Inter, JetBrains Mono)

---

Built with ❤️ for developers who appreciate beautiful, functional interfaces.