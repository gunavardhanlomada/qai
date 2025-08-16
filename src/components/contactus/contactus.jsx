import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/contactus.css';
import Footer from '../footer/Footer';
import apicall from '../../../Endpoint'; // make sure this points to http://localhost:5000

const Contactus = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneno: '',
    Subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${apicall}/api/contacts/request`, {
        ...form,
        phoneno: Number(form.phoneno),
      });
      alert(response.data.message || 'Message sent!');
      setForm({ name: '', email: '', phoneno: '', Subject: '', message: '' });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out for partnerships, support, or any inquiries.</p>
      </div>

      <div className="contact-container">
        <section className="contact-section">
          <h2 className="contact-title">Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phoneno"
              placeholder="Phone Number"
              value={form.phoneno}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              value={form.Subject}
              onChange={handleChange}
              required
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <div className="form-buttons">
              <button type="reset" onClick={() => setForm({ name: '', email: '', phoneno: '', Subject: '', message: '' })}>Reset</button>
              <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contactus;
