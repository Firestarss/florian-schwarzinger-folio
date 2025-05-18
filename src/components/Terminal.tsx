import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { projects } from "@/data/projects";

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    "Welcome to Florian's terminal. Type \"help\" for available commands.",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

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

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
        "list-projects": "List all project titles",
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
    } else if (lowercaseCmd === 'list-projects') {
      return projects.map(p => `- ${p.title}`).join('\n');
    } else if (lowercaseCmd === 'contact') {
      navigate('/contact');
      return 'Navigating to Contact page...';
    } else if (lowercaseCmd === 'resume') {
      toast({
        title: "Resume",
        description: "Opening resume page...",
      });
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
    const result = processCommand(input);

    if (result === '__CLEAR__') {
      setOutput([]);
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

