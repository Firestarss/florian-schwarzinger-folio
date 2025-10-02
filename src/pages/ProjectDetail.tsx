import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Project, projects } from "../data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject || null);
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
      className="max-w-5xl mx-auto"
    >
      {/* Header */}
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
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
        
        {/* Project Metadata */}
        {(project.techStack || project.duration || project.role || project.teamSize) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg border border-border">
            {project.duration && (
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Duration</div>
                <div className="font-medium">{project.duration}</div>
              </div>
            )}
            {project.role && (
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</div>
                <div className="font-medium">{project.role}</div>
              </div>
            )}
            {project.teamSize && (
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Team Size</div>
                <div className="font-medium">{project.teamSize} members</div>
              </div>
            )}
            {project.techStack && project.techStack.length > 0 && (
              <div className="md:col-span-2 lg:col-span-1">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Tech Stack</div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-0.5 bg-muted rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-0.5 text-muted-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hero Image */}
      <div className="mb-12 border rounded-lg overflow-hidden shadow-lg">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <div className="mb-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-primary">Key Outcomes</h2>
          <ul className="space-y-2">
            {project.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">▸</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Content Sections */}
      {project.sections && project.sections.map((section, index) => (
        <div key={index} className="mb-12">
          {section.type === 'overview' || section.type === 'technical' || section.type === 'results' ? (
            <>
              {section.title && (
                <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-border">
                  {section.title}
                </h2>
              )}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown>{section.content || ''}</ReactMarkdown>
              </div>
            </>
          ) : section.type === 'gallery' && section.images ? (
            <>
              {section.title && (
                <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-border">
                  {section.title}
                </h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.images.map((image, imgIndex) => (
                  <GalleryImage 
                    key={imgIndex}
                    src={image.src} 
                    alt={image.alt || `Gallery image ${imgIndex + 1}`} 
                  />
                ))}
              </div>
            </>
          ) : section.type === 'video' && section.videoUrl ? (
            <>
              {section.title && (
                <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-border flex items-center">
                  <Youtube className="text-primary mr-2" size={24} />
                  {section.title}
                </h2>
              )}
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={section.videoUrl}
                    title={`${project.title} - ${section.title || 'Video'}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </>
          ) : null}
        </div>
      ))}

      {/* Tech Stack (if not shown above) */}
      {project.techStack && project.techStack.length > 3 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-border">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span 
                key={tech}
                className="px-3 py-1.5 text-sm bg-muted/50 border border-border rounded-md"
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
