import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ShinyText from "./home/shinyText";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 md:px-12 py-8 border-b border-gray-700 text-white relative z-50">
      {/* Top bar */}
      <div className="relative flex items-center justify-between">
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ShinyText
            text="QuantumAI"
            speed={3}
            className="text-3xl md:text-4xl font-bold"
          />
        </div>

        {/* Placeholder for symmetry */}
        <div className="w-6 md:hidden" />
      </div>

      {/* Desktop menu */}
      <div className="hidden md:block mt-6">
        <ul className="flex space-x-10 absolute left-12 top-1/2 transform -translate-y-1/2">
          <li>
            <Link to="/" className="hover:text-purple-400">
              <ShinyText text="Home" speed={4} className="text-lg font-semibold" />
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-purple-400">
              <ShinyText text="Features" speed={4} className="text-lg font-semibold" />
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-purple-400">
              <ShinyText text="Products" speed={4} className="text-lg font-semibold" />
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-10 absolute right-12 top-1/2 transform -translate-y-1/2">
          <li>
            <Link to="/research" className="hover:text-purple-400">
              <ShinyText text="Research" speed={4} className="text-lg font-semibold" />
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-400">
              <ShinyText text="About Us" speed={4} className="text-lg font-semibold" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-400">
              <ShinyText text="Contact" speed={4} className="text-lg font-semibold" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center border-t border-gray-700 pt-4">
          {["Home", "Features", "Products", "Research", "About Us", "Contact"].map(
            (label) => (
              <Link
                key={label}
                to={`/${label.toLowerCase().replace(/\s+/g, "")}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-purple-400"
              >
                <ShinyText
                  text={label}
                  speed={4}
                  className="text-lg font-semibold"
                />
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
