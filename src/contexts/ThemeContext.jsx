import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const DEFAULT_THEME = "catppuccin-mocha";

const LEGACY_THEME_MAP = {
  default: "catppuccin-mocha",
  "light-theme": "light",
  "jellyfish-theme": "catppuccin-mocha",
  "monokai-theme": "dark",
  "obsidian-theme": "dark",
  "kiro-theme": "cyberpunk",
};

const resolveTheme = (name) =>
  LEGACY_THEME_MAP[name] || name || DEFAULT_THEME;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const getThemeClass = (themeName) => `theme-${themeName}`;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const saved = resolveTheme(localStorage.getItem("portfolio-theme"));
    setTheme(saved);
    document.body.className = getThemeClass(saved);
    localStorage.setItem("portfolio-theme", saved);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.className = getThemeClass(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
