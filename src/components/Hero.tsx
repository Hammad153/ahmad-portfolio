
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              Hi, I'm <span className="text-primary" >Ismail Hammad</span>
            </h1>
            <h2 
              className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              Full Stack Developer
            </h2>
            <p 
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl"
              data-aos="zoom-in-right"
              data-aos-offset="200"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              I build exceptional and accessible digital experiences for the web.
              Specializing in modern JavaScript frameworks and creating responsive, 
              user-friendly applications with clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a 
                 href="#projects"
                 data-aos="zoom-in-left"
                 data-aos-offset="200"
                 data-aos-delay="300"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                >View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="#contact"
                  data-aos="zoom-in-right"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="aspect-square relative rounded-full bg-gradient-to-br from-primary/20 to-primary/60 p-1.5 max-w-md mx-auto">
              <div className="h-full w-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src='/src/components/assets/images/ahmad.png'
                  alt="Developer" 
                  className="w-full h-full object-cover opacity-80"
                  data-aos="flip-right"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 animate-bounce">
        <a href="#projects" className="text-foreground/50 hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
