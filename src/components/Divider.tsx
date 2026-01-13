import { ReactNode } from 'react';

export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`my-8 md:my-10 ${className}`} aria-hidden>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
    </div>
  );
}

export function DividerWithLabel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`my-10 md:my-12 flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-neutral-800" />
      <div className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-xs md:text-sm text-neutral-300 font-[family-name:var(--font-oswald)] uppercase tracking-wider">
        {children}
      </div>
      <div className="h-px flex-1 bg-neutral-800" />
    </div>
  );
}
