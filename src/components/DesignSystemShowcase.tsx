import React from 'react'
import { 
  Code, 
  Users, 
  Settings, 
  Bell, 
  Download, 
  Upload, 
  GitBranch, 
  Zap,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Search
} from 'lucide-react'

const DesignSystemShowcase: React.FC = () => {
  return (
    <div className="p-cursor-8 space-y-cursor-8">
      <div className="text-center mb-cursor-8">
        <h1 className="text-cursor-4xl font-cursor-bold mb-cursor-4">Cursor Design System</h1>
        <p className="text-cursor-text-secondary text-cursor-lg">
          A modern, developer-focused design system inspired by cursor.com
        </p>
      </div>

      {/* Colors Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Color Palette</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-cursor-4">
          <div className="text-center">
            <div className="w-cursor-16 h-cursor-16 bg-cursor-primary rounded-cursor-lg mx-auto mb-cursor-2"></div>
            <p className="font-cursor-medium">Primary</p>
            <p className="text-cursor-text-secondary text-cursor-sm">#6366f1</p>
          </div>
          <div className="text-center">
            <div className="w-cursor-16 h-cursor-16 bg-cursor-accent-success rounded-cursor-lg mx-auto mb-cursor-2"></div>
            <p className="font-cursor-medium">Success</p>
            <p className="text-cursor-text-secondary text-cursor-sm">#10b981</p>
          </div>
          <div className="text-center">
            <div className="w-cursor-16 h-cursor-16 bg-cursor-accent-warning rounded-cursor-lg mx-auto mb-cursor-2"></div>
            <p className="font-cursor-medium">Warning</p>
            <p className="text-cursor-text-secondary text-cursor-sm">#f59e0b</p>
          </div>
          <div className="text-center">
            <div className="w-cursor-16 h-cursor-16 bg-cursor-accent-error rounded-cursor-lg mx-auto mb-cursor-2"></div>
            <p className="font-cursor-medium">Error</p>
            <p className="text-cursor-text-secondary text-cursor-sm">#ef4444</p>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Buttons</h2>
        
        <div className="space-y-cursor-4">
          <div className="flex flex-wrap gap-cursor-4">
            <button className="cursor-btn cursor-btn-primary">Primary Button</button>
            <button className="cursor-btn cursor-btn-secondary">Secondary Button</button>
            <button className="cursor-btn cursor-btn-ghost">Ghost Button</button>
          </div>
          
          <div className="flex flex-wrap gap-cursor-4">
            <button className="cursor-btn cursor-btn-primary cursor-btn-sm">Small</button>
            <button className="cursor-btn cursor-btn-primary">Medium</button>
            <button className="cursor-btn cursor-btn-primary cursor-btn-lg">Large</button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-cursor-6">
          <div className="cursor-card cursor-card-hover">
            <h3 className="text-cursor-lg font-cursor-semibold mb-cursor-2">Basic Card</h3>
            <p className="text-cursor-text-secondary">A simple card with hover effects and consistent styling.</p>
          </div>
          
          <div className="cursor-card cursor-card-hover">
            <div className="flex items-center space-x-cursor-3 mb-cursor-4">
              <div className="w-cursor-10 h-cursor-10 bg-cursor-primary/10 rounded-cursor-lg flex items-center justify-center">
                <Code className="w-cursor-6 h-cursor-6 text-cursor-primary" />
              </div>
              <div>
                <h3 className="font-cursor-semibold">With Icon</h3>
                <p className="text-cursor-text-secondary text-cursor-sm">Card with an icon and content</p>
              </div>
            </div>
          </div>
          
          <div className="cursor-card cursor-card-hover">
            <h3 className="text-cursor-lg font-cursor-semibold mb-cursor-2">Interactive</h3>
            <p className="text-cursor-text-secondary mb-cursor-4">This card has hover effects and can be interactive.</p>
            <button className="cursor-btn cursor-btn-primary cursor-btn-sm">Action</button>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Badges</h2>
        
        <div className="flex flex-wrap gap-cursor-4">
          <span className="cursor-badge cursor-badge-success">
            <CheckCircle className="w-cursor-3 h-cursor-3 mr-cursor-1" />
            Success
          </span>
          <span className="cursor-badge cursor-badge-warning">
            <AlertTriangle className="w-cursor-3 h-cursor-3 mr-cursor-1" />
            Warning
          </span>
          <span className="cursor-badge cursor-badge-error">
            <XCircle className="w-cursor-3 h-cursor-3 mr-cursor-1" />
            Error
          </span>
          <span className="cursor-badge cursor-badge-info">
            <Info className="w-cursor-3 h-cursor-3 mr-cursor-1" />
            Info
          </span>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Inputs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-cursor-6">
          <div>
            <label className="block text-cursor-sm font-cursor-medium mb-cursor-2">Text Input</label>
            <input 
              type="text" 
              placeholder="Enter your text here..."
              className="cursor-input w-full"
            />
          </div>
          
          <div>
            <label className="block text-cursor-sm font-cursor-medium mb-cursor-2">Search Input</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..."
                className="cursor-input w-full pl-cursor-10"
              />
              <Search className="absolute left-cursor-3 top-1/2 transform -translate-y-1/2 w-cursor-4 h-cursor-4 text-cursor-text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Typography</h2>
        
        <div className="space-y-cursor-4">
          <div>
            <h1 className="text-cursor-4xl font-cursor-bold">Heading 1 - 4xl Bold</h1>
            <p className="text-cursor-text-secondary">Inter font family, 36px, 700 weight</p>
          </div>
          
          <div>
            <h2 className="text-cursor-3xl font-cursor-semibold">Heading 2 - 3xl Semibold</h2>
            <p className="text-cursor-text-secondary">Inter font family, 30px, 600 weight</p>
          </div>
          
          <div>
            <h3 className="text-cursor-2xl font-cursor-medium">Heading 3 - 2xl Medium</h3>
            <p className="text-cursor-text-secondary">Inter font family, 24px, 500 weight</p>
          </div>
          
          <div>
            <p className="text-cursor-lg">Body Large - 18px Regular</p>
            <p className="text-cursor-text-secondary">Inter font family, 18px, 400 weight</p>
          </div>
          
          <div>
            <p className="text-cursor-base">Body Regular - 16px Regular</p>
            <p className="text-cursor-text-secondary">Inter font family, 16px, 400 weight</p>
          </div>
          
          <div>
            <p className="text-cursor-sm">Body Small - 14px Regular</p>
            <p className="text-cursor-text-secondary">Inter font family, 14px, 400 weight</p>
          </div>
          
          <div>
            <code className="cursor-code">Monospace - JetBrains Mono</code>
            <p className="text-cursor-text-secondary">JetBrains Mono font family, 14px, 400 weight</p>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Spacing System</h2>
        
        <div className="space-y-cursor-4">
          <div className="flex items-center space-x-cursor-4">
            <div className="w-cursor-4 h-cursor-4 bg-cursor-primary rounded-cursor-sm"></div>
            <span className="text-cursor-sm">4px - cursor-1</span>
          </div>
          <div className="flex items-center space-x-cursor-4">
            <div className="w-cursor-8 h-cursor-8 bg-cursor-primary rounded-cursor-sm"></div>
            <span className="text-cursor-sm">8px - cursor-2</span>
          </div>
          <div className="flex items-center space-x-cursor-4">
            <div className="w-cursor-12 h-cursor-12 bg-cursor-primary rounded-cursor-sm"></div>
            <span className="text-cursor-sm">12px - cursor-3</span>
          </div>
          <div className="flex items-center space-x-cursor-4">
            <div className="w-cursor-16 h-cursor-16 bg-cursor-primary rounded-cursor-sm"></div>
            <span className="text-cursor-sm">16px - cursor-4</span>
          </div>
          <div className="flex items-center space-x-cursor-4">
            <div className="w-cursor-24 h-cursor-24 bg-cursor-primary rounded-cursor-sm"></div>
            <span className="text-cursor-sm">24px - cursor-6</span>
          </div>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="cursor-card">
        <h2 className="text-cursor-2xl font-cursor-bold mb-cursor-6">Gradients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-cursor-6">
          <div className="h-cursor-32 bg-cursor-gradient-primary rounded-cursor-lg flex items-center justify-center">
            <span className="text-white font-cursor-semibold">Primary Gradient</span>
          </div>
          
          <div className="h-cursor-32 bg-cursor-gradient-card rounded-cursor-lg flex items-center justify-center">
            <span className="text-white font-cursor-semibold">Card Gradient</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesignSystemShowcase