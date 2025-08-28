import React, { useEffect, useState, useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
}

export const Particles: React.FC = React.memo(() => {
  const [particles, setParticles] = useState<Particle[]>([]);


  const particleList = useMemo(() => {
    const particleArray: Particle[] = [];
    
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 3 + 1, // Smaller particles
        delay: Math.random() * 8,
      });
    }
    return particleArray;
  }, []);

  useEffect(() => {
    setParticles(particleList);
  }, [particleList]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" 
         style={{ contain: 'layout style paint' }}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute rounded-full bg-theme-primary/60"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />
      ))}
    </div>
  );
});