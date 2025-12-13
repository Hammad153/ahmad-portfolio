import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Gamepad2, Plane, Coffee, Lightbulb, Book } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PersonalInterests = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const hobbies = [
    {
      icon: <Book className="h-6 w-6 text-primary" />,
      title: "Reading and Exploring",
      description:
        "Exploring new ideas and perspectives through books and experiences.",
    },
    {
      icon: <Gamepad2 className="h-6 w-6 text-primary" />,
      title: "Gaming",
      description:
        "Enjoying immersive narratives and strategic challenges in video games.",
    },
    {
      icon: <Plane className="h-6 w-6 text-primary" />,
      title: "Traveling",
      description:
        "Exploring new cultures, cuisines, and landscapes around the world.",
    },
    {
      icon: <Coffee className="h-6 w-6 text-primary" />,
      title: "Coffee Enthusiast",
      description:
        "Exploring different brewing methods and discovering unique coffee beans.",
    },
  ];

  return (
    <section id="interests" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000">
            Beyond the Code
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000">
            I believe in maintaining a healthy work-life balance. Here are some
            things I enjoy doing when I'm not coding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-none bg-secondary/20"
              data-aos="flip-up"
              data-aos-delay={200 + index * 100}
              data-aos-duration="1000">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-background p-3 rounded-full shadow-sm mb-2 w-fit">
                  {hobby.icon}
                </div>
                <CardTitle className="text-lg">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-sm">
                {hobby.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="max-w-3xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="flex flex-col md:flex-row items-center gap-6 p-8">
              <div className="bg-primary/20 p-4 rounded-full flex-shrink-0">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Fun Fact</h3>
                <p className="text-foreground/80 text-lg italic">
                  "I once debugged a complex production issue while on a hiking
                  trail using just my phone!"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;
