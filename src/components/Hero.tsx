import { ArrowRight, Github, Mail, FileText, Brain, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTypewriter } from "@/hooks/use-typewriter";
import profilePic from "@/assets/profile-pic.webp";

const Hero = () => {
  const techStack = ["Python", "Machine Learning"];
  const roles = ["AI Engineer", "ML Developer", "Software Developer", "Problem Solver"];
  const displayedRole = useTypewriter({ words: roles, typeSpeed: 80, deleteSpeed: 50, delayBetweenWords: 2000 });

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
          
          {/* Professional Avatar */}
          <div className="mb-8 animate-fade-in animate-delay-100">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105">
              <AvatarImage src={profilePic} alt="Adapa Sai Santosh" className="object-cover" />
              <AvatarFallback className="text-2xl font-bold">AS</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in animate-delay-200">
            Adapa Sai{" "}
            <span className="text-gradient">Santosh</span>
          </h1>
          
          {/* Animated Role Title */}
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 animate-fade-in animate-delay-300 h-8 sm:h-10">
            <span>{displayedRole}</span>
            <span className="inline-block w-0.5 h-6 sm:h-7 bg-primary ml-1 align-middle animate-blink" />
          </p>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-400 leading-relaxed">
            I build AI-driven systems — voice-interactive assistants and real-time computer vision applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in animate-delay-500">
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
              <a href="https://www.linkedin.com/in/santoshadapa" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
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
          <div className="flex flex-wrap items-center justify-center gap-3 mb-20 md:mb-16 animate-fade-in animate-delay-500">
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
      
      {/* AI/ML themed indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center animate-fade-in animate-delay-500">
        <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
          <Brain className="w-5 h-5 text-primary animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
