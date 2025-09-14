import { usePortfolio } from "../../contexts/PortfolioContext";

const SourceControlView = () => {
  const { openFile } = usePortfolio();

  const timelineFiles = [
    { name: "career_timeline.git", icon: "git" },
    { name: "extracurriculars.git", icon: "git" },
  ];

  const getGitIcon = () => ({
    path: "M16 1.75a.75.75 0 0 0-1.5 0V3a.75.75 0 0 0 1.5 0V1.75zM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4.5 1.75a.75.75 0 0 0-1.5 0V7a.75.75 0 0 0 1.5 0V5.75zM8 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4.5 8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0V8.25zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8.006 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0z",
    color: "#F05033",
  });

  return (
    <div className="sidebar-view active">
      <div className="sidebar-header">Timelines</div>
      <div className="file-explorer">
        <ul>
          {timelineFiles.map((file) => {
            const icon = getGitIcon();
            return (
              <li
                key={file.name}
                className="hover-highlight"
                onClick={() => openFile(file.name)}
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
              </li>
            );
          })}
        </ul>
      </div>
      <p className="source-control-info">
        Click a timeline to view my professional and personal growth as a series
        of commits.
      </p>
    </div>
  );
};

export default SourceControlView;
