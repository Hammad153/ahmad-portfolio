import { useState } from "react";
import ProjectCard, { ProjectType } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "YS  Digital Haven",
    description:
      "YS Digital Haven, an interactive e-commerce web application for all of your digital needs! 🛒💻",
    longDescription:
      "YS Digital Haven, an interactive e-commerce web application for all of your digital needs! 🛒💻This platform was built with love and modern tech to provide a seamless shopping experience for users looking to purchase digital products such as eBooks, software, courses, and more. With a user-friendly interface, secure payment options, and personalized recommendations, YS Digital Haven is your go-to destination for all things digital.",
    image: "/images/ys-success.png",
    liveUrl: "https://ys-digital.vercel.app/",
    githubUrl: "https://github.com/Hammad153/",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "shadcn",
      "Redux",
      "Tailwind CSS",
    ],
    features: [
      "User-friendly product browsing and search",
      "Secure payment processing",
      "Personalized product recommendations",
      "Beautiful, responsive design for any device",
      "Smooth animations and transitions for a modern feel",
    ],
  },
  {
    id: 2,
    title: "Young Mind Academy",
    description:
      "Young Mind Academy, an interactive web application designed to make Social Studies fun, engaging, and accessible for young learners! 🎓🌍",
    longDescription:
      "Young Mind Academy, an interactive web application designed to make Social Studies fun, engaging, and accessible for young learners! 🎓🌍This platform was built with love and modern tech to help students explore key topics in history, geography, culture, government, and civic responsibility—all through an intuitive and responsive interface",
    image: "/images/yga.png",
    liveUrl: "https://young-mind-academy.vercel.app/",
    githubUrl: "https://github.com/Hammad153/young-mind-academy",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "shadcn",
      "Redux",
      "Tailwind CSS",
    ],
    features: [
      "Easy-to-navigate lessons tailored for young minds",
      "Interactive quizzes to reinforce learning",
      "Beautiful, responsive design for any device",
      "Smooth animations and transitions for a modern feel",
    ],
  },
  {
    id: 3,
    title: "Teemis Hub Personal",
    description:
      "Teemis Hub Personal, personal shopper connecting the diaspora with home. Buy foodstuffs, pharmaceuticals, clothing, and more",
    longDescription:
      "Teemis Hub Personal, ,personal shopper connecting the diaspora with home. Buy foodstuffs, pharmaceuticals, clothing, and more. Teemis Hub Personal is a user-friendly web application that bridges the gap between the diaspora and their home countries. It allows users to easily purchase essential items such as foodstuffs, pharmaceuticals, clothing, and more, providing a seamless shopping experience with reliable delivery services.",
    image: "/images/teemis-hub.png",
    liveUrl: "https://teemis-hub.vercel.app/",
    githubUrl: "https://github.com/Hammad153/",
    technologies: [
      "React",
      "TypeScript",
      "Supbase",
      "shadcn",
      "Redux",
      "Tailwind CSS",
    ],
    features: [
      "User-friendly product browsing and search",
      "Secure payment processing",
      "Easy tracking of orders and deliveries",
      "Beautiful, responsive design for any device",
      "Smooth animations and transitions for a modern feel",
    ],
  },
  {
    id: 4,
    title: "Truth Lie Detector",
    description:
      "An intelligent lie detector that analyzes uploaded images to detect deception. No real life data model is used in this project, This app only generate result randomly",
    longDescription:
      "Truth Lie Detector is a smart application that identifies deception by analyzing uploaded images. Whether it's a facial expression, micro-expression, or visual cue, the system supports multiple image formats and uses advanced algorithms to evaluate truthfulness with precision. Ideal for digital investigations, research, or personal use.",
    image: "/images/truth-detector.png",
    liveUrl: "https://truth-keeper-detector.vercel.app",
    githubUrl: "https://github.com/Hammad153/truth-keeper-detector",
    technologies: ["React", "Typescript", "Shadcn", "Tailwindcss"],
    features: [
      "Image-based lie detection",
      "Support for multiple image formats (JPG, PNG, etc.)",
      "Real-time analysis of facial cues",
      "File upload interface",
      "Accuracy scoring for each image",
      "User-friendly result display",
      "Secure data handling",
    ],
  },
  {
    id: 5,
    title: "WorkMateSync App",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
    longDescription:
      "A productivity tool for teams to manage tasks efficiently. Built with React, TypeScript and Firebase. Features a Kanban-style board with drag-and-drop functionality, real-time updates, task assignments, due dates, and team collaboration tools.",
    image: "/images/workmate-sync.png",
    liveUrl: "https://workmate-sync.vercel.app/",
    githubUrl: "https://github.com/Hammad153/workmate-sync",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "shadcn",
      "Redux",
      "Tailwind CSS",
    ],
    features: [
      "Drag-and-drop task management",
      "Real-time collaboration",
      "Task assignment and due dates",
      "File attachments",
      "Activity tracking",
      "Multiple board views",
    ],
  },
  {
    id: 6,
    title: "Markdown Previewer",
    description:
      "A live Markdown Previewer that lets users write GitHub-flavored markdown ",
    longDescription:
      "A live Markdown Previewer that lets users write GitHub-flavored markdown in a text area and see the rendered HTML output instantly. The app includes preloaded markdown content showcasing various markdown elements and uses the Marked.js library for accurate rendering.",
    image: "/images/md-previewer.png",
    liveUrl: "https://ahmad-markdown-previewer.vercel.app/",
    githubUrl: "https://github.com/Hammad153/markdown-previewer",
    technologies: ["React", "Tailwindcss"],
    features: [
      "Markdown input area (#editor)",
      "Live HTML preview area (#preview)",
      "Real-time markdown-to-HTML rendering",
      "Support for GitHub flavored markdown",
      "Default markdown content with full element examples",
      "Initial rendering of default markdown on load",
    ],
  },
  {
    id: 7,
    title: "Pokemon Search",
    description:
      "A creature lookup tool that retrieves and displays detailed stats for a specified creature by name or ID.",
    longDescription:
      "A dynamic creature database search tool that fetches and displays stats like HP, Attack, Types, and more based on user-inputted names or IDs.",
    image: "/images/pokemon.png",
    liveUrl: "https://ahmadcalculator.vercel.app/",
    githubUrl: "https://github.com/Hammad153/Javascript-projects",
    technologies: ["html", "css", "Javascript", "Pokemon Api"],
    features: [
      "Search input field for creature name or ID (#search-input)",
      "Search button to trigger data lookup (#search-button)",
      "Display area for creature details (#creature-name, #creature-id, etc.)",
      "Input validation for empty or invalid searches (required field)",
      "Support for searching by both name (e.g., 'Pyrolynx') and ID (e.g., '1')",
      "Dynamic rendering of creature stats (HP, Attack, Defense, etc.) and types",
      "User feedback for invalid searches (alert: 'Creature not found')",
    ],
  },
  {
    id: 8,
    title: "My Older Portfolio",
    description: "Demo portfolio built with HTML, CSS JAVASCRIPT",
    image: "/images/older-portfolio.png",
    liveUrl: "https://hamadportfo.netlify.app/",
    githubUrl: "https://github.com/Hammad153/Javascript-projects",
    technologies: ["html", "css", "Javascript"],
    features: [
      "White and Dark Mode",
      "Experience Section",
      "About Section",
      "Contact Section",
      "Projects Section",
      "Traceable Mouse Icon",
    ],
  },
  {
    id: 9,
    title: "Clock Free App",
    description:
      "A Pomodoro-style timer app that lets users manage productivity through customizable session and break lengths.",
    longDescription:
      "A Pomodoro-style timer app that lets users manage productivity through customizable session and break lengths. The timer counts down in real-time, switches automatically between work and break intervals, and plays an audio alert when time is up. Users can start, pause, reset the timer, and set custom durations (1–60 minutes) for both session and break periods.",
    image: "/images/clock-free.png",
    liveUrl: "https://ahmad-clockfree.vercel.app/",
    githubUrl: "https://github.com/Hammad153/clock-free",
    technologies: ["React", "Tailwindcss"],
    features: [
      "Break and session length controls with labels and limits",
      "Timer display with mm:ss format (#time-left)",
      "Start/Pause toggle functionality (#start_stop)",
      "Reset button to restore default states (#reset)",
      "Automatic session/break switching with labels",
      "Audio alert on timer completion (#beep)",
      "Break/session countdown synced with user settings",
    ],
  },
  {
    id: 10,
    title: "Drum Machine",
    description:
      "An interactive Drum Machine app that plays sounds when users click on drum pads or press assigned keys (Q, W, E, A, S, D, Z, X, C).",
    longDescription:
      "An interactive Drum Machine app that plays sounds when users click on drum pads or press assigned keys (Q, W, E, A, S, D, Z, X, C). Each pad triggers a unique audio clip and displays its name in real-time. The app uses HTML5 audio elements and provides both visual and auditory feedback in a responsive layout.",
    image: "/images/drum-machine.png",
    liveUrl: "https://ahmad-drum-machine.vercel.app/",
    githubUrl: "https://github.com/Hammad153/Drum-Machine",
    technologies: ["React", "Tailwindcss"],
    features: [
      "Main container element (#drum-machine)",
      "Display element for clip names (#display)",
      "Nine drum pads with keyboard trigger keys",
      "Embedded audio clips in each drum pad",
      "Mouse click to trigger drum sounds",
      "Keyboard press to trigger drum sounds",
      "Display updates with audio clip name on trigger",
    ],
  },
];

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
      ? projects
      : projects.filter((project) => {
          if (activeCategory === "frontend") {
            return project.technologies.some((tech) =>
              ["React", "HTML", "CSS", "javascript", "Tailwindcss"].includes(
                tech
              )
            );
          }
          if (activeCategory === "fullstack") {
            return project.technologies.some((tech) =>
              ["Node.js", "ejs", "Express", "MongoDB", "PostgreSQL"].includes(
                tech
              )
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
