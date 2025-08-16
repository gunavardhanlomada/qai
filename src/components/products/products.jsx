import React from "react";
import "../../styles/products.css";
import Footer from "../footer/Footer";

const products = [
  { name: "Quantum Processor", info: "Advanced computing power at atomic scale.", img: "/images/quantum1.jpg" },
  { name: "Quantum AI Chip", info: "AI acceleration using quantum entanglement.", img: "/images/quantum2.jpg" },
  { name: "Quantum Cloud", info: "Quantum computing as a service.", img: "/images/quantum3.jpg" },
  { name: "Quantum Cryptography", info: "Unbreakable communication encryption.", img: "/images/quantum4.jpg" },
  { name: "Quantum Simulator", info: "Model molecules and physics interactions.", img: "/images/quantum5.jpg" },
  { name: "Quantum Network Tool", info: "Next-gen quantum internet infrastructure.", img: "/images/quantum6.jpg" },
  // { name: "Quantum Network Tool", info: "Next-gen quantum internet infrastructure.", img: "/images/quantum6.jpg" },
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

      <div className="card-grid">
        {products.map((product, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="flip-card-back">
                <h3>{product.name}</h3>
                <p>{product.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;