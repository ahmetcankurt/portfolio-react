import React, { useEffect, useState } from 'react';

const randomCodeSnippets = [
  "const x = 10;",
  "function greet() { return 'Hello'; }",
  "let y = x * 5;",
  "console.log('Debugging');",
  "if (a > b) {}",
  "React.useState(null);",
];

const generateRandomPosition = () => ({
  top: Math.random() * window.innerHeight + 'px',
  left: Math.random() * window.innerWidth + 'px',
});

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create particles
    const particleArray = Array.from({ length: 20 }).map(() => ({
      text: randomCodeSnippets[Math.floor(Math.random() * randomCodeSnippets.length)],
      position: generateRandomPosition(),
      speed: {
        dx: Math.random() * 4 - 2, // Horizontal speed
        dy: Math.random() * 4 - 2, // Vertical speed
      },
    }));

    setParticles(particleArray);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          const newTop = parseFloat(particle.position.top) + particle.speed.dy;
          const newLeft = parseFloat(particle.position.left) + particle.speed.dx;

          // Bounce off walls
          const dx = newLeft < 0 || newLeft > window.innerWidth ? -particle.speed.dx : particle.speed.dx;
          const dy = newTop < 0 || newTop > window.innerHeight ? -particle.speed.dy : particle.speed.dy;

          return {
            ...particle,
            position: {
              top: `${Math.max(0, Math.min(window.innerHeight, newTop))}px`,
              left: `${Math.max(0, Math.min(window.innerWidth, newLeft))}px`,
            },
            speed: { dx, dy },
          };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {particles.map((particle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: particle.position.top,
            left: particle.position.left,
            color: 'white',
            fontSize: '14px',
            fontFamily: 'monospace',
            pointerEvents: 'none',
            transition: 'top 0.03s linear, left 0.03s linear', // Smooth movement
          }}
        >
          {particle.text}
        </div>
      ))}
    </div>
  );
};

export default Particles;
