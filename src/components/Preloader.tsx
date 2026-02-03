import { useState, useEffect } from "react";
import { Brain } from "lucide-react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated logo */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse">
          <Brain className="w-10 h-10 text-primary" />
        </div>
        <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold mb-6 text-gradient">Santosh Adapa</h1>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="mt-4 text-sm text-muted-foreground">
        Loading<span className="animate-pulse">...</span>
      </p>
    </div>
  );
};

export default Preloader;
