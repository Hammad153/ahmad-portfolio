import { ProjectType } from "./ProjectCard";

export const ProjectList: ProjectType[] = [
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
      "Resend",
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
    title: "EduNexus LMS",
    description:
      "EduNexus is a modern Learning Management System (LMS) designed to streamline academic activities, enhance student engagement, and simplify institutional management.",
    longDescription:
      "EduNexus is a full-featured Learning Management System (LMS) built to provide a seamless digital learning experience for institutions, educators, and students. The platform supports structured course delivery, role-based access control, real-time updates, and integrated communication tools. \n\nDesigned with scalability and usability in mind, EduNexus enables administrators to manage departments, classes, and payments efficiently, while students can easily access lessons, track progress, and stay updated with notifications. Built using modern technologies, it delivers a fast, responsive, and intuitive user experience across all devices.",
    image: "/images/edunexus.png",
    liveUrl: "https://tryedunexus.vercel.app/",
    githubUrl: "https://github.com/Hammad153/",
    technologies: [
      "Node.js",
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "BBBServer",
      "Resend",
    ],
    features: [
      "Role-based access control (Admin, Instructor, Student)",
      "Course and class management system",
      "Real-time updates and notifications",
      "Payment configuration by department, class, or cohort",
      "Interactive and responsive user interface",
      "Secure authentication and authorization",
    ],
  },
  {
    id: 3,
    title: "Young Mind Academy",
    description:
      "Young Mind Academy, an interactive web application designed to make Social Studies fun, engaging, and accessible for young learners! 🎓🌍",
    longDescription:
      "Young Mind Academy, an interactive web application designed to make Social Studies fun, engaging, and accessible for young learners! 🎓🌍This platform was built with love and modern tech to help students explore key topics in history, geography, culture, government, and civic responsibility—all through an intuitive and responsive interface",
    image: "/images/yga.png",
    liveUrl: "https://learn-and-thrive-junior.vercel.app/",
    githubUrl: "https://github.com/Hammad153/",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "shadcn",
      "Redux",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "Node.js",
    ],
    features: [
      "Easy-to-navigate lessons tailored for young minds",
      "Interactive quizzes to reinforce learning",
      "Beautiful, responsive design for any device",
      "Smooth animations and transitions for a modern feel",
    ],
  },
  {
    id: 4,
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
      "Supabase",
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
