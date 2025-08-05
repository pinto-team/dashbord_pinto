import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  Code, 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  Search,
  Bell,
  User,
  ChevronDown,
  Plus,
  Download,
  Upload,
  GitBranch,
  Zap,
  Shield,
  Globe,
  Database,
  Cpu,
  HardDrive
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'archived' | 'draft'
  lastModified: string
  contributors: number
  language: string
}

interface Metric {
  label: string
  value: string
  change: string
  trend: 'up' | 'down' | 'neutral'
  icon: React.ComponentType<{ className?: string }>
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: Code, badge: '12' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'docs', label: 'Documentation', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  const projects: Project[] = [
    {
      id: '1',
      name: 'Cursor Dashboard',
      description: 'Modern admin dashboard with Cursor-inspired design',
      status: 'active',
      lastModified: '2 hours ago',
      contributors: 3,
      language: 'TypeScript'
    },
    {
      id: '2',
      name: 'API Gateway',
      description: 'Microservices API gateway with authentication',
      status: 'active',
      lastModified: '1 day ago',
      contributors: 5,
      language: 'Go'
    },
    {
      id: '3',
      name: 'Mobile App',
      description: 'React Native mobile application',
      status: 'draft',
      lastModified: '3 days ago',
      contributors: 2,
      language: 'JavaScript'
    },
    {
      id: '4',
      name: 'Data Pipeline',
      description: 'ETL pipeline for data processing',
      status: 'archived',
      lastModified: '1 week ago',
      contributors: 4,
      language: 'Python'
    }
  ]

