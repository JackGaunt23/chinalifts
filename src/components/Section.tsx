import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`min-h-screen bg-black ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionNarrow({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-10 md:py-14 ${className}`}>
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </section>
  );
}
