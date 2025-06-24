import React, { useEffect, useState } from 'react';
import './SocialSection.css';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const socials = [
  { icon: <FaInstagram />, url: 'https://instagram.com/imnotyovan', label: 'Instagram' },
  { icon: <FaEnvelope />, url: 'mailto:yovanjcd@icloud.com', label: 'Email' },
  { icon: <FaWhatsapp />, url: 'https://wa.me/34602469821', label: 'WhatsApp' },
];

const SocialSection = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.body.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="social-section">
      <h2>Contacto y Redes</h2>
      <div className="social-links">
        {socials.map((s, idx) => (
          <a href={s.url} key={idx} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            {s.icon}
          </a>
        ))}
      </div>
      <div className="instagram-embed">
        <iframe
          src={`https://www.instagram.com/imnotyovan/embed/?theme=${dark ? 'dark' : 'light'}`}
          width="320"
          height="440"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          title="Instagram de Yován Castro"
          style={{ borderRadius: '1rem', marginTop: '2rem', width: '100%', maxWidth: '350px', background: dark ? '#23233a' : '#fff' }}
        ></iframe>
      </div>
    </section>
  );
};

export default SocialSection;
