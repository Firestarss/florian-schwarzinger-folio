import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { fadeInAnimation } from "@/lib/utils";
import { getProfileImage } from "@/lib/images";

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}resume-florian-schwarzinger.pdf`;

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Firestarss",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/fschwarzinger/",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:florianmschwarzinger@gmail.com",
    },
  ];

  const handleFormSuccess = () => {
    setFormSuccess(true);
  };

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      transition={fadeInAnimation.transition}
      className="max-w-5xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact</h1>
      <p className="text-muted-foreground mb-10">
        Let's connect! Feel free to reach out via the form below or through social media.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">Get in Touch</h2>
          
          {formSuccess ? (
            <div className="bg-muted/50 p-6 rounded-lg border border-border text-center">
              <h3 className="text-lg font-medium mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for your message. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setFormSuccess(false)}
                className="mt-4 text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <ContactForm onSuccess={handleFormSuccess} />
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">Connect</h2>
          
          <div className="flex items-center mb-6 gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary">
              <AvatarImage src={getProfileImage("avatar.jpg")} alt="Florian" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-lg">Florian Schwarzinger</h3>
              <p className="text-muted-foreground">Robotics Engineer</p>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">
              Find me on these platforms:
            </p>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md border border-border hover:bg-muted/50 transition-colors group"
                >
                  <span className="mr-3 text-primary">{link.icon}</span>
                  <span className="text-foreground">{link.name}</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Resume</h2>
            <p className="text-muted-foreground mb-4">
              Download my resume to learn more about my experience and qualifications.
            </p>
            <Button asChild variant="hero" size="lg" className="text-base">
              <a
                href={resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
