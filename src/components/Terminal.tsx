import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command, X } from 'lucide-react';
import { projects } from "@/data/projects";

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    "Welcome to Florian's terminal. Type \"help\" for available commands.",
  ]);
  const [awaitingProjectSelection, setAwaitingProjectSelection] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        toggleTerminal();
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenTerminal = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-terminal', handleOpenTerminal);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-terminal', handleOpenTerminal);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [isOpen, output]);

  const toggleTerminal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 10);
    }
  };

  const processCommand = (cmd: string) => {
    const lowercaseCmd = cmd.toLowerCase().trim();
    if (!lowercaseCmd) return '';

    if (lowercaseCmd === 'help') {
      const helpCommands = {
        help: "Show this help message",
        about: "View about information",
        projects: "List all projects",
        "sub-projects": "Navigate to a specific project (numbered list)",
        contact: "Go to contact page",
        resume: "View resume",
        clear: "Clear terminal",
        exit: "Close terminal",
      };

      const longestCmdLength = Math.max(...Object.keys(helpCommands).map(cmd => cmd.length));

      return [
        "Available commands:",
        ...Object.entries(helpCommands).map(([cmd, desc]) =>
          `- ${cmd.padEnd(longestCmdLength)} : ${desc}`
        ),
      ].join('\n');
    } else if (lowercaseCmd === 'about') {
      navigate('/');
      return 'Navigating to About page...';
    } else if (lowercaseCmd === 'projects') {
      navigate('/projects');
      return 'Navigating to Projects page...';
    } else if (lowercaseCmd === 'sub-projects') {
      setAwaitingProjectSelection(true);
      return [
        "Select a project:",
        ...projects.map((p, idx) => `${idx + 1}. ${p.title}`),
        "",
        "Enter a number to navigate, or type 'random' for a random project.",
      ].join('\n');
    } else if (lowercaseCmd === 'contact') {
      navigate('/contact');
      return 'Navigating to Contact page...';
    } else if (lowercaseCmd === 'resume') {
      navigate('/resume');
      return 'Navigating to Resume page...';
    } else if (lowercaseCmd === 'clear') {
      return '__CLEAR__';
    } else if (lowercaseCmd === 'exit') {
      setIsOpen(false);
      return 'Terminal closed.';
    } else {
      return `Command not recognized: ${cmd}. Type "help" for available commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOutput = [...output, `> ${input}`];
    
    if (awaitingProjectSelection) {
      const trimmedInput = input.trim().toLowerCase();
      
      if (trimmedInput === 'random') {
        const randomProject = projects[Math.floor(Math.random() * projects.length)];
        navigate(`/projects/${randomProject.id}`);
        newOutput.push(`Navigating to random project: ${randomProject.title}...`);
        setAwaitingProjectSelection(false);
      } else {
        const projectIndex = parseInt(trimmedInput) - 1;
        if (projectIndex >= 0 && projectIndex < projects.length) {
          const selectedProject = projects[projectIndex];
          navigate(`/projects/${selectedProject.id}`);
          newOutput.push(`Navigating to ${selectedProject.title}...`);
          setAwaitingProjectSelection(false);
        } else {
          newOutput.push(`Invalid selection. Please enter a number between 1 and ${projects.length}, or type 'random'.`);
        }
      }
      
      setOutput(newOutput);
      setInput('');
      return;
    }
    
    const result = processCommand(input);

    if (result === '__CLEAR__') {
      setOutput([]);
      setAwaitingProjectSelection(false);
    } else if (result) {
      newOutput.push(result);
      setOutput(newOutput);
    }

    setInput('');
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="w-full max-w-3xl bg-black/95 border border-primary/20 rounded-lg overflow-hidden shadow-xl">
          <div className="flex items-center justify-between bg-muted/20 p-2 border-b border-border">
            <div className="flex items-center">
              <Command size={16} className="text-primary mr-2" />
              <span className="text-sm font-medium">Florian's Terminal</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-muted/30 rounded-sm"
            >
              <X size={16} />
            </button>
          </div>

          <div 
            ref={outputRef}
            className="p-4 h-80 overflow-y-auto font-mono text-sm whitespace-pre-wrap"
          >
            {output.flatMap((line, i) =>
              line.split('\n').map((subLine, j) => (
                <div
                  key={`${i}-${j}`}
                  className={`mb-1 ${subLine.startsWith('>') ? 'text-primary' : 'text-foreground'}`}
                >
                  {subLine}
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-2">
            <div className="flex items-center">
              <span className="text-primary mr-2">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent flex-1 focus:outline-none text-foreground font-mono text-sm"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export { Terminal };

