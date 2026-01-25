import { Github, ExternalLink, Mic, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Voice-Interactive AI Chatbot",
    icon: Mic,
    description: "A multi-modal chatbot supporting both mic and text input with dynamic persona switching, sarcasm-based dialogue, and speech-to-text integration.",
    techStack: ["Python", "Gemini API", "SpeechRecognition", "gTTS"],
    highlights: [
      "Multi-modal input supporting voice and text with <1.5s response latency",
      "Dynamic persona switching with 3+ configurable personality modes",
      "92%+ transcription accuracy across varied accents",
      "Lightweight web interface with persona memory support",
    ],
    github: "https://github.com/SantoshAdapa",
  },
  {
    title: "Real-Time Object Detection System",
    icon: Eye,
    description: "A live webcam object detection pipeline using OpenCV DNN module with SSD MobileNet, processing feeds at 15 FPS on standard hardware.",
    techStack: ["Python", "OpenCV DNN", "SSD MobileNet", "Caffe"],
    highlights: [
      "Real-time detection across 20 Pascal VOC classes",
      "Optimized inference at 65-70ms per frame",
      "Bounding boxes with confidence thresholding (>20%)",
      "Modular workflow for easy deployment and reproducibility",
    ],
    github: "https://github.com/SantoshAdapa",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Production-ready AI systems built with modern frameworks and best practices
            </p>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          {/* Projects grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="card-elevated rounded-2xl overflow-hidden group"
                >
                  {/* Project header */}
                  <div className="p-6 md:p-8 border-b border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="p-6 md:p-8 bg-muted/30">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Actions */}
                    <div className="flex gap-3 mt-6">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
