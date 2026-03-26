import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label>NAME_</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>EMAIL_</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
        </div>
      </div>
      <div className="form-group">
        <label>MESSAGE_</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..." />
      </div>
      <button className="submit-btn">
        <span>SEND MESSAGE</span>
        <span className="submit-arrow">▶</span>
      </button>
    </div>
  );
};

export default ContactForm;
