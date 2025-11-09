import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'devSin8 — Developer Portfolio',
  description: 'Personal portfolio of devSin8 — Developer, Student, and Enthusiast. Building websites and apps with Java, C++, and JavaScript.',
  keywords: ['developer', 'portfolio', 'web development', 'JavaScript', 'Java', 'C++'],
  authors: [{ name: 'devSin8' }],
  creator: 'devSin8',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devsin8.vercel.app',
    title: 'devSin8 — Developer Portfolio',
    description: 'Personal portfolio of devSin8 — Developer, Student, and Enthusiast.',
    siteName: 'devSin8 Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'devSin8 — Developer Portfolio',
    description: 'Personal portfolio of devSin8 — Developer, Student, and Enthusiast.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className={`min-h-screen flex flex-col ${ibmPlexMono.variable}`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

