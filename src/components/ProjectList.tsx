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
    liveUrl: "https://shopwithyss.com",
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
    liveUrl: "https://app.ingestlms.com.ng/",
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
    title: "SME Business Management System",
    description:
      "A comprehensive web application designed to help Small and Medium Enterprises (SMEs) manage operations, track finances, and streamline business processes efficiently.",
    longDescription:
      "The SME Business Management System is a robust web application built to support small and medium-sized businesses in managing their day-to-day operations with ease. It provides tools for handling inventory, tracking sales, managing customers, and monitoring financial activities in real-time.\n\nWith a clean and intuitive interface, business owners can gain insights into their performance, make data-driven decisions, and improve overall productivity. The system is designed to be scalable, secure, and responsive, ensuring smooth usage across devices while simplifying complex business workflows.",
    image: "/images/sme.png",
    liveUrl: "https://sme-beta.vercel.app/",
    githubUrl: "https://github.com/Hammad153/",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "shadcn",
      "Antdesign",
      "Context API",
    ],
    features: [
      "Inventory and stock management",
      "Sales and transaction tracking",
      "Customer management system",
      "Financial insights and reporting dashboard",
      "Responsive and user-friendly interface",
      "Secure and scalable backend architecture",
      "Payroll management and employee tracking",
      "Role-based access control for different user types",
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
];
