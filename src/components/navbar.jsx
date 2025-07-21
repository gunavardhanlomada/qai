import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Quantum AI</div>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className={`tabs-container ${open ? "open" : ""}`}>
          <SlideTabs />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};


const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }
      className="slide-tabs"
    >
      <Tab setPosition={setPosition}><ShinyText text="Home" /></Tab>
      <Tab setPosition={setPosition}><ShinyText text="Product" /></Tab>
      <Tab setPosition={setPosition}><ShinyText text="Contact Us" /></Tab>
      <Tab setPosition={setPosition}><ShinyText text="Services" /></Tab>
      <Tab setPosition={setPosition}><ShinyText text="Partners" /></Tab>
      <Tab setPosition={setPosition}><ShinyText text="About Us" /></Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="tab-item"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="cursor-bg"
    />
  );
};


