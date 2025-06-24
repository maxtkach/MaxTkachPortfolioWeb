'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Landing Page Development",
    price: "from $200",
    description: "One-page website for presenting a product, service or personal brand",
    features: [
      "Quick launch",
      "Modern design",
      "Mobile responsiveness",
      "Basic SEO optimization",
      "Post-launch consultations"
    ],
    duration: "3-5 days"
  },
  {
    title: "Multi-page Website",
    price: "from $400",
    description: "Structured website with multiple sections for companies, institutions and agencies",
    features: [
      "Multiple sections and pages",
      "Blog integration capability",
      "Multilingual support",
      "CMS integration",
      "Extended functionality"
    ],
    duration: "5-10 days"
  },
  {
    title: "Support",
    price: "from $20/hour",
    description: "Content updates, speed improvements, adaptation to new needs",
    features: [
      "Content updates",
      "Speed optimization",
      "Technical maintenance",
      "Ongoing support from $50/month",
      "24/7 availability"
    ]
  }
];

const ServicesEn = () => {
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
          Services
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
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
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-sm sm:text-base text-white/60 group-hover:text-white/80 transition-colors"
                    >
                      <svg 
                        className="w-5 h-5 mr-3 text-purple-400" 
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover эффект */}
              <div className="absolute inset-0 border-2 border-purple-500/0 rounded-2xl group-hover:border-purple-500/50 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesEn; 