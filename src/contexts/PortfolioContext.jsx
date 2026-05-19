import { createContext, useContext, useState, useEffect, useCallback } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

const getInitialSidebarCollapsed = () =>
  typeof window !== "undefined" && window.innerWidth <= 768;

export const PortfolioProvider = ({ children }) => {
  const [activeView, setActiveView] = useState("explorer");
  const [openTabs, setOpenTabs] = useState(new Map());
  const [activeTab, setActiveTab] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    getInitialSidebarCollapsed
  );
  const [terminalVisible, setTerminalVisible] = useState(true);
  const [activeTerminalPane, setActiveTerminalPane] = useState("chatbot");
  const [terminalHeight, setTerminalHeight] = useState(250);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarCollapsed(true);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      if (e.key === "b") {
        e.preventDefault();
        setSidebarCollapsed((prev) => !prev);
      }
      if (e.key === "j") {
        e.preventDefault();
        setTerminalVisible((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openFile = useCallback((fileName) => {
    setOpenTabs((prev) => {
      if (prev.has(fileName)) return prev;
      const next = new Map(prev);
      next.set(fileName, { fileName });
      return next;
    });
    setActiveTab(fileName);
  }, []);

  const closeFile = useCallback(
    (fileName) => {
      setOpenTabs((prev) => {
        const next = new Map(prev);
        next.delete(fileName);

        if (activeTab === fileName) {
          const remaining = Array.from(next.keys());
          setActiveTab(
            remaining.length > 0 ? remaining[remaining.length - 1] : null
          );
        }

        return next;
      });
    },
    [activeTab]
  );

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarCollapsed(true);
  }, []);

  const toggleTerminal = useCallback(() => {
    setTerminalVisible((prev) => !prev);
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        activeView,
        setActiveView,
        openTabs,
        activeTab,
        openFile,
        closeFile,
        sidebarCollapsed,
        toggleSidebar,
        closeSidebar,
        terminalVisible,
        toggleTerminal,
        activeTerminalPane,
        setActiveTerminalPane,
        terminalHeight,
        setTerminalHeight,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
