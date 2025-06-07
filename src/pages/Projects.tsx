import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Project, projects } from "../data/projects";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingFilter, setPendingFilter] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

  const handleTagFilter = (tag: string) => {
    if (activeTag === tag) {
      setPendingFilter(null);
    } else {
      setPendingFilter(tag);
    }
    setIsAnimating(true);  // Trigger fade out
  };

  const clearFilter = () => {
    setPendingFilter(null);
    setIsAnimating(true);  // Trigger fade out
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">
        Explore my work in robotics, automation, and engineering design.
      </p>

      {/* Filter UI */}
      <div className="mb-8">
        <div className="mb-2 flex items-center">
          <h2 className="text-lg font-medium mr-4">Filter by:</h2>
          {activeTag && (
            <button onClick={clearFilter} className="text-sm text-primary hover:underline">
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

      {/* AnimatePresence wrapping the grid container */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          // After fade out, update the filtered projects and fade in
          if (pendingFilter === null) {
            setFilteredProjects(projects);
            setActiveTag(null);
          } else {
            setFilteredProjects(projects.filter(p => p.tags.includes(pendingFilter)));
            setActiveTag(pendingFilter);
          }
          setIsAnimating(false);
        }}
      >
        {!isAnimating && (
          <motion.div
            key={activeTag || "all"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <motion.div key={project.id} variants={cardVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-muted-foreground col-span-full">
                <p>No projects found matching the selected filter.</p>
                <button onClick={clearFilter} className="mt-4 text-primary hover:underline">
                  Clear filter and show all projects
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
