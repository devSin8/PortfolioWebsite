import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 ${className}`}>
      {children}
    </section>
  );
}

