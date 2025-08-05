import React from 'react';
import { useTranslation } from 'react-i18next';
import { useApp } from '../contexts/AppContext';
import { formatNumber, formatCurrency } from '../utils/numbers';

const DemoComponent: React.FC = () => {
  const { t } = useTranslation();
  const { language, isRTL } = useApp();

  const sampleNumbers = [1000, 50000, 1000000];
  const sampleCurrency = 250000;

  return (
    <div className="bg-bg-secondary p-6 rounded-lg border border-border-primary">
      <h2 className="text-xl font-bold text-text-primary mb-4">
        {t('common.dashboard')} - Demo
      </h2>
      
      <div className="space-y-4">
        {/* Language and RTL Demo */}
        <div className="bg-bg-primary p-4 rounded border border-border-primary">
          <h3 className="font-semibold text-text-primary mb-2">
            Language & RTL Support
          </h3>
          <p className="text-text-secondary">
            Current Language: <span className="font-medium">{language}</span>
          </p>
          <p className="text-text-secondary">
            Direction: <span className="font-medium">{isRTL ? 'RTL' : 'LTR'}</span>
          </p>
        </div>

        {/* Number Formatting Demo */}
        <div className="bg-bg-primary p-4 rounded border border-border-primary">
          <h3 className="font-semibold text-text-primary mb-2">
            Persian Number Formatting
          </h3>
          <div className="space-y-2">
            {sampleNumbers.map((num) => (
              <div key={num} className="flex justify-between items-center">
                <span className="text-text-secondary">English: {num.toLocaleString()}</span>
                <span className="text-text-primary persian-numbers font-medium">
                  Persian: {formatNumber(num, language)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Currency Formatting Demo */}
        <div className="bg-bg-primary p-4 rounded border border-border-primary">
          <h3 className="font-semibold text-text-primary mb-2">
            Currency Formatting
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">English: {sampleCurrency.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              <span className="text-text-primary persian-numbers font-medium">
                Persian: {formatCurrency(sampleCurrency, 'IRR', language)}
              </span>
            </div>
          </div>
        </div>

        {/* Theme Colors Demo */}
        <div className="bg-bg-primary p-4 rounded border border-border-primary">
          <h3 className="font-semibold text-text-primary mb-2">
            Theme Colors
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-accent-primary text-text-inverse p-2 rounded text-center text-sm">
              Primary
            </div>
            <div className="bg-accent-success text-text-inverse p-2 rounded text-center text-sm">
              Success
            </div>
            <div className="bg-accent-warning text-text-inverse p-2 rounded text-center text-sm">
              Warning
            </div>
            <div className="bg-accent-error text-text-inverse p-2 rounded text-center text-sm">
              Error
            </div>
          </div>
        </div>

        {/* Translation Demo */}
        <div className="bg-bg-primary p-4 rounded border border-border-primary">
          <h3 className="font-semibold text-text-primary mb-2">
            Translation Examples
          </h3>
          <div className="space-y-1 text-sm">
            <p className="text-text-secondary">
              {t('common.dashboard')}: <span className="text-text-primary">{t('common.dashboard')}</span>
            </p>
            <p className="text-text-secondary">
              {t('common.products')}: <span className="text-text-primary">{t('common.products')}</span>
            </p>
            <p className="text-text-secondary">
              {t('common.customers')}: <span className="text-text-primary">{t('common.customers')}</span>
            </p>
            <p className="text-text-secondary">
              {t('common.orders')}: <span className="text-text-primary">{t('common.orders')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoComponent;