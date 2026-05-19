import { usePortfolio } from "../contexts/PortfolioContext";
import ProblemsPane from "./terminal/ProblemsPane";
import TerminalPane from "./terminal/TerminalPane";
import ContactPane from "./terminal/ContactPane";
import ChatbotPane from "./terminal/ChatbotPane";
import { handleListKeyDown } from "../utils/keyboard";

const PANES = [
  { id: "problems", label: "PROBLEMS" },
  { id: "terminal", label: "TERMINAL" },
  { id: "contact", label: "CONTACT" },
  { id: "chatbot", label: "CHATBOT" },
];

const TerminalPanel = () => {
  const { activeTerminalPane, setActiveTerminalPane } = usePortfolio();

  const renderActivePane = () => {
    switch (activeTerminalPane) {
      case "problems":
        return <ProblemsPane />;
      case "terminal":
        return <TerminalPane />;
      case "contact":
        return <ContactPane />;
      case "chatbot":
      default:
        return <ChatbotPane />;
    }
  };

  return (
    <>
      <div className="terminal-header" role="tablist">
        {PANES.map((pane) => (
          <button
            key={pane.id}
            type="button"
            role="tab"
            aria-selected={activeTerminalPane === pane.id}
            className={`terminal-header-item ${
              activeTerminalPane === pane.id ? "active" : ""
            }`}
            onClick={() => setActiveTerminalPane(pane.id)}
            onKeyDown={(e) =>
              handleListKeyDown(e, () => setActiveTerminalPane(pane.id))
            }
          >
            {pane.label}
          </button>
        ))}
      </div>
      <div className="terminal-body">{renderActivePane()}</div>
    </>
  );
};

export default TerminalPanel;
