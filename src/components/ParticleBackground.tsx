import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="particles">
      {Array.from({ length: 50 }, (_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;