'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="border-t border-accent/20 py-8 px-4 sm:px-6 mt-auto"
    >
      <div className="max-w-3xl mx-auto text-center text-sm text-text/70">
        <p className="text-shadow">
          © {new Date().getFullYear()} devSin8. Built with Next.js and TailwindCSS.
        </p>
      </div>
    </motion.footer>
  );
}

