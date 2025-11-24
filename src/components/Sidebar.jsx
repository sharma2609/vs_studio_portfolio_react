import { usePortfolio } from "../contexts/PortfolioContext";
import ExplorerView from "./sidebar/ExplorerView";
import SearchView from "./sidebar/SearchView";
import SourceControlView from "./sidebar/SourceControlView";
import RunDebugView from "./sidebar/RunDebugView";
import ExtensionsView from "./sidebar/ExtensionsView";

const Sidebar = () => {
  const { activeView, sidebarCollapsed, closeSidebar } = usePortfolio();

  const renderActiveView = () => {
    switch (activeView) {
      case "explorer":
        return <ExplorerView />;
      case "search":
        return <SearchView />;
      case "source-control":
        return <SourceControlView />;
      case "run-debug":
        return <RunDebugView />;
      case "extensions":
        return <ExtensionsView />;
      default:
        return <ExplorerView />;
    }
  };

  const handleOverlayClick = () => {
    closeSidebar();
  };

  return (
    <>
      {!sidebarCollapsed && (
        <div className="sidebar-overlay" onClick={handleOverlayClick} />
      )}
      <div className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        {renderActiveView()}
      </div>
    </>
  );
};

export default Sidebar;
