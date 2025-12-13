import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Uraime Marvelous",
    role: "UI/UX Designer & Product Manager",
    company: "Async Techs",
    content:
      "Ahmad is an exceptional developer who brings both technical expertise and creative problem-solving to the table. His work on our e-commerce platform significantly improved our user conversion rates.",
    rating: 5,
    initials: "SJ",
  },
  {
    id: 2,
    name: "Adebayo Babatunde",
    role: "Fullstack Developer",
    company: "Async Techs",
    content:
      "Working with Ahmad was a pleasure. He delivered high-quality code, communicated effectively throughout the project, and went above and beyond to ensure the application was performant and scalable.",
    rating: 5,
    initials: "MC",
  },
  {
    id: 3,
    name: "Ezra Kolo Tzado",
    role: "Manager",
    company: "Async Techs",
    content:
      "I was impressed by Ahmad's ability to translate our complex design requirements into a pixel-perfect, responsive frontend. He has a keen eye for detail and a deep understanding of modern web technologies.",
    rating: 5,
    initials: "JW",
  },
  {
    id: 4,
    name: "Mr Sabi",
    role: "Founder",
    company: "Async Techs",
    content:
      "Highly recommended! Ahmad built our MVP in record time without compromising on quality. His knowledge of the full stack stack helped us make the right architectural decisions early on.",
    rating: 5,
    initials: "DR",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    AOS.init({});

    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000">
            What People Say
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000">
            I'm proud to have collaborated with amazing clients and colleagues.
            Here's what they have to say about my work.
          </p>
        </div>

        <div
          className="max-w-5xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] pl-4 min-w-0">
                  <div className="h-full p-2">
                    <Card className="h-full bg-background border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8 flex flex-col h-full">
                        <Quote className="h-10 w-10 text-primary/20 mb-6" />

                        <div className="flex-grow mb-6">
                          <p className="text-foreground/80 italic text-lg leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </div>

                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto border-t pt-6">
                          <Avatar className="h-12 w-12 border-2 border-primary/10">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="bg-primary/5 text-primary font-bold">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <h4 className="font-bold text-foreground">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-foreground/60">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-primary/20 hover:bg-primary/40"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
