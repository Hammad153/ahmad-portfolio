import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ProjectList } from "./ProjectList";

const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? ProjectList
      : ProjectList.filter((project) => {
          if (activeCategory === "frontend") {
            return project.technologies.some((tech) =>
              [
                "React",
                "HTML",
                "CSS",
                "javascript",
                "TypeScript",
                "shadcn",
                "Redux",
                "Tailwind CSS",
                "Firebase",
              ].includes(tech),
            );
          }
          if (activeCategory === "fullstack") {
            return project.technologies.some((tech) =>
              [
                "Node.js",
                "ejs",
                "Express",
                "NestJs",
                "MongoDB",
                "PostgreSQL",
              ].includes(tech),
            );
          }
          return true;
        });

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
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
            data-aos-mirror="true">
            My Projects
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            Explore my latest web development projects. Each one was carefully
            crafted with attention to detail, user experience, and clean code
            principles.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="mb-8"
          onValueChange={(value) => {
            setActiveCategory(value);
            setVisibleProjects(6);
          }}>
          <div className="flex justify-center mb-8">
            <TabsList>
              {projectCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projectCategories.map((category) => (
            <TabsContent
              key={category.value}
              value={category.value}
              className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects
                  .slice(0, visibleProjects)
                  .map((project, index) => (
                    <div
                      key={project.id}
                      className="animate-bounce-in"
                      style={{ animationDelay: `${index * 0.1}s` }}>
                      <ProjectCard project={project} index={index} />
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div
          className="flex justify-center mt-8"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          {visibleProjects < filteredProjects.length ? (
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
