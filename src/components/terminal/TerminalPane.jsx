import { usePortfolio } from "../../contexts/PortfolioContext";

const COMMANDS = [
  { cmd: "open about.md", desc: "View skills and background" },
  { cmd: "open projects.js", desc: "See AI/ML projects" },
  { cmd: "open contact.html", desc: "Contact information" },
];

const TerminalPane = () => {
  const { openFile, setActiveTerminalPane } = usePortfolio();

  return (
    <div
      className="terminal-content active"
    >
      <p>
        <span className="terminal-prompt">user@portfolio:~$</span> Welcome! Try
        these shortcuts or switch to the CHATBOT tab.
      </p>
      {COMMANDS.map(({ cmd, desc }) => (
        <p key={cmd}>
          <button
            type="button"
            className="terminal-command-link"
            onClick={() => {
              const file = cmd.replace("open ", "");
              openFile(file);
            }}
          >
            <span className="terminal-prompt">user@portfolio:~$</span> {cmd}
          </button>
          <span className="terminal-command-desc"> — {desc}</span>
        </p>
      ))}
      <p>
        <button
          type="button"
          className="terminal-command-link"
          onClick={() => setActiveTerminalPane("chatbot")}
        >
          <span className="terminal-prompt">user@portfolio:~$</span> chatbot
        </button>
        <span className="terminal-command-desc"> — Ask the portfolio assistant</span>
      </p>
    </div>
  );
};

export default TerminalPane;
