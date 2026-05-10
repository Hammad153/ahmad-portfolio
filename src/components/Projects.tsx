import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ProjectList } from "./ProjectList";

const cardDelayClasses = [
  "[animation-delay:0s]",
  "[animation-delay:0.1s]",
  "[animation-delay:0.2s]",
  "[animation-delay:0.3s]",
  "[animation-delay:0.4s]",
  "[animation-delay:0.5s]",
];

const Projects = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, ProjectList.length));
  };

  const showLessProjects = () => {
    setVisibleProjects(6);
  };

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            My Projects
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            Explore my latest web development projects. Each one was carefully
            crafted with attention to detail, user experience, and clean code
            principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectList.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className={`animate-bounce-in ${cardDelayClasses[index % cardDelayClasses.length]}`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <div
          className="flex justify-center mt-8"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          {visibleProjects < ProjectList.length ? (
            <Button onClick={showMoreProjects}>Load More Projects</Button>
          ) : visibleProjects > 4 ? (
            <Button variant="outline" onClick={showLessProjects}>
              Show Less
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Projects;
