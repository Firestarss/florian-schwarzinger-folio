
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "../data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div

      className="group bg-muted/5 border border-border rounded-lg overflow-hidden hover:border-primary/100 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 focus-within:border-primary/70"
    >
      <Link to={`/projects/${project.id}`} className="block focus:outline-none">
      <AspectRatio ratio={16 / 9} className="bg-muted/20">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={18} />
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-muted/30 text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
