// import React from "react";
import "../../styles/products.css";
import React from "react";

const products = [
  { name: "Quantum Processor", info: "Advanced computing power at atomic scale." },
  { name: "Quantum AI Chip", info: "AI acceleration using quantum entanglement." },
  { name: "Quantum Cloud", info: "Quantum computing as a service." },
  { name: "Quantum Cryptography", info: "Unbreakable communication encryption." },
  { name: "Quantum Simulator", info: "Model molecules and physics interactions." },
  { name: "Quantum Network Tool", info: "Next-gen quantum internet infrastructure." },
  { name: "Quantum AI Vision", info: "Visual data processing using quantum image encoding." },
  { name: "Quantum NLP Engine", info: "Language modeling using quantum circuits." },
  { name: "Quantum Data Miner", info: "Massive-scale quantum-powered data analysis." },
  { name: "Quantum Brain Interface", info: "AI-enhanced human-brain-to-machine connectivity." },
  { name: "Quantum Edge AI", info: "Run quantum AI models on edge devices securely." },
  { name: "Quantum Sentiment AI", info: "Real-time emotion detection with quantum power." },
];

function Products() {
  return (
    <div className="products-page">
      <section className="products-intro">
        <h1 className="gradient-text">Quantum AI Products</h1>
        <p>
          Dive into the future of technology with our innovative Quantum AI products. These solutions span across
          sectors like healthcare, finance, communication, defense, and intelligence.
        </p>
      </section>

      <section className="hex-grid">
        {products.map((product, idx) => (
          <div className="hex" key={idx}>
            <div className="hex-inner">
              <div className="hex-front">{product.name}</div>
              <div className="hex-back">{product.info}</div>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>© 2025 Quantum AI Innovations | All rights reserved</p>
      </footer>
    </div>
  );
}

export default Products;