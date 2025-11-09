'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function ExperienceContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="text-xl sm:text-2xl font-semibold mb-8 text-shadow"
      >
        Experience
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="space-y-4 leading-relaxed"
      >
        <p className="text-base sm:text-lg text-shadow mb-6">
          View my projects and contributions on GitHub.
        </p>
        
        <Link
          href="https://github.com/devSin8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-base sm:text-lg link-hover underline-hover text-accent group"
          aria-label="Visit devSin8 GitHub profile"
        >
          <Github
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <span className="text-shadow">https://github.com/devSin8</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

