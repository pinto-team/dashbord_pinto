# Cursor.com Inspired Dashboard Template

A modern, responsive admin dashboard template inspired by cursor.com's design aesthetic, featuring gradient backgrounds, sleek UI components, and a professional color scheme.

## 🎨 Design Features

### Color Scheme
- **Primary Colors**: Purple/Blue gradient (#6366f1 to #8b5cf6)
- **Background**: Clean white/light gray with subtle gradients
- **Dark Mode**: Deep blacks and grays with enhanced contrast
- **Accent Colors**: Emerald green, orange, red, and cyan for status indicators

### Design Elements
- **Gradient Cards**: Beautiful gradient backgrounds for stat cards
- **Glass Effects**: Subtle transparency and blur effects
- **Hover Animations**: Smooth lift and glow effects on interaction
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Rounded Corners**: Consistent border radius throughout
- **Shadow System**: Layered shadows for depth and dimension

## 🚀 Components

### 1. CursorDashboard
The main dashboard component featuring:
- **Stat Cards**: Gradient cards with metrics and trend indicators
- **Activity Feed**: Real-time activity updates with status indicators
- **Quick Actions**: Gradient buttons for common tasks
- **Chart Placeholder**: Area for data visualization

### 2. CursorSidebar
Modern navigation sidebar with:
- **Gradient Logo**: Purple/blue gradient branding
- **Search Bar**: Integrated search functionality
- **Navigation Items**: Icons with badges and hover effects
- **User Profile**: Bottom section with notifications and user info

### 3. CursorHeader
Top header component including:
- **Mobile Menu**: Responsive hamburger menu
- **Search Bar**: Global search functionality
- **Theme Toggle**: Dark/light mode switch
- **User Profile**: Avatar and user information

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### Dark Mode Support
- Automatic theme switching
- Consistent color schemes
- Smooth transitions

### Accessibility
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

### Performance
- Optimized animations
- Efficient CSS variables
- Minimal JavaScript overhead

## 🛠️ Technical Implementation

### CSS Variables
```css
/* Primary Colors */
--accent-primary: #6366f1;
--accent-secondary: #8b5cf6;

/* Background Colors */
--bg-primary: #ffffff;
--bg-secondary: #fafafa;
--bg-card: #ffffff;

/* Text Colors */
--text-primary: #0a0a0a;
--text-secondary: #374151;
```

### Tailwind Classes
- Custom color palette integration
- Responsive utilities
- Animation classes
- Component variants

### React Components
- TypeScript support
- Props interfaces
- Event handlers
- State management

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Update the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --accent-primary: #your-primary-color;
  --accent-secondary: #your-secondary-color;
  /* ... other variables */
}
```

### Components
Each component is modular and can be easily customized:
- Modify props interfaces
- Update styling classes
- Add new features
- Extend functionality

### Animations
Customize animations by modifying:
- Transition durations
- Easing functions
- Hover effects
- Loading states

## 🔧 Installation & Usage

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📦 Dependencies

- **React 19**: Latest React with hooks
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Vite**: Fast build tool and dev server

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Inspired by cursor.com's beautiful design aesthetic**