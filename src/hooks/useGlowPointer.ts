'use client';

import { useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const useGlowPointer = () => {
  const glowX = useSpring(0, { stiffness: 50, damping: 20 });
  const glowY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      glowX.set(e.clientX - window.innerWidth / 2);
      glowY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [glowX, glowY]);

  return { glowX, glowY };
}; 