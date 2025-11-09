'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactContent() {
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
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="space-y-6"
      >
        <p className="text-base sm:text-lg text-shadow mb-6">
          Say hi!
        </p>
        
        <Link
          href="mailto:adityachess27@gmail.com"
          className="inline-flex items-center gap-3 text-base sm:text-lg link-hover underline-hover text-accent group"
          aria-label="Send email to adityachess27@gmail.com"
        >
          <Mail
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <span className="text-shadow">→ Say hi at: adityachess27@gmail.com</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

