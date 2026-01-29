import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHoveringRef = useRef(false);
  const isInitialized = useRef(false);
  
  const cursorPos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      
      if (!isInitialized.current) {
        cursorPos.current = { x: e.clientX, y: e.clientY };
        glowPos.current = { x: e.clientX, y: e.clientY };
        isInitialized.current = true;
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"]), .card-interactive'
      );
      isHoveringRef.current = !!isInteractive;
      
      if (cursorRef.current && glowRef.current) {
        if (isInteractive) {
          cursorRef.current.classList.add("cursor-hovering");
          glowRef.current.classList.add("glow-hovering");
        } else {
          cursorRef.current.classList.remove("cursor-hovering");
          glowRef.current.classList.remove("glow-hovering");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", checkHover);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, isVisible]);

  useEffect(() => {
    if (isMobile) return;

    let animationId: number;

    const animate = () => {
      // Main cursor follows with slight delay
      cursorPos.current.x += (targetPos.current.x - cursorPos.current.x) * 0.35;
      cursorPos.current.y += (targetPos.current.y - cursorPos.current.y) * 0.35;

      // Glow trail has more delay for smooth trailing
      glowPos.current.x += (targetPos.current.x - glowPos.current.x) * 0.15;
      glowPos.current.y += (targetPos.current.y - glowPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot - CRITICAL: pointer-events: none ensures no click blocking */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] transition-all duration-150 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          willChange: "transform",
          pointerEvents: "none",
        }}
      >
        {/* Inner dot */}
        <div 
          className="w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_10px_rgba(139,92,246,0.5)] [.cursor-hovering_&]:scale-0 transition-transform duration-200"
          style={{ pointerEvents: "none" }}
        />
        
        {/* Expanding ring on hover */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-violet-500/60 scale-0 [.cursor-hovering_&]:scale-100 transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          style={{ pointerEvents: "none" }}
        />
      </div>
      
      {/* Trailing glow - CRITICAL: pointer-events: none */}
      <div
        ref={glowRef}
        className={`fixed top-0 left-0 z-[9998] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          willChange: "transform",
          pointerEvents: "none",
        }}
      >
        <div 
          className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 blur-md [.glow-hovering_&]:w-14 [.glow-hovering_&]:h-14 [.glow-hovering_&]:from-violet-500/40 [.glow-hovering_&]:to-blue-500/40 transition-all duration-300"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
