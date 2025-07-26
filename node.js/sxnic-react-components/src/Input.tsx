import { clsx } from 'clsx';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outline';
}

export const Input = ({
  label,
  error,
  variant = 'default',
  className,
  id,
  ...props
}: InputProps) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  const baseClasses = 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6';
  
  const variantClasses = {
    default: '',
    outline: 'border border-gray-300 focus:border-primary-600',
  };
  
  const errorClasses = error ? 'ring-red-300 focus:ring-red-600' : '';

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          errorClasses,
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};