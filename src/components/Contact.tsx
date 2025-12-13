import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MailIcon, PhoneIcon, MapPin, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { contactInitialValues } from "@/validations/schemas";
import { Formik, Form, Field } from "formik";
import { Label } from "@/components/ui/label";
import { contactSchema } from "@/validations/schemas";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const { toast } = useToast();

  const handleSubmit = async (
    values: typeof contactInitialValues,
    { resetForm, setSubmitting }: any
  ) => {
    const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Ahmad Portfolio",
      message: values.message,
      subject: values.subject,
    };

    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully", res);
      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
      });
      resetForm();
    } catch (error) {
      console.error("Error sending mail", error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            Get In Touch
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you. Fill out the form below or reach out
            directly.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div
            className="lg:col-span-5 animate-slide-in"
            style={{ animationDelay: "0.1s" }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are the ways you can reach me directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MailIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-medium mb-1"
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@example.com"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true">
                      hammadismail1546@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true">
                      +2348076373128
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p
                      className="text-foreground/70"
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true">
                      ILorin, Nigeria
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-medium mb-3">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Hammad153"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors">
                      <svg
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/ismail-hammad-bb73152b9"
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors">
                      <svg
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/Ismailhamm27362"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors">
                      <svg
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className="lg:col-span-7 animate-slide-in"
            style={{ animationDelay: "0.3s" }}>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Formik
                  initialValues={contactInitialValues}
                  validationSchema={contactSchema}
                  onSubmit={handleSubmit}>
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                          className="space-y-2"
                          data-aos="fade-down"
                          data-aos-delay="200"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                          data-aos-mirror="true">
                          <Label htmlFor="name" className="text-sm font-medium">
                            Your Name
                          </Label>
                          <Field name="name">
                            {({ field, meta }: any) => (
                              <div>
                                <Input
                                  {...field}
                                  id="name"
                                  placeholder="Your Name"
                                />
                                {meta.touched && meta.error && (
                                  <div className="text-red-500 text-sm mt-1">
                                    {meta.error}
                                  </div>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                        <div
                          className="space-y-2"
                          data-aos="fade-down"
                          data-aos-delay="200"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                          data-aos-mirror="true">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium">
                            Your Email
                          </Label>
                          <Field name="email">
                            {({ field, meta }: any) => (
                              <div>
                                <Input
                                  {...field}
                                  id="email"
                                  type="email"
                                  placeholder="somebody@example.com"
                                />
                                {meta.touched && meta.error && (
                                  <div className="text-red-500 text-sm mt-1">
                                    {meta.error}
                                  </div>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                      </div>

                      <div
                        className="space-y-2"
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <Label
                          htmlFor="subject"
                          className="text-sm font-medium">
                          Subject
                        </Label>
                        <Field name="subject">
                          {({ field, meta }: any) => (
                            <div>
                              <Input
                                {...field}
                                id="subject"
                                placeholder="Project Inquiry"
                              />
                              {meta.touched && meta.error && (
                                <div className="text-red-500 text-sm mt-1">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <div
                        className="space-y-2"
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium">
                          Message
                        </Label>
                        <Field name="message">
                          {({ field, meta }: any) => (
                            <div>
                              <Textarea
                                {...field}
                                id="message"
                                placeholder="Tell me about your project, requirements, or any questions you have..."
                                rows={6}
                              />
                              {meta.touched && meta.error && (
                                <div className="text-red-500 text-sm mt-1">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full">
                        {isSubmitting ? (
                          <div
                            className="flex items-center gap-2"
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          <div
                            className="flex items-center gap-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            <Send className="h-4 w-4" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
