'use client';

import { motion } from 'framer-motion';

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
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-shadow">
          ← take me home
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="space-y-4 leading-relaxed"
      >
        <p className="text-base sm:text-lg text-shadow">
          I'm <span className="text-accent font-medium">devSin8</span>, and among other things, I'm a developer.
        </p>
        <p className="text-base sm:text-lg text-shadow">
          I enjoy making and developing websites and apps.
        </p>
        <p className="text-base sm:text-lg text-shadow">
          I'm currently learning and developing in <span className="text-accent">Java</span>, <span className="text-accent">C++</span>, and <span className="text-accent">JavaScript</span>.
        </p>
      </motion.div>
    </motion.div>
  );
}

