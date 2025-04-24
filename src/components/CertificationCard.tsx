import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export interface CertificationType {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  features?: string[];
  certificateUrl: string;
}

interface CertificationCardProps {
  index: number;
  certification: CertificationType;
}

const CertificationCard = ({ index, certification }: CertificationCardProps) => {

     useEffect(() => {
        AOS.init({});
      }, [])

      const aosType = index % 2 === 0 ? 'flip-right' : 'flip-left';

  return (
    <Card className="overflow-hidden h-full flex flex-col" 
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
          src={certification.image} 
          alt={certification.title} 
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{certification.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{certification.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {certification.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">View Details</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{certification.title}</DialogTitle>
              </DialogHeader>
              <img src={certification.image} alt={certification.title} className="w-full rounded-md mb-4" />
              <p className="text-sm mb-4">{certification.longDescription || certification.description}</p>
              <Button asChild>
                  <a href={certification.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />View Certificate
                  </a>
              </Button>
              {certification.features && (
                <>
                  <h4 className="font-medium mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {certification.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex gap-3 mt-4">
                {/* <Button asChild>
                  <a href={certification.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />View Certificate
                  </a>
                </Button> */}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;