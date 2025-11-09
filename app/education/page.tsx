import Section from '@/components/Section';
import type { Metadata } from 'next';
import EducationContent from './EducationContent';

export const metadata: Metadata = {
  title: 'Education — devSin8',
  description: 'Educational background of devSin8 — B.Tech CSE at SRM Institute of Science and Technology.',
};

export default function EducationPage() {
  return (
    <Section>
      <EducationContent />
    </Section>
  );
}
