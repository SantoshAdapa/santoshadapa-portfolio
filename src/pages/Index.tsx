import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="wave" />
        <About />
        <SectionDivider variant="gradient" />
        <Skills />
        <SectionDivider variant="wave" />
        <Experience />
        <SectionDivider variant="gradient" />
        <Projects />
        <SectionDivider variant="wave" />
        <Education />
        <SectionDivider variant="gradient" />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
