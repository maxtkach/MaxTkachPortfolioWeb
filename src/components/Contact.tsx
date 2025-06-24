'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
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
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container mx-auto px-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Зв'язатися зі мною
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="flex flex-col gap-4 sm:gap-8"
            variants={containerVariants}
          >
            <motion.a 
              href="https://t.me/maxtkach44" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.01, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={`/tg.png`} 
                  alt="Telegram" 
                  fill
                  className="object-contain invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-medium text-white/90 group-hover:text-purple-400 transition-colors">Telegram</span>
                <span className="text-sm sm:text-base text-white/60 group-hover:text-white/80 transition-colors">@maxtkach</span>
              </div>
            </motion.a>
            
            <motion.a 
              href="mailto:maxtkach4422@gmail.com"
              className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.01, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={`/mail.png`} 
                  alt="Email" 
                  fill
                  className="object-contain invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-medium text-white/90 group-hover:text-purple-400 transition-colors">Email</span>
                <span className="text-sm sm:text-base text-white/60 group-hover:text-white/80 transition-colors break-all">maxtkach4422@gmail.com</span>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://github.com/maxtkach"
              target="_blank"
              rel="noopener noreferrer" 
              className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.01, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={`/github.png`} 
                  alt="GitHub" 
                  fill
                  className="object-contain invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-medium text-white/90 group-hover:text-purple-400 transition-colors">GitHub</span>
                <span className="text-sm sm:text-base text-white/60 group-hover:text-white/80 transition-colors">github.com/maxtkach</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 