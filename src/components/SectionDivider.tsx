const SectionDivider = ({ variant = "wave" }: { variant?: "wave" | "gradient" }) => {
  if (variant === "gradient") {
    return (
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-16 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-16 text-muted/30"
        viewBox="0 0 1440 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 22L60 25.3C120 28.7 240 35.3 360 36.5C480 37.7 600 33.3 720 30.2C840 27 960 25 1080 26.8C1200 28.7 1320 34.3 1380 37.2L1440 40V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
