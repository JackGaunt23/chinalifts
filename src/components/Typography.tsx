import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function Heading({ children, className = '', as: Tag = 'h2' }: HeadingProps) {
  const baseStyles = 'font-[family-name:var(--font-oswald)] font-bold uppercase tracking-tight';
  
  const sizeStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
  };

  return (
    <Tag className={`${baseStyles} ${sizeStyles[Tag]} ${className}`}>
      {children}
    </Tag>
  );
}

export function Subheading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-[family-name:var(--font-oswald)] text-lg md:text-xl text-gray-400 uppercase tracking-wide ${className}`}>
      {children}
    </p>
  );
}

export function ChineseText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-noto-sans-sc)] ${className}`}>
      {children}
    </span>
  );
}
