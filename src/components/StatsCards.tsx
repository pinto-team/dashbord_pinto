// components/StatsCards.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';

const StatsCards: React.FC = () => {
    const { t } = useTranslation();

    const stats = [
        {
            title: t('dashboard.totalSales'),
            value: '₺125,000',
            change: '+12.5%',
            changeType: 'positive' as const,
            icon: DollarSign,
            color: 'bg-gradient-to-r from-accent-success to-accent-success/80',
            iconColor: 'text-accent-success',
        },
        {
            title: t('dashboard.totalOrders'),
            value: '1,234',
            change: '+8.2%',
            changeType: 'positive' as const,
            icon: ShoppingCart,
            color: 'bg-gradient-to-r from-accent-primary to-accent-primary/80',
            iconColor: 'text-accent-primary',
        },
        {
            title: t('dashboard.totalCustomers'),
            value: '567',
            change: '+15.3%',
            changeType: 'positive' as const,
            icon: Users,
            color: 'bg-gradient-to-r from-accent-secondary to-accent-secondary/80',
            iconColor: 'text-accent-secondary',
        },
        {
            title: t('dashboard.totalProducts'),
            value: '89',
            change: '-2.1%',
            changeType: 'negative' as const,
            icon: Package,
            color: 'bg-gradient-to-r from-accent-warning to-accent-warning/80',
            iconColor: 'text-accent-warning',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={index}
                        className="card p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-text-secondary mb-1">
                                    {stat.title}
                                </p>
                                <p className="text-2xl font-bold text-text-primary mb-2">
                                    {stat.value}
                                </p>
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    {stat.changeType === 'positive' ? (
                                        <TrendingUp className="h-4 w-4 text-accent-success" />
                                    ) : (
                                        <TrendingDown className="h-4 w-4 text-accent-error" />
                                    )}
                                    <span
                                        className={`text-sm font-medium ${
                                            stat.changeType === 'positive'
                                                ? 'text-accent-success'
                                                : 'text-accent-error'
                                        }`}
                                    >
                                        {stat.change}
                                    </span>
                                    <span className="text-xs text-text-tertiary">
                                        from last month
                                    </span>
                                </div>
                            </div>
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                            </div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-4">
                            <div className="w-full bg-bg-tertiary rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-1000 ${
                                        stat.changeType === 'positive'
                                            ? 'bg-accent-success'
                                            : 'bg-accent-error'
                                    }`}
                                    style={{
                                        width: `${Math.abs(parseFloat(stat.change)) * 2}%`,
                                        maxWidth: '100%'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsCards;
