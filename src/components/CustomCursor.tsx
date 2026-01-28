import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHoveringRef = useRef(false);
  const isInitialized = useRef(false);
  
  const cursorPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      
      // Initialize positions on first mouse move to prevent starting from (0,0)
      if (!isInitialized.current) {
        cursorPos.current = { x: e.clientX, y: e.clientY };
        ringPos.current = { x: e.clientX, y: e.clientY };
        isInitialized.current = true;
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      isHoveringRef.current = !!isInteractive;
      
      // Update ring size via CSS class
      if (ringRef.current) {
        if (isInteractive) {
          ringRef.current.classList.add("cursor-hovering");
        } else {
          ringRef.current.classList.remove("cursor-hovering");
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
      // Cursor follows precisely
      cursorPos.current.x += (targetPos.current.x - cursorPos.current.x) * 0.5;
      cursorPos.current.y += (targetPos.current.y - cursorPos.current.y) * 0.5;

      // Ring has more delay
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px)`;
      }

      if (ringRef.current) {
        // Always use consistent centering (20px = half of 40px base size)
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/50 pointer-events-none z-[9998] transition-[width,height,border-color] duration-200 origin-center ${
          isVisible ? "opacity-100" : "opacity-0"
        } [&.cursor-hovering]:w-[60px] [&.cursor-hovering]:h-[60px] [&.cursor-hovering]:border-primary/80 [&.cursor-hovering]:-translate-x-[10px] [&.cursor-hovering]:-translate-y-[10px]`}
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
