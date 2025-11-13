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
        </p>
        <p className="text-base sm:text-lg">
          I enjoy creating and developing apps.
        </p>
        <p className="text-base sm:text-lg">
          I'm currently learning and developing in <span className="text-accent">Java</span>, <span className="text-accent">C++</span>, <span className="text-accent">JavaScript</span>, <span className="text-accent">Next.js</span>, and <span className="text-accent">TypeScript</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="space-y-6 mt-12"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-text mb-6">Tech Stack</h2>
        
        {/* Languages */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {['C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-md border border-text/20 bg-background hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm font-mono"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks and Tools */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Frameworks and Tools</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Tailwind CSS', 'Github'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.75 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-md border border-text/20 bg-background hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm font-mono"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industrial Knowledge */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Industrial Knowledge</h3>
          <div className="flex flex-wrap gap-2">
            {['Object Oriented Programing', 'Data Structure & Algorithm'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.95 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-md border border-text/20 bg-background hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm font-mono"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engines */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Engines</h3>
          <div className="flex flex-wrap gap-2">
            {['Unreal Engine 5', 'Godot Engine'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-md border border-text/20 bg-background hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm font-mono"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Other</h3>
          <div className="flex flex-wrap gap-2">
            {['Git & Github', 'Photo Editing'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-md border border-text/20 bg-background hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm font-mono"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}