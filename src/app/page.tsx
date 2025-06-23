'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitch from '@/components/LanguageSwitch';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroEn from '@/components/HeroEn';
import About from '@/components/About';
import AboutEn from '@/components/AboutEn';
import Projects from '@/components/Projects';
import ProjectsEn from '@/components/ProjectsEn';
import Services from '@/components/Services';
import ServicesEn from '@/components/ServicesEn';
import Contact from '@/components/Contact';
import ContactEn from '@/components/ContactEn';
import Technologies from '@/components/Technologies';

const MainContent = () => {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LanguageSwitch />
      {language === 'uk' ? <Hero /> : <HeroEn />}
      <Technologies />
      {language === 'uk' ? <About /> : <AboutEn />}
      {language === 'uk' ? <Projects /> : <ProjectsEn />}
      {language === 'uk' ? <Services /> : <ServicesEn />}
      {language === 'uk' ? <Contact /> : <ContactEn />}
    </main>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
} 