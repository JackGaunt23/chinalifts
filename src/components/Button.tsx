import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-[family-name:var(--font-oswald)] font-semibold uppercase tracking-wider
    transition-all duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: `
      bg-red-600 text-white
      hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30
      active:bg-red-700 active:scale-[0.98]
    `,
    secondary: `
      bg-amber-500 text-black
      hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30
      active:bg-amber-600 active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-white border-2 border-white
      hover:bg-white hover:text-black
      active:bg-gray-200 active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-gray-300
      hover:text-white hover:bg-white/10
      active:bg-white/20 active:scale-[0.98]
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}

export function CTAButton({ children, href, className = '' }: { children: ReactNode; href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        w-full sm:w-auto min-w-[200px]
        px-8 py-4
        bg-red-600 text-white
        font-[family-name:var(--font-oswald)] font-bold text-lg uppercase tracking-wider
        rounded-xl
        transition-all duration-200 ease-out
        hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/40 hover:scale-[1.02]
        active:bg-red-700 active:scale-[0.98]
        animate-pulse-glow
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
