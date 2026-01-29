import { useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface GradientOrb {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  speed: number;
  wobbleOffset: number;
  wobbleSpeed: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<GradientOrb[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const isMobile = useIsMobile();

  // Soft pastel colors for oil-paint effect - more vibrant for visibility
  const colors = [
    "rgba(236, 72, 153, 0.5)",    // Pink - increased opacity
    "rgba(168, 85, 247, 0.5)",    // Purple
    "rgba(59, 130, 246, 0.5)",    // Blue
    "rgba(34, 197, 94, 0.45)",    // Green
    "rgba(251, 146, 60, 0.45)",   // Orange
    "rgba(139, 92, 246, 0.5)",    // Violet
  ];

  const initOrbs = useCallback((width: number, height: number) => {
    const orbCount = isMobile ? 4 : 7;
    orbsRef.current = Array.from({ length: orbCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      size: (isMobile ? 250 : 400) + Math.random() * (isMobile ? 200 : 300),
      color: colors[i % colors.length],
      speed: 0.005 + Math.random() * 0.006,  // Faster movement
      wobbleOffset: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.001 + Math.random() * 0.001,  // Faster wobble
    }));
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      
      if (orbsRef.current.length === 0) {
        initOrbs(rect.width, rect.height);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const animate = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      timeRef.current += 1;

      orbsRef.current.forEach((orb, index) => {
        // Organic movement with wobble
        const wobble = Math.sin(timeRef.current * orb.wobbleSpeed + orb.wobbleOffset) * 30;
        
        // Move toward target with easing
        orb.x += (orb.targetX - orb.x) * orb.speed;
        orb.y += (orb.targetY - orb.y) * orb.speed;

        // Add wobble
        const displayX = orb.x + Math.cos(timeRef.current * orb.wobbleSpeed) * wobble;
        const displayY = orb.y + Math.sin(timeRef.current * orb.wobbleSpeed * 1.3) * wobble;

        // Mouse interaction - stronger, more visible repulsion/attraction
        if (!isMobile) {
          const dx = mouseRef.current.x - orb.x;
          const dy = mouseRef.current.y - orb.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 400;  // Larger interaction radius
          
          if (dist < maxDist && dist > 0) {
            // Stronger force that's more visible
            const force = (1 - dist / maxDist) * 80;
            // Push orbs away from cursor with visible effect
            orb.x -= (dx / dist) * force * 0.04;
            orb.y -= (dy / dist) * force * 0.04;
            
            // Also shift the target to create flowing effect
            orb.targetX -= (dx / dist) * force * 0.01;
            orb.targetY -= (dy / dist) * force * 0.01;
          }
        }

        // Reset target when close
        if (Math.abs(orb.x - orb.targetX) < 50 && Math.abs(orb.y - orb.targetY) < 50) {
          orb.targetX = Math.random() * rect.width;
          orb.targetY = Math.random() * rect.height;
        }

        // Draw gradient orb with oil-paint softness
        const gradient = ctx.createRadialGradient(
          displayX, displayY, 0,
          displayX, displayY, orb.size
        );
        
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.4, orb.color.replace(/[\d.]+\)$/, "0.2)"));
        gradient.addColorStop(0.7, orb.color.replace(/[\d.]+\)$/, "0.08)"));
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(displayX, displayY, orb.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, initOrbs]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20 dark:to-accent/10" />
      
      {/* Canvas for animated orbs */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 mix-blend-normal"
        style={{ 
          filter: "blur(50px)",  // Slightly less blur for more definition
          opacity: 1,  // Full opacity for visibility
        }}
      />
      
      {/* Fade overlay for content areas below hero */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, transparent 60%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
