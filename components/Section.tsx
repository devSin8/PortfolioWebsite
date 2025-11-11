import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`max-w-3xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

