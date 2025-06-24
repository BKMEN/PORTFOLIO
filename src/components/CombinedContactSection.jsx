import React, { useEffect, useState } from 'react';
import './CombinedContactSection.css';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const socials = [
  { icon: <FaInstagram />, url: 'https://instagram.com/imnotyovan', label: 'Instagram' },
  { icon: <FaEnvelope />, url: 'mailto:yovanjcd@icloud.com', label: 'Email' },
  { icon: <FaWhatsapp />, url: 'https://wa.me/34602469821', label: 'WhatsApp' },
];

const CombinedContactSection = ({ lang, translations }) => {
  const [dark, setDark] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setDark(document.body.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    // Aquí puedes integrar un servicio de email real
  };

  return (
    <section className="combined-contact-section" id="contact">
      <h2>{translations.social} & {translations.directContact}</h2>
      <div className="combined-contact-content">
        <div className="social-block">
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
        </div>
        <div className="contact-block">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={lang === 'es' ? 'Nombre' : 'Name'}
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={lang === 'es' ? 'Correo electrónico' : 'Email'}
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={lang === 'es' ? 'Mensaje' : 'Message'}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">{lang === 'es' ? 'Enviar' : 'Send'}</button>
            {sent && <p className="sent-msg">{lang === 'es' ? '¡Mensaje enviado! (demo)' : 'Message sent! (demo)'}</p>}
          </form>
          <div className="contact-extra">
            <p>Email: <a href="mailto:yovanjcd@icloud.com">yovanjcd@icloud.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/34602469821" target="_blank" rel="noopener noreferrer">602469821</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedContactSection;
