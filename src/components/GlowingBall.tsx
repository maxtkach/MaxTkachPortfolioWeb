'use client';

import { motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const sectionConfigs = {
  hero: {
    size: 400,
    color: "124,58,237", // фиолетовый
    blur: 30,
    opacity: 0.4,
    zIndex: 10
  },
  about: {
    size: 400,
    color: "124,58,237", // розовый
    blur: 40,
    opacity: 0.35,
    zIndex: 10
  },
  projects: {
    size: 500,
    color: "59,130,246", // синий
    blur: 35,
    opacity: 0.3,
    zIndex: 10
  },
  technologies: {
    size: 350,
    color: "59,130,246", // зеленый
    blur: 30,
    opacity: 0.25,
    zIndex: 10
  },
  pricing: {
    size: 300,
    color: "245,158,11", // оранжевый
    blur: 25,
    opacity: 0.3,
    zIndex: 10
  },
  contact: {
    size: 350,
    color: "139,92,246", // фиолетовый
    blur: 20,
    opacity: 0.35,
    zIndex: 10
  }
};

const GlowingBall = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState<string>('hero');

  // Создаем пружинную анимацию для X и Y координат
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const ballX = useSpring(0, springConfig);
  const ballY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Обновляем целевые значения для пружинной анимации
      ballX.set(e.clientX);
      ballY.set(e.clientY);
    };

    const updateCurrentSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', updateCurrentSection);
    updateCurrentSection();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', updateCurrentSection);
    };
  }, [ballX, ballY]);

  // Получаем конфигурацию для текущей секции
  const config = sectionConfigs[currentSection as keyof typeof sectionConfigs] || sectionConfigs.hero;

  // Маленький шарик-курсор
  const cursorSize = 12;
  const cursorOffset = cursorSize / 2;

  return (
    <>
      {/* Большой светящийся шар */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          width: config.size,
          height: config.size,
          x: ballX.get() - config.size / 2,
          y: ballY.get() - config.size / 2,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${config.color},${config.opacity}) 0%, rgba(${config.color},${config.opacity * 0.7}) 30%, rgba(${config.color},0) 70%)`,
          boxShadow: `
            0 0 ${config.size/3}px ${config.size/15}px rgba(${config.color},${config.opacity * 0.5}),
            0 0 ${config.size/2}px ${config.size/10}px rgba(${config.color},${config.opacity * 0.3})
          `,
          filter: `blur(${config.blur}px)`,
          zIndex: config.zIndex,
          transition: 'width 0.5s, height 0.5s, background 0.5s, box-shadow 0.5s, filter 0.5s, opacity 0.5s',
        }}
      />

      {/* Маленький шарик-курсор */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - cursorOffset,
          y: mousePosition.y - cursorOffset,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 50,
          mass: 0.1,
        }}
        style={{
          width: cursorSize,
          height: cursorSize,
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
    </>
  );
};

export default GlowingBall; 