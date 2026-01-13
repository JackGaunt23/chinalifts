import { ReactNode } from 'react';

type CardVariant = 'default' | 'accent' | 'subtle';

export function Card({
  children,
  className = '',
  variant = 'default',
}: {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}) {
  const variants: Record<CardVariant, string> = {
    default: 'border-neutral-800 bg-neutral-950/60',
    accent: 'border-red-600/30 bg-red-950/20',
    subtle: 'border-neutral-900 bg-neutral-950/30',
  };

  return (
    <div
      className={[
        'rounded-2xl border p-5 md:p-6',
        'shadow-lg shadow-black/40',
        'backdrop-blur-sm',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h3
      className={[
        'font-[family-name:var(--font-oswald)] font-bold uppercase tracking-wide',
        'text-lg md:text-xl text-white',
        className,
      ].join(' ')}
    >
      {children}
    </h3>
  );
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={['mt-2 text-sm md:text-base text-neutral-300 leading-relaxed', className].join(' ')}>{children}</div>;
}
