import React from "react";
import "../../styles/services.css";
import DotGrid from './DotGrid';

const servicesData = [
  {
    title: "Quantum Computing Solutions",
    description:
      "Design and implement quantum algorithms to solve complex real-world problems in finance, healthcare, and more.",
  },
  {
    title: "Machine Learning Services",
    description:
      "Build and deploy cutting-edge machine learning models for prediction, automation, and personalized experiences.",
  },
  {
    title: "AI Strategy & Consulting",
    description:
      "Tailored guidance on AI adoption, data ethics, and roadmap planning for startups to enterprises.",
  },
  {
    title: "Data Engineering & Pipelines",
    description:
      "Set up secure, scalable, and real-time data infrastructure for AI readiness and analytics.",
  },
  {
    title: "Quantum & AI Training",
    description:
      "Corporate workshops and developer bootcamps in quantum programming, AI/ML, and emerging tech stacks.",
  },
  {
    title: "Custom AI Software Solutions",
    description:
      "AI-powered applications built from scratch to address domain-specific challenges in your business.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Unlock the power of human language using AI models to understand, process, and generate text and voice-based data.",
  },
  {
    title: "Quantum Cryptography",
    description:
      "Ensure next-generation security with quantum-resistant encryption protocols and secure communication systems.",
  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
  <DotGrid
    dotSize={5}
    gap={15}
    baseColor="#468a98"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
      <section className="intro">
        <h1>Empowering Industries with Quantum & AI</h1>
        <p>
          At QAI, we combine the futuristic power of quantum computing with the proven capabilities of artificial intelligence to deliver tailored, scalable, and secure solutions.
        </p>
      </section>

      <section className="cards-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
