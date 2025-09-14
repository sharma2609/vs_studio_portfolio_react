const TerminalPane = () => {
  return (
    <div
      className="terminal-content active"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <p>
        <span className="terminal-prompt">user@portfolio:~$</span> Welcome to
        the interactive terminal!
      </p>
      <p>
        <span className="terminal-prompt">user@portfolio:~$</span> A functional
        command line is coming soon.
      </p>
    </div>
  );
};

export default TerminalPane;
