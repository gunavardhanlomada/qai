import React, { useState } from "react";
import "../../styles/home.css";
import Footer from "../footer/Footer";
import Orb from "../home/orb"; // adjust path if orb is in a different folder
import Threads from "./Threads"; // adjust path as per your folder

const products = [
  {
    title: "Quantum Secure Migration",
    description:
      "QSleeve ensures data security against quantum attacks by using post-quantum cryptography (PQC). PQC employs advanced mathematical algorithms resistant to quantum decryption methods, safeguarding sensitive information in the future quantum era.",
  },
  {
    title: "AI-Driven Threat Detection",
    description:
      "Real-time threat analysis powered by quantum AI to detect, respond, and neutralize anomalies faster than traditional systems.",
  },
  {
    title: "Encrypted Data Vault",
    description:
      "Store your most sensitive data in our quantum-proof encrypted vault. Layered with zero-trust architecture.",
  },
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + products.length) % products.length);
  };

  return (
  <div className="products-container">
    {/* Threads Background */}
    <div className="threads-background">
      <Threads color={[0.3, 0.7, 1]} 
      amplitude={1.6}
      distance={0.1}
      enableMouseInteraction={false}  />
    </div>

    {/* Foreground content */}
    <div className="products-content">
      <div className="products-info">
        <h2>
          The Easiest Way To <br />
          <span>Secure Your Data</span>
        </h2>
        <p>
          QSleeve ensures your data stays secure, even against the quantum
          threats. Built with advanced post-quantum cryptography, it offers
          unparalleled protection, future-proofing your privacy and safeguarding
          sensitive communications.
        </p>
      </div>

      <div className="carousel">
        <div className="arrow left" onClick={handlePrev}>
          ❮
        </div>

        {products.map((product, index) => {
          let position = "card next";
          if (index === activeIndex) {
            position = "card active";
          } else if (
            index === (activeIndex - 1 + products.length) % products.length
          ) {
            position = "card prev";
          }

          return (
            <div key={index} className={position}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          );
        })}

        <div className="arrow right" onClick={handleNext}>
          ❯
        </div>
      </div>
    </div>
  </div>
);

};

const Home = () => {
  return (
    <div className="home-container">
      {/* Explore Section with Orb in the background */}
      <section className="explore-section">
        <div className="orb-background">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>

        <div className="explore-title">
          <h4>
            Explore <span>Quantum AI Products</span>
          </h4>
        </div>

        <p className="explore-description">
          Dive into the future with our cutting-edge quantum-powered AI services
          and products.
        </p>
      </section>

      {/* Product Carousel Section */}
      <Products />

      {/* Services Section */}
      <section className="services-section">
        <div className="services-description">
          <h2 className="services-title">Our Services</h2>
          <p className="services-text">
            We provide intelligent tools powered by quantum AI to transform your
            digital life.
          </p>
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
    </div>
  );
};

export default Home;