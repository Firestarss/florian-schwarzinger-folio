
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Project, projects } from "../data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Custom component for inline image with text wrapping
const InlineImage = ({ 
  src, 
  alt, 
  position = "right", 
  width = "40%", 
  className = "" 
}: { 
  src: string; 
  alt: string; 
  position?: "left" | "right"; 
  width?: string;
  className?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={`cursor-pointer rounded-md overflow-hidden border shadow-sm hover:shadow-md transition-all 
            ${position === "left" ? "float-left mr-6 mb-4" : "float-right ml-6 mb-4"} ${className}`}
          style={{ width }}
        >
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

// Gallery image component for the photo gallery section
const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer rounded-md overflow-hidden border shadow-sm hover:shadow-md transition-all">
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
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject || null);
    
    // Scroll to top when project changes
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

  // Parse embedded images in detailed description
  const renderDescriptionWithImages = () => {
    if (!project.detailedDescription) return null;
    
    // Replace image placeholders with actual images
    // Format: {image:url:position:width:alt}
    let parts = [];
    let lastIndex = 0;
    const regex = /\{image:(https?:\/\/[^:]+)(?::(left|right))?(?::(\d+%|auto))?(?::(.*?))?\}/g;
    let match;
    
    while ((match = regex.exec(project.detailedDescription)) !== null) {
      // Add text before this match
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: project.detailedDescription.substring(lastIndex, match.index)
        });
      }
      
      // Add image
      parts.push({
        type: 'image',
        src: match[1],
        position: match[2] || "right",
        width: match[3] || "40%",
        alt: match[4] || "Project image"
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add any remaining text
    if (lastIndex < project.detailedDescription.length) {
      parts.push({
        type: 'text',
        content: project.detailedDescription.substring(lastIndex)
      });
    }

    // Render all parts
    return (
      <div className="prose dark:prose-invert max-w-none">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part.type === 'text' ? (
              // Text part with formatting
              <div dangerouslySetInnerHTML={{ 
                __html: part.content.replace(
                  /\*\*(.*?)\*\*/g, '<strong>$1</strong>'
                ).replace(
                  /\*(.*?)\*/g, '<em>$1</em>'
                ).replace(
                  /\n\n/g, '</p><p>'
                )
              }} />
            ) : (
              // Image part
              <InlineImage 
                src={part.src} 
                position={part.position as "left" | "right"}
                width={part.width}
                alt={part.alt} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto"
    >
      <div className="mb-8">
        <Button 
          variant="ghost" 
          asChild 
          className="mb-4 -ml-2"
        >
          <Link to="/projects">
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-muted/60 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-8 mb-12">
        <div className="border rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Project Overview</h2>
          
          {/* Project description with enhanced formatting and inline images */}
          <div className="mb-8 clearfix">
            {/* Main description paragraph */}
            <p className="text-lg mb-4">{project.description}</p>
            
            {/* Render detailed description with inline images */}
            {renderDescriptionWithImages()}

            {/* Clear floats after inline images */}
            <div className="clear-both"></div>
          </div>

          {/* Optional: Photo Gallery Section */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Project Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((image, index) => (
                  <GalleryImage 
                    key={index}
                    src={image.src} 
                    alt={image.alt || `Gallery image ${index + 1}`} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* Optional: Video section */}
          {project.videoUrl && (
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <Youtube className="text-red-500 mr-2" size={20} />
                Project Demo
              </h3>
              <div className="border rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={project.videoUrl}
                    title={`${project.title} Demo Video`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
