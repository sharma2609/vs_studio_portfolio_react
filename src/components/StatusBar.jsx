import { useState, useEffect } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import { useTheme } from "../contexts/ThemeContext";

const THEME_LIST = [
  "catppuccin-mocha",
  "nord",
  "dark",
  "cyberpunk",
  "light",
];

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { activeTab, toggleTerminal, openFile } = usePortfolio();
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getThemeName = (themeKey) => {
    const themeNames = {
      "catppuccin-mocha": "Catppuccin Mocha",
      "nord": "Nord",
      "dark": "Dark",
      "cyberpunk": "Cyberpunk",
      "light": "Light",
    };
    return themeNames[themeKey] || themeKey;
  };

  const cycleTheme = () => {
    const currentIndex = THEME_LIST.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEME_LIST.length;
    changeTheme(THEME_LIST[nextIndex]);
  };

  return (
    <div className="status-bar flex-between">
      <div className="status-bar-left flex-center">
        <button
          className="status-item"
          onClick={toggleTerminal}
          title="Toggle Panel (Ctrl+J)"
          type="button"
        >
          {formatTime(currentTime)}
        </button>
        <span className="status-separator">|</span>
        <button
          className="status-item"
          onClick={toggleTerminal}
          title="Toggle Panel (Ctrl+J)"
          type="button"
        >
          {formatDate(currentTime)}
        </button>
        <span className="status-separator">|</span>
        <a
          className="status-item"
          href="https://maps.google.com/?q=Meerut+India"
          target="_blank"
          rel="noopener noreferrer"
          title="Open location in Google Maps"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <title>Location</title>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Meerut, India
        </a>
      </div>
      <div className="status-bar-right flex-center">
        {activeTab && (
          <>
            <button
              className="status-item"
              onClick={() => openFile(activeTab)}
              title="Focus editor"
              type="button"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <title>File</title>
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
              </svg>
              {activeTab}
            </button>
            <span className="status-separator">|</span>
          </>
        )}
        <button
          className="status-item"
          onClick={cycleTheme}
          title="Cycle theme"
          type="button"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <title>Theme</title>
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
          </svg>
          {getThemeName(theme)}
        </button>
      </div>
    </div>
  );
};

export default StatusBar;
