import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  isLoaded: boolean;
}

const PageTransition = ({ children, isLoaded }: PageTransitionProps) => {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isLoaded
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
