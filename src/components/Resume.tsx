
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const resumeUrl = "/resume.pdf";

  return (
    <section id="resume" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            My Resume
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Take a look at my professional experience and qualifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="zoom-in" data-aos-duration="1000">
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Professional Resume</CardTitle>
                    <CardDescription>Last updated: December 2025</CardDescription>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" asChild>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={resumeUrl} download="Ahmad_Portfolio_Resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 bg-secondary/20 min-h-[500px] flex items-center justify-center">
              <object
                data={resumeUrl}
                type="application/pdf"
                className="w-full h-[600px] md:h-[800px]"
              >
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">Unable to load PDF preview</p>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Your browser doesn't support PDF embedding. You can download the resume to view it.
                  </p>
                  <Button asChild>
                    <a href={resumeUrl} download="Ahmad_Portfolio_Resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </object>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
