import React from 'react';
import "../../styles/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us">

      {/* Hero Section */}
      <section className="about-hero">
        <h1><span>Crafting</span> Tomorrow's <br /> <span>Innovations</span> Today</h1>
        <p>
          At Quantum AI Global, we drive the quantum revolution by merging quantum technologies with AI innovations, transforming industries through exponential intelligence.
        </p>
      </section>

      {/* Vision, Mission, Values */}
      <section className="about-boxes">
        <div className="about-box">
          <h2>Vision</h2>
          <p>Empowering the world with Quantum-AI-driven breakthroughs that redefine innovation across industries.</p>
        </div>
        <div className="about-box">
          <h2>Mission</h2>
          <p>To pioneer real-world quantum computing and AI integration for transformative, scalable solutions globally.</p>
        </div>
        <div className="about-box">
          <h2>Values</h2>
          <p>Innovation, Integrity, Collaboration, Sustainability—our core values drive impactful tech progress.</p>
        </div>
      </section>

      {/* Journey Video */}
      <section className="about-video">
        
        <h2>Our Journey</h2>
        <p>Learn about our evolution in quantum technologies and artificial intelligence shaping the future.</p>
        <video controls width="100%">
          <source src="/video/quantum-journey.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Portfolio of Products */}
      <section className="about-products">
        <h2>Our Portfolio of <span>Products</span> Includes</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Quantum Computing Hardware</h3>
            <p>Cutting-edge qubit processors with scalable architectures for high-performance computation.</p>
          </div>
          <div className="product-card">
            <h3>AI Software Platforms</h3>
            <p>Powerful frameworks integrating machine learning, NLP, and quantum algorithms seamlessly.</p>
          </div>
          <div className="product-card">
            <h3>Quantum-AI Services</h3>
            <p>Consultation, deployment, and support for enterprise-level Quantum-AI solutions.</p>
          </div>
        </div>
      </section>

      {/* Team Section Title */}
      <section className='aboutteam'>
        <h2>Meet Our <span>Team</span></h2>
        <p>The people powering our quantum-AI breakthroughs.</p>
      </section>

      {/* Team Sections */}
      <section className="about-team">

        {/* Core Team */}
        <div className="team-category">
          <h3>Core Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/team1.jpg" alt="Core Member" />
              <p>Mr. Sanjay Chinnas</p>
              <span>Founder & CEO</span>
            </div>
            <div className="team-member">
              <img src="/images/team1.jpg" alt="Core Member" />
              <p>Ms. Anita Rao</p>
              <span>CTO</span>
            </div>
            <div className="team-member">
              <img src="/images/team1.jpg" alt="Core Member" />
              <p>Dr. Harsha Mehta</p>
              <span>Chief Scientist</span>
            </div>
          </div>
        </div>

        {/* Advisory */}
        <div className="team-category">
          <h3>Advisory</h3>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/advisor1.jpg" alt="Advisor" />
              <p>Michael Lin</p>
              <span>Tech Advisor</span>
            </div>
            <div className="team-member">
              <img src="/images/advisor1.jpg" alt="Advisor" />
              <p>Sarah Wong</p>
              <span>AI Policy Advisor</span>
            </div>
            <div className="team-member">
              <img src="/images/advisor1.jpg" alt="Advisor" />
              <p>Dr. Naveen Patel</p>
              <span>Quantum Research Advisor</span>
            </div>
          </div>
        </div>

        {/* Mentors */}
        <div className="team-category">
          <h3>Mentors</h3>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/mentor1.jpg" alt="Mentor" />
              <p>Dr. Jayas</p>
              <span>Quantum Physicist</span>
            </div>
            <div className="team-member">
              <img src="/images/mentor1.jpg" alt="Mentor" />
              <p>Prof. Ramesh Rao</p>
              <span>AI Researcher</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutUs;