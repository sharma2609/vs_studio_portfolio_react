import { usePortfolio } from "../contexts/PortfolioContext";
import { useState, useRef, useEffect } from "react";
import TabsBar from "./editor/TabsBar";
import EditorContent from "./editor/EditorContent";
import TerminalPanel from "./TerminalPanel";

const EditorGroup = () => {
  const { terminalVisible, terminalHeight, setTerminalHeight } = usePortfolio();
  const [isResizing, setIsResizing] = useState(false);
  const editorGroupRef = useRef(null);

  useEffect(() => {
    const handleMove = (clientY) => {
      if (!isResizing || !editorGroupRef.current) return;

      const editorGroupRect = editorGroupRef.current.getBoundingClientRect();
      const newHeight = editorGroupRect.bottom - clientY;

      // Constrain terminal height between 150px and 80% of editor group height
      const minHeight = 150;
      const maxHeight = editorGroupRect.height * 0.8;
      const constrainedHeight = Math.max(
        minHeight,
        Math.min(newHeight, maxHeight)
      );

      setTerminalHeight(constrainedHeight);
    };

    const handleMouseMove = (e) => {
      handleMove(e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        e.preventDefault();
        handleMove(e.touches[0].clientY);
      }
    };

    const handleEnd = () => {
      setIsResizing(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleEnd);
      document.body.style.cursor = "row-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isResizing, setTerminalHeight]);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  return (
    <div className="editor-group" ref={editorGroupRef}>
      <div className="editor-container">
        <TabsBar />
        <EditorContent />
      </div>
      {terminalVisible && (
        <>
          <div
            className={`resizer-h ${isResizing ? "resizing" : ""}`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
              bottom: `${terminalHeight}px`,
            }}
          />
          <div
            className="terminal-panel"
            style={{
              height: `${terminalHeight}px`,
              bottom: 0,
            }}
          >
            <TerminalPanel />
          </div>
        </>
      )}
    </div>
  );
};

export default EditorGroup;
