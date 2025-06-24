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
      <h2>Contacto</h2>
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
    </section>
  );
};

export default ContactSection;
