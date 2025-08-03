import React from "react";
import "../../styles/partners.css";

const partnersList = [
  { name: "IBM", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PSZr9L_o5OnoA5D5-XZkBGxm1TojgiUuNA&s" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "OpenAI", logo: "https://play-lh.googleusercontent.com/9-R3kAX_6iWGrBRN2dokgOjRr8EGrSbn2cpCY04OkBZ2knujDiOhLA-SOXqFbs7Cwrg" },
  { name: "NVIDIA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTe7GVHEJBpESbT2tjMdi7w_PFai-GTDvy2A&s" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

const Partners = () => {
  return (
    <div className="partners">
      <h2 className="partners-heading">
        <span> Our Strategic Partners</span>
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