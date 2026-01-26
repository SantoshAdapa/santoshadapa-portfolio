import { Building2, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    title: "AI/ML Intern",
    company: "Krify Software Technologies",
    location: "On-Site, Kakinada",
    period: "May 2025 – June 2025",
    icon: Building2,
    highlights: [
      "Built a real-time object detection system using OpenCV and SSD models",
      "Created a speech-interactive chatbot with persona memory, handling 100+ dynamic interaction flows",
      "Integrated mic + text input with roadmap for UI improvements and persona switching",
    ],
  },
  {
    title: "AI/ML Virtual Intern",
    company: "AWS & EduSkills (AICTE)",
    location: "Remote",
    period: "April 2025 – June 2025",
    icon: Cloud,
    highlights: [
      "Completed AWS-hosted AI/ML internship with hands-on cloud-based ML workflow projects",
      "Gained exposure to SageMaker, model training, and deployment pipelines",
      "Developed understanding of cloud computing fundamentals and ML infrastructure",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 section-alt">
      <div className="container px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Timeline */}
          <div className="relative space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={index} 
                  className={`relative pl-12 md:pl-16 transition-all duration-600 ${
                    isVisible 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="timeline-line" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-accent border-2 border-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* Content card */}
                  <div className="card-elevated rounded-xl p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
