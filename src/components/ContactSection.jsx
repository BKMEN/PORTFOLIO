import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
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
    <section className="contact-section">
      <h2>Contacto directo</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
        {sent && <p className="sent-msg">¡Mensaje enviado! (demo)</p>}
      </form>
      <div className="contact-extra">
        <p>Email: <a href="mailto:yovanjcd@icloud.com">yovanjcd@icloud.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/34602469821" target="_blank" rel="noopener noreferrer">602469821</a></p>
      </div>
    </section>
  );
};

export default ContactSection;
