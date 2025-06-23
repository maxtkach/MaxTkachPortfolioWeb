'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import TypewriterText from './TypewriterText';
import { useEffect, useState, useCallback } from 'react';

const FloatingParticle = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [-20, -60],
        x: [-10, 10]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Mouse parallax logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Spring animations for smooth movement
  const springConfig = { damping: 25, stiffness: 100 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const translateX = useTransform(glowX, [-500, 500], [-50, 50]);
  const translateY = useTransform(glowY, [-500, 500], [-50, 50]);

  // Background tilt effect
  const bgX = useTransform(glowX, [-500, 500], [10, -10]);
  const bgY = useTransform(glowY, [-500, 500], [10, -10]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (isMobile) return;

    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    const x = clientX - innerWidth / 2;
    const y = clientY - innerHeight / 2;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  }, [isMobile, mouseX, mouseY]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove]);

  // Создаем массив частиц с разными задержками
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`
  }));

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 sm:pb-32 bg-black relative overflow-hidden">
      {/* Анимированный фон с параллакс-эффектом */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{
          x: bgX,
          y: bgY,
        }}
      >
        {/* Декоративные элементы */}
        <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-purple-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </motion.div>

      {/* Анимированные частицы */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{ left: particle.left, top: particle.top }}
        >
          <FloatingParticle delay={particle.delay} />
        </div>
      ))}

      {/* Сетка с параллакс-эффектом */}
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
              {'> '}<TypewriterText text="Привіт, я Макс" />
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Розробка сучасних веб-рішень для вашого бізнесу
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Створюю потужні та масштабовані сайти з використанням{' '}
            <span className="text-purple-400">React</span>,{' '}
            <span className="text-pink-400">Next.js</span> та{' '}
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
              Мої проєкти
            </motion.button>
            <motion.a
              href="https://github.com/maxtkach"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub профіль
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

export default Hero; 