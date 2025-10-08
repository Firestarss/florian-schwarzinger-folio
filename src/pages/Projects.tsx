import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { Project, projects } from "../data/projects";
import { Input } from "@/components/ui/input";

const Projects = () => {
  const navigate = useNavigate();
  // Filter out projects that shouldn't be shown on the Projects page
  const visibleProjects = projects.filter(p => p.showInProjects !== false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(visibleProjects);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingFilter, setPendingFilter] = useState<string | null>(null);
  const [pendingSearch, setPendingSearch] = useState("");

  const allTags = Array.from(new Set(visibleProjects.flatMap(p => p.tags))).sort();

  const goToRandomProject = () => {
    const randomEligibleProjects = projects.filter(p => {
      if (p.showInRandomButton !== undefined) {
        return p.showInRandomButton;
      }
      return p.showInProjects !== false;
    });
    
    if (randomEligibleProjects.length === 0) return;
    
    const randomProject = randomEligibleProjects[Math.floor(Math.random() * randomEligibleProjects.length)];
    navigate(`/projects/${randomProject.id}`);
  };

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
    setPendingSearch("");
    setSearchQuery("");
    setIsAnimating(true);  // Trigger fade out
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPendingSearch(query);
    setIsAnimating(true);
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
        Explore my work in robotics, automation, and engineering design—or{" "}
        <button 
          onClick={goToRandomProject}
          className="text-primary hover:underline font-medium"
        >
          jump to a random project
        </button>
        .
      </p>

      {/* Search and Filter UI */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tag Filters */}
        <div>
          <div className="mb-2 flex items-center">
            <h2 className="text-lg font-medium mr-4">Filter by tag:</h2>
            {(activeTag || searchQuery) && (
              <button onClick={clearFilter} className="text-sm text-primary hover:underline">
                Clear all filters
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
      </div>

      {/* AnimatePresence wrapping the grid container */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          // After fade out, update the filtered projects and fade in
          let filtered = visibleProjects;
          
          // Apply tag filter
          if (pendingFilter !== null) {
            filtered = filtered.filter(p => p.tags.includes(pendingFilter));
            setActiveTag(pendingFilter);
          } else {
            setActiveTag(null);
          }
          
          // Apply search filter
          if (pendingSearch) {
            const query = pendingSearch.toLowerCase();
            filtered = filtered.filter(p => 
              p.title.toLowerCase().includes(query) ||
              p.description.toLowerCase().includes(query) ||
              p.tags.some(tag => tag.toLowerCase().includes(query))
            );
          }
          
          setFilteredProjects(filtered);
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
                <p>No projects found matching your search or filter.</p>
                <button onClick={clearFilter} className="mt-4 text-primary hover:underline">
                  Clear all filters and show all projects
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
