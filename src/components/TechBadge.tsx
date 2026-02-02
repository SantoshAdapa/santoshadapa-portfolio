import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Map tech names to Simple Icons slugs and colors
const techIcons: Record<string, { slug: string; color: string }> = {
  // Languages
  "Python": { slug: "python", color: "#3776AB" },
  "R": { slug: "r", color: "#276DC3" },
  "SQL": { slug: "postgresql", color: "#4169E1" },
  "HTML/CSS": { slug: "html5", color: "#E34F26" },
  
  // AI/ML Frameworks
  "TensorFlow": { slug: "tensorflow", color: "#FF6F00" },
  "PyTorch": { slug: "pytorch", color: "#EE4C2C" },
  "Scikit-Learn": { slug: "scikitlearn", color: "#F7931E" },
  "Pandas": { slug: "pandas", color: "#150458" },
  "NumPy": { slug: "numpy", color: "#013243" },
  
  // Tools & Platforms
  "Google Colab": { slug: "googlecolab", color: "#F9AB00" },
  "Jupyter": { slug: "jupyter", color: "#F37626" },
  "VS Code": { slug: "visualstudiocode", color: "#007ACC" },
  "GitHub": { slug: "github", color: "#181717" },
  "AWS SageMaker": { slug: "amazonaws", color: "#232F3E" },
  
  // Project-specific
  "Gemini API": { slug: "google", color: "#4285F4" },
  "SpeechRecognition": { slug: "google", color: "#34A853" },
  "gTTS": { slug: "google", color: "#EA4335" },
  "OpenCV DNN": { slug: "opencv", color: "#5C3EE8" },
  "SSD MobileNet": { slug: "tensorflow", color: "#FF6F00" },
  "Caffe": { slug: "caffe2", color: "#E04A2A" },
  "Machine Learning": { slug: "tensorflow", color: "#FF6F00" },
};

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "accent";
  className?: string;
}

const TechBadge = ({ tech, variant = "default", className = "" }: TechBadgeProps) => {
  const iconData = techIcons[tech];
  
  const baseClasses = variant === "accent" 
    ? "px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
    : "skill-badge";

  if (!iconData) {
    return (
      <span className={`${baseClasses} ${className}`}>
        {tech}
      </span>
    );
  }

  const iconUrl = `https://cdn.simpleicons.org/${iconData.slug}/${iconData.color.replace("#", "")}`;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`${baseClasses} cursor-pointer transition-all hover:scale-105 ${className}`}>
            {tech}
          </span>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="flex flex-col items-center gap-2 p-3 bg-popover border border-border"
        >
          <img 
            src={iconUrl} 
            alt={`${tech} logo`}
            className="w-8 h-8"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="text-xs font-medium text-foreground">{tech}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechBadge;
