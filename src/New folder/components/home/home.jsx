import React from 'react';
import '../../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Explore Section */}
      <section className="explore-section">
        <h2 className="explore-title">Explore QAI Products</h2>
        <p className="explore-description">
          Dive into the future with our cutting-edge quantum-powered AI services and products.
        </p>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="product-card">Quantum Chatbot</div>
        <div className="product-card">AI Search</div>
        <div className="product-card">Secure Storage</div>
        <div className="product-card">Data Analysis</div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-description">
          <h2 className="services-title">Our Services</h2>
          <p className="services-text">We provide intelligent tools powered by quantum AI to transform your digital life.</p>
        </div>
        <div className="services-list">
          <div className="service-card">Voice Agent</div>
          <div className="service-card">AI Assistant</div>
          <div className="service-card">Prediction Engine</div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 QAI. All Rights Reserved.</p>
        <div className="footer-icons">
          <span className="dot white-dot"></span>
          <span className="dot purple-dot"></span>
        </div>
      </footer>
    </div>
  );
};

export default Home;