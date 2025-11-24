import MenuBar from "./components/MenuBar";
import ActivityBar from "./components/ActivityBar";
import Sidebar from "./components/Sidebar";
import EditorGroup from "./components/EditorGroup";
import TerminalPanel from "./components/TerminalPanel";
import StatusBar from "./components/StatusBar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <div className="vscode-window">
          <MenuBar />
          <div className="main-content">
            <ActivityBar />
            <Sidebar />
            <div className="resizer-v" />
            <EditorGroup />
          </div>
          <StatusBar />
        </div>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
