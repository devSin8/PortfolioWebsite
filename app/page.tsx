import Section from '@/components/Section';
import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'devSin8 — Developer Portfolio',
  description: 'I\'m devSin8, and among other things, I\'m a developer. I enjoy making and developing websites and apps. Currently learning and developing in Java, C++, and JavaScript.',
};

export default function Home() {
  return (
    <Section>
      <HomeContent />
    </Section>
  );
}
