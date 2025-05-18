
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Project, projects } from "../data/projects";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  const handleTagFilter = (tag: string) => {
    if (activeTag === tag) {
      // If clicking the active tag, clear filter
      setActiveTag(null);
      setFilteredProjects(projects);
    } else {
      // Apply filter for the selected tag
      setActiveTag(tag);
      setFilteredProjects(projects.filter(project => 
        project.tags.includes(tag)
      ));
    }
  };

  const clearFilter = () => {
    setActiveTag(null);
    setFilteredProjects(projects);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">
        Explore my work in robotics, automation, and engineering design.
      </p>

      {/* Filter tags */}
      <div className="mb-8">
        <div className="mb-2 flex items-center">
          <h2 className="text-lg font-medium mr-4">Filter by:</h2>
          {activeTag && (
            <button
              onClick={clearFilter}
              className="text-sm text-primary hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagFilter(tag)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:bg-muted/60"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>No projects found matching the selected filter.</p>
          <button 
            onClick={clearFilter}
            className="mt-4 text-primary hover:underline"
          >
            Clear filter and show all projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
