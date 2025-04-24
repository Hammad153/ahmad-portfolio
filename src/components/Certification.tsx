import CertificationCard, { CertificationType } from './CertificationCard';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const certifications: CertificationType[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    description: "FreeCodeCamp certification on building responsive websites.",
    image: "/images/responsive-web-design.png",
    certificateUrl: "https://freecodecamp.org/certification/Ismail-Hammad-Adekola/responsive-web-design",
    technologies: ["HTML", "CSS", "Flexbox", "Media Queries", "Web Design"],
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structure",
    description: "FreeCodeCamp certification focused on core JavaScript concepts.",
    image: "/images/javascript-dsa.png",
    certificateUrl: "https://www.freecodecamp.org/certification/Ismail-Hammad-Adekola/javascript-algorithms-and-data-structures-v8",
    technologies: ["JavaScript", "ES6", "Data Structures and Algortithms", "OOP",],
  },
  {
    id: 2,
    title: "JavaScript(Intermediate)",
    description: "HackerRank certification focused on core JavaScript intermediate concepts.",
    image: "/images/hackerRank.png",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/3e22a621f24f",
    technologies: ["JavaScript", "ES6", "Data Structures", "OOP"],
  },
  {
    id: 3,
    title: "ReactJs",
    description: "FreeCodeCamp certification focused on core ReactJs concepts.",
    image: "/images/frontend-dev-libararies.png",
    certificateUrl: "https://freecodecamp.org/certification/Ismail-Hammad/front-end-development-libraries",
    technologies: ["JavaScript", "ES6", "React", "TailwindCSS", "JQuery", "SASS", "BootStrap"],
  },
];

const CertificationSection = () => {

    useEffect(() => {
      AOS.init({});
    }, [])

  return (
    <section id="certifications" className="py-20 bg-background/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="300"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
          >Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto"
           data-aos="fade-down"
           data-aos-offset="200"
           data-aos-delay="200"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
          >
            Here are some certifications I’ve earned through consistent learning and project application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={cert.id}>
              <CertificationCard certification={cert} index={index} />
            </div>
          ))}
          </div>
      </div>
    </section>
  );
};

export default CertificationSection;
