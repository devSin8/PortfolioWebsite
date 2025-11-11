'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EducationContent() {
  const education = [
    {
      period: '2024–2028',
      degree: 'B.Tech CSE',
      institution: 'SRM Institute of Science and Technology, KTR, Chennai',
    },
    {
      period: '2023',
      degree: '12th',
      institution: 'City Montessori School, Lucknow',
    },
    {
      period: '2021',
      degree: '10th',
      institution: 'City Montessori School, Lucknow',
    },
  ];

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
        Education
      </motion.h1>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="border-l-2 border-accent/30 pl-6 py-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
              <span className="text-accent font-medium text-base sm:text-lg">
                {edu.degree}
              </span>
              <span className="text-text/70 text-sm sm:text-base">
                {edu.period}
              </span>
            </div>
            <p className="text-base sm:text-lg leading-relaxed">
              {edu.institution}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

