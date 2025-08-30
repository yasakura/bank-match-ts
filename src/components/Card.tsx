import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  className = '',
}) => {
  const baseClasses = 'rounded-lg p-6 transition-all duration-200';

  const variantClasses = {
    default: 'bg-white shadow-md hover:shadow-lg',
    elevated:
      'bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1',
    outlined: 'bg-white border-2 border-gray-200 hover:border-gray-300',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
};
