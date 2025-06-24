import React from 'react';
import './SocialSection.css';
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';

const socials = [
  { icon: <FaInstagram />, url: 'https://instagram.com/tuusuario', label: 'Instagram' },
  { icon: <FaFacebook />, url: 'https://facebook.com/tuusuario', label: 'Facebook' },
  { icon: <FaTiktok />, url: 'https://tiktok.com/@tuusuario', label: 'TikTok' },
  { icon: <FaEnvelope />, url: 'mailto:tu@email.com', label: 'Email' },
];

const SocialSection = () => (
  <section className="social-section">
    <h2>Redes Sociales</h2>
    <div className="social-links">
      {socials.map((s, idx) => (
        <a href={s.url} key={idx} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
          {s.icon}
        </a>
      ))}
    </div>
  </section>
);

export default SocialSection;
