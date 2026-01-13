import { ReactNode } from 'react';

interface CalloutBoxProps {
  children: ReactNode;
  title?: string;
  variant?: 'default' | 'tip' | 'warning' | 'note';
  icon?: ReactNode;
  className?: string;
}

export function CalloutBox({ 
  children, 
  title, 
  variant = 'default',
  icon,
  className = '' 
}: CalloutBoxProps) {
  const variantStyles = {
    default: 'border-gray-700 bg-gray-900/50',
    tip: 'border-red-600/50 bg-red-950/30',
    warning: 'border-amber-600/50 bg-amber-950/30',
    note: 'border-blue-600/50 bg-blue-950/30',
  };

  const iconColors = {
    default: 'text-gray-400',
    tip: 'text-red-500',
    warning: 'text-amber-500',
    note: 'text-blue-500',
  };

  return (
    <div className={`
      border-l-4 rounded-r-lg p-4 md:p-6
      ${variantStyles[variant]}
      ${className}
    `}>
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className={iconColors[variant]}>{icon}</span>}
          {title && (
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold uppercase tracking-wide text-white">
              {title}
            </h4>
          )}
        </div>
      )}
      <div className="text-gray-300 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function QuoteBox({ children, author, className = '' }: { children: ReactNode; author?: string; className?: string }) {
  return (
    <blockquote className={`
      border-l-4 border-red-600 pl-4 md:pl-6 py-2
      italic text-gray-300 text-lg md:text-xl
      ${className}
    `}>
      <p>&ldquo;{children}&rdquo;</p>
      {author && (
        <footer className="mt-2 text-sm text-gray-500 not-italic">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}
