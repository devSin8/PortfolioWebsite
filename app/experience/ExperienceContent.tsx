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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <Link 
          href="/"
          className="inline-block text-xl sm:text-2xl font-semibold mb-8 text-accent hover:text-accent/80 transition-colors duration-200"
        >
          ← take me home
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="text-xl sm:text-2xl font-semibold mb-8"
      >
        Experience
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="space-y-4 leading-relaxed"
      >
        <p className="text-base sm:text-lg mb-6">
          View my projects and contributions on GitHub.
        </p>
        
        <Link
          href="https://github.com/devSin8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-base sm:text-lg text-accent hover:text-accent/80 transition-colors duration-200 relative group"
          aria-label="Visit devSin8 GitHub profile"
        >
          <Github
            className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          />
          <span>https://github.com/devSin8</span>
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

