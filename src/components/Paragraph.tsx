import { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

export function Paragraph({ children, className = '', size = 'base' }: ParagraphProps) {
  const sizeStyles = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base md:text-lg leading-relaxed',
    lg: 'text-lg md:text-xl leading-relaxed',
  };

  return (
    <p className={`text-gray-300 ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  );
}

export function LeadText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xl md:text-2xl text-gray-200 leading-relaxed font-light ${className}`}>
      {children}
    </p>
  );
}
