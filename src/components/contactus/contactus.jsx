import React from 'react';
import '../../styles/contactus.css';
import Footer from '../footer/Footer';

const Contactus = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out for partnerships, support, or any inquiries.</p>
      </div>

      <div className="contact-container">
        <section className="contact-section">
          <h2 className="contact-title">Get in Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Company" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <div className="form-buttons">
              <button type="reset">Reset</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contactus;
