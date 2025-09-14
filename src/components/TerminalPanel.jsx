import { usePortfolio } from "../contexts/PortfolioContext";
import ProblemsPane from "./terminal/ProblemsPane";
import TerminalPane from "./terminal/TerminalPane";
import ContactPane from "./terminal/ContactPane";
import ChatbotPane from "./terminal/ChatbotPane";

const TerminalPanel = () => {
  const { activeTerminalPane, setActiveTerminalPane } = usePortfolio();

  const panes = [
    { id: "problems", label: "PROBLEMS" },
    { id: "terminal", label: "TERMINAL" },
    { id: "contact", label: "CONTACT" },
    { id: "chatbot", label: "CHATBOT" },
  ];

  const renderActivePane = () => {
    switch (activeTerminalPane) {
      case "problems":
        return <ProblemsPane />;
      case "terminal":
        return <TerminalPane />;
      case "contact":
        return <ContactPane />;
      case "chatbot":
        return <ChatbotPane />;
      default:
        return <ChatbotPane />;
    }
  };

  return (
    <>
      <div className="terminal-header">
        {panes.map((pane) => (
          <span
            key={pane.id}
            className={`terminal-header-item ${
              activeTerminalPane === pane.id ? "active" : ""
            }`}
            onClick={() => setActiveTerminalPane(pane.id)}
          >
            {pane.label}
          </span>
        ))}
      </div>
      <div className="terminal-body">{renderActivePane()}</div>
    </>
  );
};

export default TerminalPanel;
