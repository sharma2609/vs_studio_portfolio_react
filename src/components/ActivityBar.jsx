import { usePortfolio } from "../contexts/PortfolioContext";

const ActivityBar = () => {
  const { activeView, setActiveView } = usePortfolio();

  const icons = [
    {
      id: "explorer",
      title: "Explorer",
      path: "M9.5 3A1.5 1.5 0 0 0 8 4.5v15A1.5 1.5 0 0 0 9.5 21h5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 14.5 3h-5zM11 5h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z",
    },
    {
      id: "search",
      title: "Search",
      path: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    },
    {
      id: "source-control",
      title: "Source Control",
      path: "M5.41 21L6.12 17H2.12L2.47 15H6.47L7.53 9H3.53L3.88 7H7.88L8.59 3H10.59L9.88 7H15.88L16.59 3H18.59L17.88 7H21.88L21.53 9H17.53L16.47 15H20.47L20.12 17H16.12L15.41 21H13.41L14.12 17H8.12L7.41 21H5.41ZM9.53 9L8.47 15H14.47L15.53 9H9.53Z",
    },
    {
      id: "run-debug",
      title: "Run and Debug",
      path: "M8 5v14l11-7z",
    },
    {
      id: "extensions",
      title: "Extensions",
      path: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z",
    },
  ];

  return (
    <div className="activity-bar">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`icon ${activeView === icon.id ? "active" : ""}`}
          title={icon.title}
          role="button"
          tabIndex="0"
          aria-label={icon.title}
          onClick={() => setActiveView(icon.id)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <title>{icon.title}</title>
            <path d={icon.path} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default ActivityBar;
