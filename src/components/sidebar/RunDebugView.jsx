import { usePortfolio } from "../../contexts/PortfolioContext";

const RunDebugView = () => {
  const { openFile } = usePortfolio();

  const gameFiles = [{ name: "dino.js", icon: "js" }];

  const getJsIcon = () => ({
    path: "M3 3h18v18H3V3zm16.525 13.708c-.272-.69-.686-.697-1.021-.697-.398 0-.64.155-.64.463 0 .306.155.463.463.696l.298.231c.155.154.231.307.231.54 0 .463-.386.772-.926.772-.617 0-1.021-.309-1.175-.772l-.462.231c.231.694.772 1.021 1.637 1.021.926 0 1.56-.463 1.56-1.175 0-.617-.309-.926-.772-1.175l-.298-.231c-.231-.154-.309-.231-.309-.386 0-.154.077-.231.231-.231.154 0 .309.077.386.231l.386-.231zm-3.633.077c-.231-.463-.617-.772-1.252-.772-.849 0-1.406.463-1.406 1.175 0 .849.617 1.021 1.406 1.021.694 0 1.175-.231 1.252-.772l-.463-.231c-.077.231-.309.386-.617.386-.309 0-.617-.154-.617-.463 0-.231.231-.463.617-.463.309 0 .54.154.617.386l.463-.231z",
    color: "#F7DF1E",
  });

  return (
    <div className="sidebar-view active">
      <div className="sidebar-header">Run and Debug</div>
      <div className="game-launcher">
        <ul>
          {gameFiles.map((file) => {
            const icon = getJsIcon();
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
    </div>
  );
};

export default RunDebugView;
