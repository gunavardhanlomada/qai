import React from "react";
import LightRays from "./LightRays";
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
<section className="partners" aria-label="Our strategic partners">
<LightRays
raysOrigin="top-center"
raysColor="#00ffff"
raysSpeed={1.5}
lightSpread={0.8}
rayLength={1.2}
followMouse={true}
mouseInfluence={0.1}
noiseAmount={0.1}
distortion={0.05}
className="light-rays-container"
/>


<h2 className="partners-heading">
<span>Our Strategic Partners</span>
</h2>


<p className="partners-subtext">
Empowering AI innovation through strong collaborations and cutting-edge technologies.
</p>


<div className="partners-grid">
{partnersList.map((partner, index) => (
<article className="partner-card" key={index} aria-label={partner.name}>
<img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" loading="lazy" />
<p>{partner.name}</p>
</article>
))}
</div>
</section>
);
};


export default Partners;