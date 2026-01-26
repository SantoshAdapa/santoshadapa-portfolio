import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 section-alt">
      <div className="container px-6">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Main content */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left - Bio */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a B.Tech Computer Science student specializing in AIML, passionate about building practical AI systems that combine software engineering with real-world machine learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus is on creating AI-driven products that solve real problems — from voice-interactive chatbots with persona memory to real-time object detection systems. I believe in building technology that's not just technically sound, but genuinely useful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking opportunities to apply my skills in AI/ML engineering and software development, with a particular interest in applied ML, computer vision, and conversational AI systems.
              </p>
            </div>
            
            {/* Right - Highlights */}
            <div className="space-y-4">
              {[
                {
                  icon: Briefcase,
                  title: "Industry Experience",
                  description: "Completed AI/ML internships building production-ready object detection and chatbot systems."
                },
                {
                  icon: Sparkles,
                  title: "AI Systems Builder",
                  description: "Passionate about voice assistants, automation, and applied ML engineering solutions."
                },
                {
                  icon: GraduationCap,
                  title: "Continuous Learner",
                  description: "Active in NPTEL, Coursera, and AWS certifications for latest ML techniques."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className={`card-elevated rounded-xl p-6 transition-all duration-500 ${
                      isVisible 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
