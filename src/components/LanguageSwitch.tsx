'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'uk' 
            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
            : 'text-white/60 hover:text-white'
        }`}
        onClick={() => setLanguage('uk')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        UA
      </motion.button>
      <motion.button
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en' 
            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
            : 'text-white/60 hover:text-white'
        }`}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </motion.div>
  );
};

export default LanguageSwitch; 