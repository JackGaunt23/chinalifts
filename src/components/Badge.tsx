import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'accent' | 'gold' | 'outline';

export function Badge({
  children,
  variant = 'default',
  className = '',
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  const styles: Record<BadgeVariant, string> = {
    default: 'bg-neutral-900 text-neutral-200 border-neutral-800',
    accent: 'bg-red-600/15 text-red-300 border-red-600/30',
    gold: 'bg-amber-500/15 text-amber-200 border-amber-500/30',
    outline: 'bg-transparent text-neutral-200 border-neutral-700',
  };

  return (
    <span
      className={[
        'inline-flex items-center gap-2 px-3 py-1 rounded-full border',
        'text-xs md:text-sm',
        'font-[family-name:var(--font-oswald)] uppercase tracking-wider',
        styles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
