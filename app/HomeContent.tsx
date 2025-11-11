'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeContent() {
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
          className="inline-block text-xl sm:text-2xl font-semibold mb-6 text-accent hover:text-accent/80 transition-colors duration-200"
        >
          ← take me home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="space-y-4 leading-relaxed"
      >
        <p className="text-base sm:text-lg">
          I'm <span className="text-accent">devSin8</span>, and among other things, I'm a developer.
        <p className="text-base sm:text-lg text-shadow">
          I'm <span className="text-accent font-medium">Aditya Pandey</span>, and among other things, I'm a developer.
        </p>
        <p className="text-base sm:text-lg">
          I enjoy making and developing websites and apps.
        </p>
        <p className="text-base sm:text-lg">
          I'm currently learning and developing in <span className="text-accent">Java</span>, <span className="text-accent">C++</span>, and <span className="text-accent">JavaScript</span>.
        <p className="text-base sm:text-lg text-shadow">
          I'm currently learning and developing in <span className="text-accent">Java</span>, <span className="text-accent">C++</span>, and <span className="text-accent">JavaScript</span>, <span className="text-accent">Next.js</span>, <span className="text-accent">TypeScript</span>.            
        </p>
      </motion.div>
    </motion.div>
  );
}

