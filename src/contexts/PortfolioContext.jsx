import { createContext, useContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [activeView, setActiveView] = useState("explorer");
  const [openTabs, setOpenTabs] = useState(new Map());
  const [activeTab, setActiveTab] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [terminalVisible, setTerminalVisible] = useState(true);
  const [activeTerminalPane, setActiveTerminalPane] = useState("chatbot");
  const [terminalHeight, setTerminalHeight] = useState(250);

  // Auto-collapse sidebar on mobile on initial load
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setSidebarCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openFile = (fileName) => {
    const newTabs = new Map(openTabs);

    if (!newTabs.has(fileName)) {
      newTabs.set(fileName, { fileName, isActive: true });
    }

    // Update active state for all tabs
    newTabs.forEach((tab, key) => {
      tab.isActive = key === fileName;
    });

    setOpenTabs(newTabs);
    setActiveTab(fileName);
  };

  const closeFile = (fileName) => {
    const newTabs = new Map(openTabs);
    newTabs.delete(fileName);
    setOpenTabs(newTabs);

    if (activeTab === fileName) {
      const remainingTabs = Array.from(newTabs.keys());
      if (remainingTabs.length > 0) {
        const newActiveTab = remainingTabs[remainingTabs.length - 1];
        setActiveTab(newActiveTab);
        // Update active state for remaining tabs
        newTabs.forEach((tab, key) => {
          tab.isActive = key === newActiveTab;
        });
        setOpenTabs(new Map(newTabs));
      } else {
        setActiveTab(null);
      }
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const closeSidebar = () => {
    setSidebarCollapsed(true);
  };

  const toggleTerminal = () => {
    setTerminalVisible(!terminalVisible);
  };

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
