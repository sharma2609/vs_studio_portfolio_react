import { useTheme } from "../../contexts/ThemeContext";
import { handleListKeyDown } from "../../utils/keyboard";

const THEMES = [
  {
    id: "catppuccin-mocha",
    name: "Catppuccin Mocha",
    swatch: "#cba6f7",
  },
  { id: "dark", name: "Dark", swatch: "#007acc" },
  { id: "light", name: "Light", swatch: "#005fb8" },
  { id: "nord", name: "Nord", swatch: "#88c0d0" },
  { id: "cyberpunk", name: "Cyberpunk", swatch: "#ff2a6d" },
];

const ExtensionsView = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="sidebar-view active">
      <div className="sidebar-header">Themes</div>
      <div className="theme-switcher">
        <ul>
          {THEMES.map((themeOption) => (
            <li
              key={themeOption.id}
              className={`hover-highlight ${theme === themeOption.id ? "active" : ""}`}
              role="button"
              tabIndex={0}
              aria-current={theme === themeOption.id ? "true" : undefined}
              onClick={() => changeTheme(themeOption.id)}
              onKeyDown={(e) =>
                handleListKeyDown(e, () => changeTheme(themeOption.id))
              }
            >
              <span
                className="theme-swatch"
                style={{ backgroundColor: themeOption.swatch }}
                aria-hidden="true"
              />
              {themeOption.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExtensionsView;
