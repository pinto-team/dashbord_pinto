import React from 'react';
import { 
  Bell, 
  Search, 
  Settings, 
  User, 
  Moon, 
  Sun,
  Menu,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  onSidebarToggle: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const CursorHeader: React.FC<HeaderProps> = ({ onSidebarToggle, isDarkMode, onToggleTheme }) => {
  return (
    <header className="bg-bg-card border-b border-border-primary px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-bg-secondary transition-colors"
          >
            <Menu className="w-5 h-5 text-text-secondary" />
          </button>
          
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-text-primary">Dashboard</h2>
            <p className="text-sm text-text-secondary">Welcome back, Admin!</p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden lg:block flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2 bg-bg-secondary border border-border-primary rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg hover:bg-bg-secondary transition-colors"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-text-secondary" />
            ) : (
              <Moon className="w-5 h-5 text-text-secondary" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-lg hover:bg-bg-secondary transition-colors">
              <Bell className="w-5 h-5 text-text-secondary" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-error rounded-full"></span>
            </button>
          </div>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-bg-secondary transition-colors">
            <Settings className="w-5 h-5 text-text-secondary" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-3 border-l border-border-primary">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">A</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-text-primary">Admin User</p>
              <p className="text-xs text-text-muted">Administrator</p>
            </div>
            <button className="p-1 rounded-lg hover:bg-bg-secondary transition-colors">
              <ChevronDown className="w-4 h-4 text-text-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 lg:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 bg-bg-secondary border border-border-primary rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
          />
        </div>
      </div>
    </header>
  );
};

export default CursorHeader;