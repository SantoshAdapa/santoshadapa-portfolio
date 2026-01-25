import { ArrowRight, Github, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const techStack = ["Python", "OpenCV", "Gemini API", "Flask", "Machine Learning"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-background" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animate-delay-300" />
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-sm font-medium text-accent-foreground">Open to opportunities</span>
          </div>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in animate-delay-100">
            Adapa Sai{" "}
            <span className="text-gradient">Santosh</span>
          </h1>
          
          {/* Title */}
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 animate-fade-in animate-delay-200">
            AI/ML Engineer • Software Developer
          </p>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-300 leading-relaxed">
            I build AI-driven systems — voice-interactive assistants and real-time computer vision applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in animate-delay-400">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/SantoshAdapa" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/SantoshResume.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          {/* Tech stack */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in animate-delay-500">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="skill-badge"
                style={{ animationDelay: `${500 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
