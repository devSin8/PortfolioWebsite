'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-accent/20 py-6 px-4 sm:px-6"
    >
      <nav className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link
          href="/"
          className="text-base sm:text-lg link-hover underline-hover text-shadow"
          aria-label="Navigate to home page"
        >
          ← take me home
        </Link>
        {pathname !== '/' && (
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
            <Link
              href="/education"
              className="link-hover underline-hover text-shadow"
              aria-label="View education"
            >
              Education
            </Link>
            <Link
              href="/experience"
              className="link-hover underline-hover text-shadow"
              aria-label="View experience"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="link-hover underline-hover text-shadow"
              aria-label="Contact me"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </motion.header>
  );
}

