'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    category: "Frontend",
    techs: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'SASS', 'Framer Motion']
  },
  {
    category: "Backend",
    techs: ['Node.js', 'Express.js', 'REST API', 'GraphQL']
  },
  {
    category: "Database",
    techs: ['PostgreSQL', 'MongoDB', 'Prisma', 'Supabase']
  },
  {
    category: "Tools",
    techs: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel']
  }
];

const Technologies = () => {
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

  return (
    <section id="technologies" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Фоновый градиент */}
      <div 
        className="absolute inset-0 bg-[#fafafa]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.03) 0%, transparent 50%),
            linear-gradient(60deg, rgba(124, 58, 237, 0.02) 0%, rgba(236, 72, 153, 0.02) 100%)
          `,
        }}
      />

      {/* Декоративный паттерн */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div 
        className="container mx-auto px-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Мій технологічний стек
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map(({ category, techs }) => (
              <motion.div 
                key={category}
                className="backdrop-blur-[2px] bg-white/40 rounded-xl p-6 shadow-sm"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-purple-600/80 mb-4">{category}</h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {techs.map((tech) => (
                    <motion.div
                      key={tech}
                      className="group"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="block px-3 py-1.5 text-sm rounded-lg bg-white/70 backdrop-blur-sm text-gray-700 hover:text-purple-600 transition-all duration-300 border border-purple-100/50 hover:border-purple-200 hover:bg-white shadow-sm hover:shadow-md"
                        whileHover={{
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies; 