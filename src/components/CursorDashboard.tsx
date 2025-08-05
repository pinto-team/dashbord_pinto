import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Package, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ShoppingCart,
  Clock,
  CheckCircle
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon, gradient }) => (
  <div className={`relative overflow-hidden rounded-xl p-6 ${gradient} shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-white/80">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        <div className="flex items-center mt-2">
          {changeType === 'positive' ? (
            <ArrowUpRight className="w-4 h-4 text-green-300 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-300 mr-1" />
          )}
          <span className={`text-sm font-medium ${changeType === 'positive' ? 'text-green-300' : 'text-red-300'}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="text-white/80">
        {icon}
      </div>
    </div>
  </div>
);

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  status: 'completed' | 'pending' | 'processing';
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, time, icon, status }) => {
  const statusColors = {
    completed: 'text-green-500',
    pending: 'text-yellow-500',
    processing: 'text-blue-500'
  };

  return (
    <div className="flex items-start space-x-3 p-4 rounded-lg bg-bg-card border border-border-primary hover:bg-bg-secondary transition-colors">
      <div className={`p-2 rounded-lg bg-bg-tertiary ${statusColors[status]}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-text-primary">{title}</p>
        <p className="text-sm text-text-secondary mt-1">{description}</p>
        <p className="text-xs text-text-muted mt-1">{time}</p>
      </div>
    </div>
  );
};

const CursorDashboard: React.FC = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      changeType: "positive" as const,
      icon: <DollarSign className="w-8 h-8" />,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      changeType: "positive" as const,
      icon: <Users className="w-8 h-8" />,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      title: "Sales",
      value: "12,234",
      change: "+19%",
      changeType: "positive" as const,
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500"
    },
    {
      title: "Active Orders",
      value: "573",
      change: "-2.3%",
      changeType: "negative" as const,
      icon: <Package className="w-8 h-8" />,
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  const recentActivities = [
    {
      title: "Order #1234 completed",
      description: "Customer received their package successfully",
      time: "2 minutes ago",
      icon: <CheckCircle className="w-4 h-4" />,
      status: "completed" as const
    },
    {
      title: "New order received",
      description: "Order #1235 from John Doe",
      time: "5 minutes ago",
      icon: <ShoppingCart className="w-4 h-4" />,
      status: "pending" as const
    },
    {
      title: "Payment processed",
      description: "Payment for order #1233 completed",
      time: "10 minutes ago",
      icon: <DollarSign className="w-4 h-4" />,
      status: "completed" as const
    },
    {
      title: "Order in transit",
      description: "Order #1232 is being delivered",
      time: "15 minutes ago",
      icon: <Package className="w-4 h-4" />,
      status: "processing" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Dashboard</h1>
        <p className="text-text-secondary">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <div className="bg-bg-card rounded-xl border border-border-primary p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-text-primary">Revenue Overview</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent-primary"></div>
                <span className="text-sm text-text-secondary">This Month</span>
              </div>
            </div>
            
            {/* Placeholder for Chart */}
            <div className="h-64 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-text-muted mx-auto mb-4" />
                <p className="text-text-secondary">Chart Component</p>
                <p className="text-sm text-text-muted">Revenue data visualization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-bg-card rounded-xl border border-border-primary p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-text-primary">Recent Activity</h2>
            <button className="text-sm text-accent-primary hover:text-accent-primary-hover transition-colors">
              View all
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Package className="w-6 h-6 mb-2" />
            <p className="font-medium">Add Product</p>
          </button>
          <button className="p-4 bg-gradient-to-r from-accent-success to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Users className="w-6 h-6 mb-2" />
            <p className="font-medium">New Customer</p>
          </button>
          <button className="p-4 bg-gradient-to-r from-accent-warning to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <ShoppingCart className="w-6 h-6 mb-2" />
            <p className="font-medium">Create Order</p>
          </button>
          <button className="p-4 bg-gradient-to-r from-accent-info to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Activity className="w-6 h-6 mb-2" />
            <p className="font-medium">View Reports</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursorDashboard;