import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  Clock, 
  Settings,
  BarChart3,
  FileText,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

const CursorSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, activeTab, onTabChange }) => {
  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'products', label: 'Products', icon: <Package className="w-5 h-5" />, badge: 12 },
    { id: 'customers', label: 'Customers', icon: <Users className="w-5 h-5" />, badge: 8 },
    { id: 'orders', label: 'Orders', icon: <ShoppingCart className="w-5 h-5" />, badge: 3 },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-bg-overlay z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-bg-sidebar to-bg-secondary 
        border-r border-border-primary z-50 transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-primary">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <h1 className="text-xl font-bold text-text-primary">Cursor Admin</h1>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-bg-tertiary transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-bg-card border border-border-primary rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200
                    ${activeTab === item.id 
                      ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg' 
                      : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`
                      px-2 py-1 text-xs font-medium rounded-full
                      ${activeTab === item.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-accent-primary text-white'
                      }
                    `}>
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-border-primary">
          {/* Notifications */}
          <div className="flex items-center justify-between p-3 bg-bg-card rounded-lg mb-3">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bell className="w-5 h-5 text-text-secondary" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-error rounded-full"></span>
              </div>
              <span className="text-sm font-medium text-text-primary">Notifications</span>
            </div>
            <span className="text-xs text-text-muted">3 new</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 p-3 bg-bg-card rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">Admin User</p>
              <p className="text-xs text-text-muted truncate">admin@cursor.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CursorSidebar;