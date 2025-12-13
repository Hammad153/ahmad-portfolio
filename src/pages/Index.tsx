import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import PersonalInterests from "@/components/PersonalInterests";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Certification from "@/components/Certification";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <PersonalInterests />
        <Contact />
        <Certification />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
