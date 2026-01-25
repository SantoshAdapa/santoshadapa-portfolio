import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
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
              <div className="card-elevated rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Industry Experience</h3>
                    <p className="text-muted-foreground text-sm">
                      Completed AI/ML internships building production-ready object detection and chatbot systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-elevated rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">AI Systems Builder</h3>
                    <p className="text-muted-foreground text-sm">
                      Passionate about voice assistants, automation, and applied ML engineering solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-elevated rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Continuous Learner</h3>
                    <p className="text-muted-foreground text-sm">
                      Active in NPTEL, Coursera, and AWS certifications for latest ML techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
