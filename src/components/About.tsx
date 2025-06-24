'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FloatingDot = ({ delay = 0, size = 2 }) => (
  <motion.div
    className="absolute bg-purple-400/30 rounded-full"
    style={{ width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      scale: [1, 1.5, 1]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const competencies = [
  {
    title: "Веб-розробка",
    description: "Розробка адаптивних лендінгів та корпоративних сайтів",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Оптимізація",
    description: "Оптимізація швидкодії та SEO",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const About = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Создаем массив точек с разными задержками и размерами
  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    size: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`
  }));

  return (
    <section id="about" className="py-20 sm:py-32 bg-black relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        {/* Фоновое фото */}
        <div className="absolute inset-0 opacity-90">
          <Image
            src={`/me.jpg`}
            alt="Максим Ткач"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto backdrop-blur-sm rounded-2xl p-6 sm:p-8 bg-black/30">
          {/* Текстовый контент */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Досвід
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
              <p className="text-white/90">
                Я веброзробник з України з більш ніж 3-річним досвідом створення сучасних веб-рішень. 
                Моя місія — перетворювати ваші ідеї на потужні цифрові продукти.
              </p>

              <div>
                <p className="text-white/90 mb-6">Ключові компетенції:</p>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                  variants={containerVariants}
                >
                  {competencies.map((competency, index) => (
                    <motion.div
                      key={competency.title}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Светящийся фон при наведении */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      
                      <div className="relative">
                        <div className="flex items-center mb-2">
                          <div className="p-2 bg-purple-500/20 rounded-lg mr-3 text-purple-400">
                            {competency.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-white">{competency.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm">{competency.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
                  
              <p className="text-white/90">
                Працюю з бізнесами різного масштабу: від локальних компаній до стартапів.
              </p>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
                <p className="text-white font-medium">
                  Шукаєте надійного технічного партнера для вашого проєкту?
                  Я відкритий до нових можливостей співпраці на проєктній або постійній основі.
                </p>
              </div>

              {/* Кнопка */}
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Зв'язатися зі мною
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 