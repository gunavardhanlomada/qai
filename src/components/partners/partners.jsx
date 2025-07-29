import React from "react";
import "../../styles/partners.css";

const partnersList = [
  { name: "IBM", logo: "https://logos-world.net/wp-content/uploads/2020/04/IBM-Logo.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

const Partners = () => {
  return (
    <div className="partners">
      <h2 className="partners-heading">
        Our <span>Strategic Partners</span>
      </h2>
      <p className="partners-subtext">
        Empowering AI innovation through strong collaborations and cutting-edge technologies.
      </p>

      <div className="partners-grid">
        {partnersList.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
