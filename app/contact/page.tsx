import Section from '@/components/Section';
import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact — devSin8',
  description: 'Get in touch with devSin8. Say hi at adityachess27@gmail.com',
};

export default function ContactPage() {
  return (
    <Section>
      <ContactContent />
    </Section>
  );
}
