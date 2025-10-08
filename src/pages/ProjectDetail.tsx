import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Youtube, FileText, Images, CircuitBoard, Home, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
          <AspectRatio ratio={4 / 3}>
            <img 
              src={src} 
              alt={alt}
              loading="lazy"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-200" 
            />
          </AspectRatio>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-1">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-contain" 
        />
      </DialogContent>
    </Dialog>
  );
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    const projectQuotes = [
      "This project must've been left in the prototype bin...",
      "Looks like this project file got corrupted.",
      "My database search came up empty on this one.",
      "This project ID doesn't match any records in my archives.",
      "I've scanned all project folders—nothing here!",
    ];

    const randomQuote = projectQuotes[Math.floor(Math.random() * projectQuotes.length)];

    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-8 flex justify-center"
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.05, 1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            <CircuitBoard size={80} className="text-primary" />
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Project Missing
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-3">
            Can't Find That Project
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 italic">
            "{randomQuote}"
          </p>
          
          <p className="text-muted-foreground mb-8">
            The project you're searching for might have been moved, deleted, or never existed. 
            Let's explore what's actually in the workshop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                <FolderOpen size={18} className="mr-2" />
                Browse All Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <Button 
        variant="ghost" 
        asChild 
        className="mb-6 -ml-2"
      >
        <Link to="/projects">
          <ArrowLeft className="mr-2" />
          Back to Projects
        </Link>
      </Button>

      {/* Title and Tags */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span 
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{project.description}</p>

      {/* Hero Image */}
      <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={project.image}
            alt={`${project.title} - Hero image showcasing the project`}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      {/* Technologies Used */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Project Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <FileText className="text-primary mr-2" size={28} />
          Project Description
        </h2>
        <Separator className="mb-6" />
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MarkdownRenderer>{project.content}</MarkdownRenderer>
        </article>
      </div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <Images className="text-primary mr-2" size={28} />
            Project Gallery
          </h2>
          <Separator className="mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((image, index) => (
              <GalleryImage 
                key={index}
                src={image.src} 
                alt={image.alt} 
              />
            ))}
          </div>
        </div>
      )}

      {/* Demo Video */}
      {project.videoUrl && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <Youtube className="text-primary mr-2" size={28} />
            Demo Video
          </h2>
          <Separator className="mb-6" />
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src={project.videoUrl}
                title={`${project.title} - Demo`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Challenges & Solutions */}
      {project.challenges && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Challenges & Solutions</h2>
          <Separator className="mb-6" />
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownRenderer>{project.challenges}</MarkdownRenderer>
          </article>
        </div>
      )}

      {/* Key Features */}
      {project.keyFeatures && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <Separator className="mb-6" />
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownRenderer>{project.keyFeatures}</MarkdownRenderer>
          </article>
        </div>
      )}

      {/* Lessons Learned */}
      {project.lessonsLearned && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Lessons Learned</h2>
          <Separator className="mb-6" />
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownRenderer>{project.lessonsLearned}</MarkdownRenderer>
          </article>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;
