'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import TypewriterText from './TypewriterText';
import { useGlowPointer } from '@/hooks/useGlowPointer';

const HeroEn = () => {
  const { glowX, glowY } = useGlowPointer();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 sm:pb-32 bg-black relative overflow-hidden">
      {/* Анимированный фон с параллакс-эффектом */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          x: useTransform(glowX, [-500, 500], [20, -20]),
          y: useTransform(glowY, [-500, 500], [20, -20]),
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000, transparent)',
        }}
      />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            variants={itemVariants}
            className="mb-4 sm:mb-8"
          >
            <motion.span 
              className="inline-block text-base sm:text-2xl text-purple-400 cursor-pointer hover:opacity-80 transition-opacity font-pixel"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                textShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
              }}
            >
              {'> '}<TypewriterText text="Hi, I'm Max" />
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Modern Web Solutions for Your Business
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Creating powerful and scalable websites using{' '}
            <span className="text-purple-400">React</span>,{' '}
            <span className="text-pink-400">Next.js</span> and{' '}
            <span className="text-purple-400">TypeScript</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Projects
            </motion.button>
            <motion.a
              href="https://github.com/maxtkach"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg 
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroEn; 