  const metrics: Metric[] = [
    {
      label: 'Active Projects',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Code
    },
    {
      label: 'Team Members',
      value: '8',
      change: '+1',
      trend: 'up',
      icon: Users
    },
    {
      label: 'Code Commits',
      value: '1,247',
      change: '+89',
      trend: 'up',
      icon: GitBranch
    },
    {
      label: 'Deployments',
      value: '24',
      change: '-3',
      trend: 'down',
      icon: Zap
    }
  ]

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'cursor-badge cursor-badge-success'
      case 'draft':
        return 'cursor-badge cursor-badge-warning'
      case 'archived':
        return 'cursor-badge cursor-badge-error'
      default:
        return 'cursor-badge cursor-badge-info'
    }
  }

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'
  }

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-cursor-accent-success' : 
           trend === 'down' ? 'text-cursor-accent-error' : 
           'text-cursor-text-secondary'
  }

  return (
    <div className="min-h-screen bg-cursor-bg-primary text-cursor-text-primary font-cursor">
      {/* Header */}
      <header className="bg-cursor-bg-card border-b border-cursor-border-primary px-cursor-6 py-cursor-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-cursor-4">
            <div className="flex items-center space-x-cursor-2">
              <div className="w-cursor-8 h-cursor-8 bg-cursor-gradient-primary rounded-cursor-lg flex items-center justify-center">
                <Code className="w-cursor-5 h-cursor-5 text-white" />
              </div>
              <h1 className="text-cursor-xl font-cursor-bold">Cursor Dashboard</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-cursor-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-cursor-3 top-1/2 transform -translate-y-1/2 w-cursor-4 h-cursor-4 text-cursor-text-muted" />
              <input
                type="text"
                placeholder="Search projects, files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cursor-input pl-cursor-10 w-cursor-80"
              />
            </div>
            
            {/* Notifications */}
            <button className="cursor-btn cursor-btn-ghost relative">
              <Bell className="w-cursor-5 h-cursor-5" />
              <span className="absolute -top-cursor-1 -right-cursor-1 w-cursor-3 h-cursor-3 bg-cursor-accent-error rounded-cursor-full"></span>
            </button>
            
            {/* User Menu */}
            <div className="flex items-center space-x-cursor-2">
              <button className="cursor-btn cursor-btn-ghost flex items-center space-x-cursor-2">
                <User className="w-cursor-5 h-cursor-5" />
                <span className="text-cursor-sm font-cursor-medium">John Doe</span>
                <ChevronDown className="w-cursor-4 h-cursor-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="cursor-sidebar w-cursor-64 min-h-screen p-cursor-4">
          <nav className="space-y-cursor-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`cursor-nav-item w-full justify-between ${
                  activeTab === item.id ? 'cursor-nav-item-active' : ''
                }`}
              >
                <div className="flex items-center space-x-cursor-3">
                  <item.icon className="w-cursor-5 h-cursor-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-cursor-primary text-white text-cursor-xs px-cursor-2 py-cursor-1 rounded-cursor-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-cursor-6">
          <div className="max-w-cursor-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-cursor-8">
              <h2 className="text-cursor-3xl font-cursor-bold mb-cursor-2">Dashboard</h2>
              <p className="text-cursor-text-secondary">Welcome back! Here's what's happening with your projects.</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-cursor-6 mb-cursor-8">
              {metrics.map((metric, index) => (
                <div key={index} className="cursor-card cursor-card-hover">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cursor-text-secondary text-cursor-sm font-cursor-medium">
                        {metric.label}
                      </p>
                      <p className="text-cursor-2xl font-cursor-bold mt-cursor-1">
                        {metric.value}
                      </p>
                      <div className={`flex items-center space-x-cursor-1 mt-cursor-2 ${getTrendColor(metric.trend)}`}>
                        <span className="text-cursor-sm font-cursor-medium">
                          {getTrendIcon(metric.trend)} {metric.change}
                        </span>
                        <span className="text-cursor-xs">from last month</span>
                      </div>
                    </div>
                    <div className="w-cursor-12 h-cursor-12 bg-cursor-primary/10 rounded-cursor-lg flex items-center justify-center">
                      <metric.icon className="w-cursor-6 h-cursor-6 text-cursor-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-cursor-6">
              {/* Recent Projects */}
              <div className="cursor-card">
                <div className="flex items-center justify-between mb-cursor-6">
                  <h3 className="text-cursor-xl font-cursor-semibold">Recent Projects</h3>
                  <button className="cursor-btn cursor-btn-primary cursor-btn-sm">
                    <Plus className="w-cursor-4 h-cursor-4 mr-cursor-2" />
                    New Project
                  </button>
                </div>
                
                <div className="space-y-cursor-4">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-cursor-4 bg-cursor-bg-secondary rounded-cursor-lg border border-cursor-border-primary">
                      <div className="flex-1">
                        <div className="flex items-center space-x-cursor-3 mb-cursor-2">
                          <h4 className="font-cursor-semibold text-cursor-text-primary">{project.name}</h4>
                          <span className={getStatusBadgeClass(project.status)}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-cursor-text-secondary text-cursor-sm mb-cursor-2">
                          {project.description}
                        </p>
                        <div className="flex items-center space-x-cursor-4 text-cursor-xs text-cursor-text-muted">
                          <span>{project.language}</span>
                          <span>•</span>
                          <span>{project.contributors} contributors</span>
                          <span>•</span>
                          <span>{project.lastModified}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="cursor-card">
                <h3 className="text-cursor-xl font-cursor-semibold mb-cursor-6">Quick Actions</h3>
                
                <div className="grid grid-cols-2 gap-cursor-4">
                  <button className="cursor-card cursor-card-hover p-cursor-4 text-center">
                    <Upload className="w-cursor-8 h-cursor-8 text-cursor-primary mx-auto mb-cursor-3" />
                    <p className="font-cursor-medium">Import Project</p>
                  </button>
                  
                  <button className="cursor-card cursor-card-hover p-cursor-4 text-center">
                    <Download className="w-cursor-8 h-cursor-8 text-cursor-primary mx-auto mb-cursor-3" />
                    <p className="font-cursor-medium">Export Data</p>
                  </button>
                  
                  <button className="cursor-card cursor-card-hover p-cursor-4 text-center">
                    <Shield className="w-cursor-8 h-cursor-8 text-cursor-primary mx-auto mb-cursor-3" />
                    <p className="font-cursor-medium">Security</p>
                  </button>
                  
                  <button className="cursor-card cursor-card-hover p-cursor-4 text-center">
                    <Globe className="w-cursor-8 h-cursor-8 text-cursor-primary mx-auto mb-cursor-3" />
                    <p className="font-cursor-medium">Deploy</p>
                  </button>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="mt-cursor-8">
              <div className="cursor-card">
                <h3 className="text-cursor-xl font-cursor-semibold mb-cursor-6">System Status</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-cursor-6">
                  <div className="flex items-center space-x-cursor-3">
                    <div className="w-cursor-3 h-cursor-3 bg-cursor-accent-success rounded-cursor-full"></div>
                    <div>
                      <p className="font-cursor-medium">API Services</p>
                      <p className="text-cursor-text-secondary text-cursor-sm">All systems operational</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-cursor-3">
                    <div className="w-cursor-3 h-cursor-3 bg-cursor-accent-success rounded-cursor-full"></div>
                    <div>
                      <p className="font-cursor-medium">Database</p>
                      <p className="text-cursor-text-secondary text-cursor-sm">99.9% uptime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-cursor-3">
                    <div className="w-cursor-3 h-cursor-3 bg-cursor-accent-warning rounded-cursor-full"></div>
                    <div>
                      <p className="font-cursor-medium">CDN</p>
                      <p className="text-cursor-text-secondary text-cursor-sm">Minor latency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
