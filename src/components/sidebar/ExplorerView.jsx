import { usePortfolio } from "../../contexts/PortfolioContext";
import { EXPLORER_FILES } from "../../config/files";
import { getFileIcon } from "../../utils/fileIcons";
import { handleListKeyDown } from "../../utils/keyboard";

const ExplorerView = () => {
  const { openFile, closeSidebar } = usePortfolio();

  const handleFileClick = (fileName) => {
    openFile(fileName);
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  };

  return (
    <div className="sidebar-view active">
      <div className="sidebar-header">Explorer</div>
      <div className="file-explorer">
        <ul>
          {EXPLORER_FILES.map((file) => {
            const icon = getFileIcon(file.name, file.icon);
            return (
              <li key={file.name}>
                <button
                  className="hover-highlight list-button"
                  onClick={() => handleFileClick(file.name)}
                  onKeyDown={(e) =>
                    handleListKeyDown(e, () => handleFileClick(file.name))
                  }
                  type="button"
                >
                  <svg
                    className="file-explorer-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={icon.color}
                    aria-hidden="true"
                  >
                    <path d={icon.path} />
                  </svg>
                  {file.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExplorerView;
