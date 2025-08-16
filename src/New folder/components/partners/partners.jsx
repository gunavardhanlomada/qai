import React from "react";
import { motion } from "framer-motion";
import "../../styles/partners.css";

const partners = [
  {
    name: "Amazon AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    feedback: "AWS has provided us with robust cloud infrastructure to scale our quantum services globally."
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    feedback: "Google’s quantum research tools helped us push boundaries in AI modeling and training."
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    feedback: "Microsoft Azure Quantum has offered deep integration support for developing hybrid quantum applications."
  },
  {
    name: "IBM Quantum",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    feedback: "With IBM’s Qiskit framework, we accelerated quantum simulation capabilities significantly."
  },
  {
    name: "Cellarian",
    logo: "https://via.placeholder.com/100x60?text=Cellarian",
    feedback: "Cellarian’s business insights have aligned with our strategic partnerships in the healthcare sector."
  },
  {
    name: "Full Spectrum",
    logo: "https://via.placeholder.com/100x60?text=Full+Spectrum",
    feedback: "Our collaboration with Full Spectrum helped enhance our quantum-based diagnostic pipelines."
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-16 bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Elevating Possibilities Together<br />Our Trusted Partnerships
        </h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          At Quantum AI, we nurture long-term, result-driven collaborations with the world’s leading
          innovators. Our partners power our platforms, enabling cutting-edge solutions in healthcare,
          cybersecurity, finance, and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center mb-20">
        {partners.map((partner, idx) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={idx}
            className="bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] border border-cyan-400 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-cyan-400/40"
          >
            <img src={partner.logo} alt={partner.name} className="h-16 object-contain mb-4" />
            <h4 className="text-lg font-semibold text-cyan-300">{partner.name}</h4>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-2">Check what our Clients say about us</h3>
        <p className="text-gray-400">Our stellar collaborations elevate the real-world impact of our products and solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="bg-black/10 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,255,255,0.2)] hover:border-cyan-400"
          >
            <h4 className="text-cyan-300 font-semibold mb-2">{partner.name}</h4>
            <p className="text-gray-300 text-sm">{partner.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
