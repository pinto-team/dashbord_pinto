// Persian digits mapping
const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

// Convert English digits to Persian digits
export const toPersianDigits = (num: number | string): string => {
  const str = num.toString();
  return str.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
};

// Convert Persian digits to English digits
export const toEnglishDigits = (str: string): string => {
  return str.replace(/[۰-۹]/g, (digit) => {
    const index = persianDigits.indexOf(digit);
    return index !== -1 ? index.toString() : digit;
  });
};

// Format number with thousand separators (Persian style)
export const formatNumber = (num: number | string, locale: string = 'fa'): string => {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  
  if (locale === 'fa') {
    // Persian formatting with Persian digits and Persian thousand separator
    const formatted = number.toLocaleString('fa-IR');
    return formatted;
  } else {
    // English formatting
    return number.toLocaleString('en-US');
  }
};

// Format currency
export const formatCurrency = (
  amount: number | string, 
  currency: string = 'IRR', 
  locale: string = 'fa'
): string => {
  const number = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  if (locale === 'fa') {
    // Persian currency formatting
    const formatted = number.toLocaleString('fa-IR', {
      style: 'currency',
      currency: currency,
    });
    return formatted;
  } else {
    // English currency formatting
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: currency,
    });
  }
};

// Format percentage
export const formatPercentage = (
  value: number | string, 
  locale: string = 'fa'
): string => {
  const number = typeof value === 'string' ? parseFloat(value) : value;
  
  if (locale === 'fa') {
    const formatted = number.toLocaleString('fa-IR', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    return formatted;
  } else {
    return number.toLocaleString('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
};