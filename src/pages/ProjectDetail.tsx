import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Youtube, FileText, Images } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "../data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
          <AspectRatio ratio={4 / 3}>
            <img 
              src={src} 
              alt={alt}
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
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
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
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      {/* Project Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <FileText className="text-primary mr-2" size={28} />
          Project Description
        </h2>
        <Separator className="mb-6" />
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.challenges}</ReactMarkdown>
          </article>
        </div>
      )}

      {/* Key Features */}
      {project.keyFeatures && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <Separator className="mb-6" />
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.keyFeatures}</ReactMarkdown>
          </article>
        </div>
      )}

      {/* Lessons Learned */}
      {project.lessonsLearned && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Lessons Learned</h2>
          <Separator className="mb-6" />
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.lessonsLearned}</ReactMarkdown>
          </article>
        </div>
      )}

      {/* Technologies Used */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span 
                key={tech}
                className="px-4 py-2 text-sm bg-muted/50 border border-border rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;
