
import { ExternalLink, Github, PanelRightOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  features?: string[];
}

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {

     useEffect(() => {
        AOS.init({});
      }, [])

      const aosType = index % 2 === 0 ? 'flip-right' : 'flip-left';

  return (
    <Card className="project-card overflow-hidden h-full flex flex-col"
    data-aos={aosType}
    data-aos-offset="200"
    data-aos-delay="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    >
      <div className="relative overflow-hidden pt-[60%]" 
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="tech-badge">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline" className="tech-badge">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <PanelRightOpen className="h-4 w-4 mr-2" />
              Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[620px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>
                {project.longDescription || project.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto rounded-md border mb-4" 
              />
              <h4 className="font-medium mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="tech-badge">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.features && (
                <>
                  <h4 className="font-medium mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex gap-3 mt-6">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Repo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="icon">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
