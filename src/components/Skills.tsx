
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, Layers, Palette, BarChart3 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  description?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: "HTML & CSS", level: 95, description: "Semantic markup, responsive design, CSS Grid, Flexbox" },
      { name: "JavaScript/TypeScript", level: 90, description: "ES6+, TypeScript, DOM manipulation" },
      { name: "React", level: 92, description: "Hooks, Context API, React Router, Redux" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first CSS, responsive design, custom themes" },
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 88, description: "Express, RESTful APIs" },
      { name: "NestJs", level: 40, description: "Apollo Server, TypeScript" },
      { name: "MongoDB", level: 50, description: "NoSQL Database, Mongoose, Aggregation Pipeline" },
      { name: "GraphQL", level: 65, description: "Schema design, resolvers, Apollo Server" },
      { name: "SQL", level: 70, description: "PostgreSQL, MySQL, query optimization" },
    ]
  },
  {
    id: "tools",
    title: "Tools & Other",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      { name: "Git & GitHub", level: 95, description: "Version control, branching strategies, GitHub Flow" },
      { name: "Testing", level: 85, description: "Jest, React Testing Library, Cypress" },
      { name: "Accessibility", level: 90, description: "WCAG guidelines, screen readers, keyboard navigation" },
      { name: "Performance", level: 85, description: "Optimization, lazy loading, code splitting" },
      { name: "SEO", level: 80, description: "Metadata, structured data, sitemap generation" },
    ]
  },
];

const Skills = () => {

   useEffect(() => {
      AOS.init({});
    }, [])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4" 
         data-aos="flip-right"
         data-aos-delay="200"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
      >
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
             data-aos="zoom-in-down"
             data-aos-delay="300"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
          >Skills & Expertise</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          >
            I've developed a broad range of technical skills throughout my career. Here's an overview of my capabilities across different domains.
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{skill.name}</h4>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        {skill.description && (
                          <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="animate-bounce-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                >Clean Code</h3>
              </div>
              <p className="text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              >
                I write maintainable, readable, and well-documented code following best practices and design patterns.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold"
                   data-aos="fade-up"
                   data-aos-delay="200"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                >Full Stack</h3>
              </div>
              <p className="text-muted-foreground"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              >
                I can handle both frontend and backend development, providing end-to-end solutions for web applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold"
                   data-aos="fade-down"
                   data-aos-delay="200"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                >Problem Solver</h3>
              </div>
              <p className="text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              >
                I approach challenges analytically, finding efficient solutions to complex technical problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
