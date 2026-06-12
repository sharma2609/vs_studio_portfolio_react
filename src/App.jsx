import { useState, useCallback, useEffect, useRef } from "react";
import MenuBar from "./components/MenuBar";
import ActivityBar from "./components/ActivityBar";
import Sidebar from "./components/Sidebar";
import EditorGroup from "./components/EditorGroup";
import TerminalPanel from "./components/TerminalPanel";
import StatusBar from "./components/StatusBar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PortfolioProvider } from "./contexts/PortfolioContext";

function App() {
  const [isResizing, setIsResizing] = useState(false);
  const mainRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !mainRef.current) return;
      const rect = mainRef.current.getBoundingClientRect();
      let newWidth = e.clientX - rect.left - 50;
      newWidth = Math.max(170, Math.min(500, newWidth));
      document.documentElement.style.setProperty("--sidebar-width", `${newWidth}px`);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <ThemeProvider>
      <PortfolioProvider>
        <div className="vscode-window">
          <MenuBar />
          <div className="main-content" ref={mainRef}>
            <ActivityBar />
            <Sidebar />
            <div
              className={`resizer-v ${isResizing ? "resizing" : ""}`}
              onMouseDown={handleMouseDown}
            />
            <EditorGroup />
          </div>
          <StatusBar />
        </div>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
