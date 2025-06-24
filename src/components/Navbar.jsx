import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode, lang, translations, toggleLang }) => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Yován Castro
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">{lang === 'es' ? 'INICIO' : 'HOME'}</Link></li>
        <li>
          {location.pathname === '/gallery' ? (
            <Link to="/" className="navbar-link">{lang === 'es' ? 'INICIO' : 'HOME'}</Link>
          ) : (
            <a href="#gallery">{translations.galleries}</a>
          )}
        </li>
        <li><a href="#measures">{translations.about}</a></li>
        <li><a href="#contact">{translations.contact}</a></li>
      </ul>
      <div className="navbar-actions">
        <button
          className="lang-toggle-navbar"
          onClick={toggleLang}
          aria-label={translations.langAlt}
        >
          <span role="img" aria-label="Idioma">🌐</span>
          <span role="img" aria-label="Español">🇪🇸</span>
          |
          <span role="img" aria-label="Inglés">🇬🇧</span>
        </button>
        <button
          className="theme-toggle-navbar"
          onClick={() => setDarkMode((v) => !v)}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode
            ? (lang === 'es' ? 'Modo claro' : 'Light mode')
            : (lang === 'es' ? 'Modo oscuro' : 'Dark mode')}
          <span role="img" aria-label="Tema">{darkMode ? '🌞' : '🌙'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
