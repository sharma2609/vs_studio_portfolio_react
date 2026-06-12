import { usePortfolio } from "../../contexts/PortfolioContext";
import { getFileIcon } from "../../utils/fileIcons";

const TabsBar = () => {
  const { openTabs, activeTab, openFile, closeFile } = usePortfolio();

  if (openTabs.size === 0) return <div className="tabs-bar" />;

  const handleMouseDown = (e, fileName) => {
    if (e.button === 1) {
      e.preventDefault();
      closeFile(fileName);
    }
  };

  return (
    <div className="tabs-bar" role="tablist">
      {Array.from(openTabs.keys()).map((fileName) => {
        const icon = getFileIcon(fileName);
        const isActive = activeTab === fileName;
        return (
          <div
            key={fileName}
            role="tab"
            aria-selected={isActive}
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => openFile(fileName)}
            onMouseDown={(e) => handleMouseDown(e, fileName)}
          >
            <svg
              className="tab-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={icon.color}
              aria-hidden="true"
            >
              <path d={icon.path} />
            </svg>
            {fileName}
            <button
              type="button"
              className="close-icon"
              aria-label={`Close ${fileName}`}
              onClick={(e) => {
                e.stopPropagation();
                closeFile(fileName);
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TabsBar;
