import { GraduationCap, Award } from "lucide-react";
const certifications = ["NPTEL Data Science for Engineers", "Introduction to TensorFlow for AI/ML/DL (Coursera)", "AWS & EduSkills AI/ML Internship", "Accenture Nordics Software Engineering Simulation", "CodeBeat Internship"];
const Education = () => {
  return <section id="education" className="py-24 section-alt">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <div className="card-elevated rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">GITAM University</h4>
                <p className="text-primary font-medium">B.Tech in CSE AI & ML </p>
                <p className="text-muted-foreground">CGPA: 7.90</p>
                <p className="text-sm text-muted-foreground">Aug 2022 – May 2026</p>
                <p className="text-sm text-muted-foreground">Visakhapatnam, Andhra Pradesh </p>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="card-elevated rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              
              <ul className="space-y-3">
                {certifications.map((cert, index) => <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;