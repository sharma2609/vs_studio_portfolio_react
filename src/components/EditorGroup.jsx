import { usePortfolio } from "../contexts/PortfolioContext";
import TabsBar from "./editor/TabsBar";
import EditorContent from "./editor/EditorContent";
import TerminalPanel from "./TerminalPanel";

const EditorGroup = () => {
  const { terminalVisible } = usePortfolio();

  return (
    <div className="editor-group">
      <div className="editor-container">
        <TabsBar />
        <EditorContent />
      </div>
      <div className="resizer-h" />
      <div className={`terminal-panel ${!terminalVisible ? "hidden" : ""}`}>
        <TerminalPanel />
      </div>
    </div>
  );
};

export default EditorGroup;
