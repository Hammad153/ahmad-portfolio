
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CertificationSection from '@/components/Certification';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <CertificationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
