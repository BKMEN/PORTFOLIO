import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import MeasuresSection from './components/MeasuresSection';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode((v) => !v)}
        aria-label="Cambiar modo claro/oscuro"
      >
        {darkMode ? 'Modo claro' : 'Modo oscuro'}
      </button>
      <HeroSection />
      <GallerySection />
      <MeasuresSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}

export default App;
