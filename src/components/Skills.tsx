import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "HTML/CSS"],
  },
  {
    title: "AI/ML Frameworks",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Google Colab", "Jupyter", "VS Code", "GitHub", "AWS SageMaker"],
  },
  {
    title: "Core Strengths",
    skills: ["Problem Solving", "Critical Thinking", "Adaptability", "Communication"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Skills grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`card-elevated rounded-xl p-6 transition-all duration-500 ${
                  isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${(categoryIndex + 1) * 100}ms` }}
              >
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
