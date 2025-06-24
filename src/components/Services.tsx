'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  price: string;
  description: string;
  features: string[];
  duration?: string;
}

const services: Service[] = [
  {
    title: "Лендинг під ключ",
    price: "від 200$",
    description: "Односторінковий сайт для презентації продукту, послуги чи особистого бренду",
    features: [
      "Швидкий запуск",
      "Сучасний дизайн",
      "Адаптивність під мобільні пристрої",
      "SEO-базова оптимізація",
      "Консультації після запуску"
    ],
    duration: "3-5 днів"
  },
  {
    title: "Багатосторінковий сайт",
    price: "від 400$",
    description: "Структурований сайт із кількома розділами для компаній, закладів та агенцій",
    features: [
      "Кілька розділів та сторінок",
      "Можливість підключення блогу",
      "Мультимовність",
      "Інтеграція CMS",
      "Розширена функціональність"
    ],
    duration: "5-10 днів"
  },
  {
    title: "Підтримка",
    price: "від 20$/год",
    description: "Оновлення контенту, покращення швидкості, адаптація під нові потреби",
    features: [
      "Оновлення контенту",
      "Покращення швидкості",
      "Технічне обслуговування",
      "Постійна підтримка від 50$/міс",
      "Консультації та супровід"
    ]
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 sm:py-32 bg-black relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container mx-auto px-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={cardVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Послуги
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 hover:bg-white/10 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors mb-2 sm:mb-0">
                    {service.title}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-purple-400">
                    {service.price}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-white/60 mb-6 group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
                <div className="space-y-2 sm:space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                {service.duration && (
                  <div className="flex items-center gap-2 text-white/60">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">Термін: {service.duration}</span>
                  </div>
                )}
              </div>

              {/* Hover эффект */}
              <div className="absolute inset-0 border-2 border-purple-500/0 rounded-2xl group-hover:border-purple-500/50 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Что входит в каждый проект */}
        <motion.div
          variants={cardVariants}
          className="mt-8 sm:mt-16 p-4 sm:p-6 lg:p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            Що входить у кожен проєкт:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Адаптація під мобільні пристрої (responsive)",
              "SEO-базова оптимізація (мета-теги, швидкість)",
              "Зручна структура та сучасний UI",
              "Консультації та супровід після запуску"
            ].map((item, index) => (
              <div key={index} className="flex items-start sm:items-center gap-2 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-purple-400 mt-1 sm:mt-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm sm:text-base text-white/80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services; 