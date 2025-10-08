import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Command, X } from "lucide-react";
import { projects } from "@/data/projects";

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    'Welcome to Florian\'s terminal. Type "help" for available commands.',
  ]);
  const [awaitingProjectSelection, setAwaitingProjectSelection] = useState(false);
  const [awaitingPassword, setAwaitingPassword] = useState(false);
  const [passwordAttempts, setPasswordAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Check for lockout on mount
  useEffect(() => {
    const lockoutEnd = localStorage.getItem("terminal_lockout");
    if (lockoutEnd) {
      const endTime = parseInt(lockoutEnd);
      if (Date.now() < endTime) {
        setIsLockedOut(true);
      } else {
        localStorage.removeItem("terminal_lockout");
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        toggleTerminal();
      }
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenTerminal = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-terminal", handleOpenTerminal);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-terminal", handleOpenTerminal);
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
    if (!lowercaseCmd) return "";

    // Hidden admin command (not in help menu)
    if (lowercaseCmd === "sudo access-all") {
      // Check if locked out
      const lockoutEnd = localStorage.getItem("terminal_lockout");
      if (lockoutEnd && Date.now() < parseInt(lockoutEnd)) {
        const remainingMinutes = Math.ceil((parseInt(lockoutEnd) - Date.now()) / 60000);
        return `Access temporarily locked. Please try again in ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}.`;
      }
      setAwaitingPassword(true);
      setPasswordAttempts(0);
      setIsLockedOut(false);
      return "Enter password:";
    }

    if (lowercaseCmd === "help") {
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

      const longestCmdLength = Math.max(...Object.keys(helpCommands).map((cmd) => cmd.length));

      return [
        "Available commands:",
        ...Object.entries(helpCommands).map(([cmd, desc]) => `- ${cmd.padEnd(longestCmdLength)} : ${desc}`),
      ].join("\n");
    } else if (lowercaseCmd === "about") {
      navigate("/");
      return "Navigating to About page...";
    } else if (lowercaseCmd === "projects") {
      navigate("/projects");
      return "Navigating to Projects page...";
    } else if (lowercaseCmd === "sub-projects") {
      setAwaitingProjectSelection(true);
      const terminalProjects = projects.filter((p) => p.showInTerminal !== false);
      return [
        "Select a project:",
        ...terminalProjects.map((p, idx) => `${idx + 1}. ${p.title}`),
        "",
        "Enter a number to navigate, or type 'random' for a random project.",
      ].join("\n");
    } else if (lowercaseCmd === "contact") {
      navigate("/contact");
      return "Navigating to Contact page...";
    } else if (lowercaseCmd === "resume") {
      navigate("/resume");
      return "Navigating to Resume page...";
    } else if (lowercaseCmd === "clear") {
      return "__CLEAR__";
    } else if (lowercaseCmd === "exit") {
      setIsOpen(false);
      return "Terminal closed.";
    } else {
      return `Command not recognized: ${cmd}. Type "help" for available commands.`;
    }
  };

  const handleTabComplete = () => {
    if (awaitingProjectSelection) {
      // Don't autocomplete during project selection
      return;
    }

    const commands = ["help", "about", "projects", "sub-projects", "contact", "resume", "clear", "exit"];
    const trimmedInput = input.trim().toLowerCase();

    if (!trimmedInput) return;

    const matches = commands.filter((cmd) => cmd.startsWith(trimmedInput));

    if (matches.length === 1) {
      // Single match - autocomplete
      setInput(matches[0]);
    } else if (matches.length > 1) {
      // Multiple matches - show suggestions
      const suggestions = matches.join("  ");
      setOutput([...output, `> ${input}`, suggestions]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      handleTabComplete();
    }
  };

  const hashPassword = async (password: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Hide password input in output
    const displayInput = awaitingPassword ? "•".repeat(input.length) : input;
    const newOutput = [...output, `> ${displayInput}`];

    if (awaitingPassword) {
      // To change password: console.log(await hashPassword("your_password"))
      const PASSWORD_HASH = "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5";

      const inputHash = await hashPassword(input.trim());
      if (inputHash === PASSWORD_HASH) {
        newOutput.push("Access granted. Listing all projects (including hidden):");
        newOutput.push("\u00A0");

        // Group projects by visibility status
        const grouped = {
          urlOnly: [] as typeof projects,
          terminalOnly: [] as typeof projects,
          publicOnly: [] as typeof projects,
          both: [] as typeof projects,
        };

        projects.forEach((p) => {
          const inProjects = p.showInProjects !== false;
          const inTerminal = p.showInTerminal !== false;

          if (!inProjects && !inTerminal) {
            grouped.urlOnly.push(p);
          } else if (inTerminal && !inProjects) {
            grouped.terminalOnly.push(p);
          } else if (inProjects && !inTerminal) {
            grouped.publicOnly.push(p);
          } else {
            grouped.both.push(p);
          }
        });

        // Display grouped projects with continuous numbering
        let projectIndex = 1;

        if (grouped.urlOnly.length > 0) {
          newOutput.push("URL-ONLY (hidden from both terminal and projects page):");
          grouped.urlOnly.forEach((p) => {
            newOutput.push(`  ${projectIndex}. ${p.title}`);
            projectIndex++;
          });
          newOutput.push("\u00A0");
        }

        if (grouped.terminalOnly.length > 0) {
          newOutput.push("TERMINAL-ONLY (hidden from projects page):");
          grouped.terminalOnly.forEach((p) => {
            newOutput.push(`  ${projectIndex}. ${p.title}`);
            projectIndex++;
          });
          newOutput.push("\u00A0");
        }

        if (grouped.publicOnly.length > 0) {
          newOutput.push("PUBLIC-ONLY (hidden from terminal):");
          grouped.publicOnly.forEach((p) => {
            newOutput.push(`  ${projectIndex}. ${p.title}`);
            projectIndex++;
          });
          newOutput.push("\u00A0");
        }

        if (grouped.both.length > 0) {
          newOutput.push("PUBLIC & TERMINAL (visible everywhere):");
          grouped.both.forEach((p) => {
            newOutput.push(`  ${projectIndex}. ${p.title}`);
            projectIndex++;
          });
          newOutput.push("\u00A0");
        }

        newOutput.push("Enter a number to navigate to any project.");
        setAwaitingPassword(false);
        setAwaitingProjectSelection(true);
      } else {
        const newAttempts = passwordAttempts + 1;
        setPasswordAttempts(newAttempts);

        if (newAttempts >= 3) {
          // Lock out for 10 minutes
          const lockoutEnd = Date.now() + 10 * 60 * 1000;
          localStorage.setItem("terminal_lockout", lockoutEnd.toString());
          setIsLockedOut(true);
          newOutput.push("Access denied. Too many failed attempts.");
          newOutput.push("This command is locked for 10 minutes.");
          setAwaitingPassword(false);
          setPasswordAttempts(0);
        } else {
          newOutput.push(`Incorrect password. Attempt ${newAttempts}/3. Try again:`);
        }
      }

      setOutput(newOutput);
      setInput("");
      return;
    }

    if (awaitingProjectSelection) {
      const trimmedInput = input.trim().toLowerCase();
      
      // Use all projects if coming from admin command, otherwise filter
      let terminalProjects;
      if (output.some((line) => line.includes("including hidden"))) {
        // Reconstruct the same order that was displayed after password authentication
        const grouped = {
          urlOnly: [] as typeof projects,
          terminalOnly: [] as typeof projects,
          publicOnly: [] as typeof projects,
          both: [] as typeof projects,
        };

        projects.forEach((p) => {
          const inProjects = p.showInProjects !== false;
          const inTerminal = p.showInTerminal !== false;

          if (!inProjects && !inTerminal) {
            grouped.urlOnly.push(p);
          } else if (inTerminal && !inProjects) {
            grouped.terminalOnly.push(p);
          } else if (inProjects && !inTerminal) {
            grouped.publicOnly.push(p);
          } else {
            grouped.both.push(p);
          }
        });

        // Flatten in the same order as displayed: url-only, terminal-only, public-only, both
        terminalProjects = [
          ...grouped.urlOnly,
          ...grouped.terminalOnly,
          ...grouped.publicOnly,
          ...grouped.both,
        ];
      } else {
        terminalProjects = projects.filter((p) => p.showInTerminal !== false);
      }

      if (trimmedInput === "random") {
        const randomEligibleProjects = projects.filter((p) => {
          if (p.showInRandomCommand !== undefined) {
            return p.showInRandomCommand;
          }
          return p.showInTerminal !== false;
        });

        if (randomEligibleProjects.length === 0) {
          newOutput.push("No projects available for random selection.");
        } else {
          const randomProject = randomEligibleProjects[Math.floor(Math.random() * randomEligibleProjects.length)];
          navigate(`/projects/${randomProject.id}`);
          newOutput.push(`Navigating to random project: ${randomProject.title}...`);
        }
        setAwaitingProjectSelection(false);
      } else {
        const projectIndex = parseInt(trimmedInput) - 1;
        if (projectIndex >= 0 && projectIndex < terminalProjects.length) {
          const selectedProject = terminalProjects[projectIndex];
          navigate(`/projects/${selectedProject.id}`);
          newOutput.push(`Navigating to ${selectedProject.title}...`);
          setAwaitingProjectSelection(false);
        } else {
          newOutput.push(
            `Invalid selection. Please enter a number between 1 and ${terminalProjects.length}, or type 'random'.`,
          );
        }
      }

      setOutput(newOutput);
      setInput("");
      return;
    }

    const result = processCommand(input);

    if (result === "__CLEAR__") {
      setOutput([]);
      setAwaitingProjectSelection(false);
      setAwaitingPassword(false);
      setPasswordAttempts(0);
    } else if (result) {
      newOutput.push(result);
      setOutput(newOutput);
    }

    setInput("");
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
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-muted/30 rounded-sm">
              <X size={16} />
            </button>
          </div>

          <div ref={outputRef} className="p-4 h-80 overflow-y-auto font-mono text-sm whitespace-pre-wrap">
            {output.flatMap((line, i) =>
              line.split("\n").map((subLine, j) => (
                <div
                  key={`${i}-${j}`}
                  className={`mb-1 ${subLine.startsWith(">") ? "text-primary" : "text-foreground"}`}
                >
                  {subLine}
                </div>
              )),
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-2">
            <div className="flex items-center">
              <span className="text-primary mr-2">{">"}</span>
              <input
                ref={inputRef}
                type={awaitingPassword ? "password" : "text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
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
