'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Courtside",
    description: "Веб-додаток для пошуку баскетбольних майданчиків та організації спортивних заходів",
    image: "/courtside.jpg",
    link: "https://courtside2-liard.vercel.app/",
    tags: ["Next.js", "REST API", "PostgreSQL"]
  },
  {
    title: "Miyamoto Soundworks",
    description: "Лендінг для музичної студії в Берліні",
    image: "/miyamoto.jpg",
    link: "https://maxtkach.github.io/miyamoto/",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    title: "Wine Bar",
    description: "Лендінг для винного бару",
    image: "/winebar.jpg",
    link: "https://maxtkach.github.io/wine-bar-landing/",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    title: "Pride Agency",
    description: "Лендінг для агентства нерухомості",
    image: "/pride.jpg",
    link: "https://maxtkach.github.io/Pride-agency/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Alpo Games",
    description: "Інтерактивний веб-сайт для команди розробки ігор Alpo Games",
    image: "/alpo.jpg",
    link: "https://maxtkach.github.io/Alpo-Games/",
    tags: ["React", "Framer Motion", "Three.js"]
  },
  {
    title: "Japanese Landing",
    description: 'Сучасний адаптивний сайт для ресторану японської кухні "Сакура"',
    image: "/japanese.jpg",
    link: "https://maxtkach.github.io/japanese/",
    tags: ["Next.js", "Framer Motion", "Three.js"]
  }
];

const Projects = () => {
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
    <section id="projects" className="py-20 sm:py-32 bg-black relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/10 rounded-full blur-3xl" />
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Мої проєкти
        </motion.h2>

        <motion.p
          variants={cardVariants}
          className="text-white/60 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
        >
          * Всі проєкти створені виключно для особистого портфоліо та не є комерційними
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={`${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-white/60 mb-4 line-clamp-2 group-hover:text-white/80 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white/10 rounded-full text-white/60 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-purple-400 transition-colors">
                  <span className="text-xs sm:text-sm">Переглянути проєкт</span>
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>

              {/* Hover эффект */}
              <div className="absolute inset-0 border-2 border-purple-500/0 rounded-2xl group-hover:border-purple-500/50 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 