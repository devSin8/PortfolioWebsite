import Section from '@/components/Section';
import type { Metadata } from 'next';
import ExperienceContent from './ExperienceContent';

export const metadata: Metadata = {
  title: 'Experience — devSin8',
  description: 'View devSin8\'s projects and contributions on GitHub.',
};

export default function ExperiencePage() {
  return (
    <Section>
      <ExperienceContent />
    </Section>
  );
}
