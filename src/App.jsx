import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import MeasuresSection from './components/MeasuresSection';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import GalleryFullPage from './components/GalleryFullPage';
import GlobalBackground from './components/GlobalBackground';
import './App.css';

const translations = {
  es: {
    galleries: 'Galería',
    about: 'Sobre mí',
    contact: 'Contacto',
    directContact: 'Contacto directo',
    featuredWorks: 'Trabajos Destacados',
    measures: 'Medidas',
    social: 'Contacto y Redes',
    model: 'Modelo profesional',
    bodyType: 'Delgado / Ectomorfo / Atlético',
    location: 'Madrid, España',
    nationality: 'Colombiano',
    langLabel: '🇪🇸',
    langAlt: 'Cambiar a inglés',
  },
  en: {
    galleries: 'Galleries',
    about: 'About',
    contact: 'Contact',
    directContact: 'Direct Contact',
    featuredWorks: 'Featured Works',
    measures: 'Measurements',
    social: 'Contact & Social',
    model: 'Professional Model',
    bodyType: 'Slim / Ectomorph / Athletic',
    location: 'Madrid, Spain',
    nationality: 'Colombian',
    langLabel: '🇬🇧',
    langAlt: 'Switch to Spanish',
  }
};

function getLang() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('es')) return 'es';
  return 'en';
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });
  const [lang, setLang] = useState(getLang());

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleLang = () => setLang(l => (l === 'es' ? 'en' : 'es'));

  const bgColors = {
    light: '#ffffff',
    dark: '#1a1a1a'
  };

  return (
    <Router>
      <motion.div
        key={theme}
        initial={{ backgroundColor: bgColors[theme === 'light' ? 'dark' : 'light'] }}
        animate={{ backgroundColor: bgColors[theme] }}
        transition={{ duration: 0.8 }}
        className="min-h-screen"
        style={{ minHeight: '100vh', minWidth: '100vw', position: 'relative' }}
      >
        <GlobalBackground darkMode={theme === 'dark'} />
        <Navbar darkMode={theme === 'dark'} setDarkMode={v => setTheme(v ? 'dark' : 'light')} lang={lang} translations={translations[lang]} toggleLang={toggleLang} />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection lang={lang} translations={translations[lang]} />
              <GallerySection lang={lang} translations={translations[lang]} />
              <MeasuresSection lang={lang} translations={translations[lang]} />
              <SocialSection lang={lang} translations={translations[lang]} />
              <ContactSection lang={lang} translations={translations[lang]} />
            </>
          } />
          <Route path="/gallery" element={<GalleryFullPage lang={lang} translations={translations[lang]} />} />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;
