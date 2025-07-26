import { clsx } from 'clsx';
import type { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = ({
  children,
  className,
  padding = 'md',
  shadow = 'md',
}: CardProps) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200';
  
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  return (
    <div
      className={clsx(
        baseClasses,
        paddingClasses[padding],
        shadowClasses[shadow],
        className
      )}
    >
      {children}
    </div>
  );
};