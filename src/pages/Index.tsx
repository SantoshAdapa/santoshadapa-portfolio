import { useState } from "react";
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
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen bg-background ${!isLoaded ? 'overflow-hidden h-screen' : ''}`}>
        <ScrollProgress />
        <Navbar />
        <PageTransition isLoaded={isLoaded}>
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
        </PageTransition>
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
