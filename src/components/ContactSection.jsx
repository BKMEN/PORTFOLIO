import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = ({ lang, translations }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    // Aquí puedes integrar un servicio de email real
  };

  return (
    <section className="contact-section" id="contact">
      <h2>{translations.directContact}</h2>
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
    </section>
  );
};

export default ContactSection;
