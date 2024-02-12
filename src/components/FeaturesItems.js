import React from 'react';
import featuresData from '../data/featuresData'; 

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map(feature => (
        <div key={feature.id} className="feature-item">
          <img src={feature.icon} alt="Feature Icon" className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
