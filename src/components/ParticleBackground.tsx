import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate random particles with larger sizes
    const generatedParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4, // 4-12px instead of 2-6px
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParticleOffset = (particleX: number, particleY: number) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const particleAbsX = (particleX / 100) * rect.width;
    const particleAbsY = (particleY / 100) * rect.height;
    
    const dx = mousePos.x - particleAbsX;
    const dy = mousePos.y - particleAbsY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const maxDistance = 150;
    const maxOffset = 30;
    
    if (distance < maxDistance) {
      const force = (1 - distance / maxDistance) * maxOffset;
      return {
        x: -(dx / distance) * force,
        y: -(dy / distance) * force,
      };
    }
    
    return { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {particles.map((particle) => {
        const offset = getParticleOffset(particle.x, particle.y);
        return (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/35 dark:bg-primary/45"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: "transform 0.3s ease-out",
              boxShadow: `0 0 ${particle.size * 3}px hsl(var(--primary) / 0.4)`,
              animation: `particle-glow ${particle.duration * 0.5}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;
