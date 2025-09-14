import { useTheme } from "../../contexts/ThemeContext";

const ExtensionsView = () => {
  const { theme, changeTheme } = useTheme();

  const themes = [
    {
      id: "default",
      name: "VS Code Dark",
      icon: "M12 18C8.69 18 6 15.31 6 12S8.69 6 12 6V18Z",
    },
    {
      id: "light-theme",
      name: "Quiet Light",
      icon: "M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z",
    },
    {
      id: "jellyfish-theme",
      name: "Jellyfish",
      icon: "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25S18,10 18,14A6,6 0 0,1 12,20Z",
    },
    {
      id: "monokai-theme",
      name: "Monokai",
      icon: "M12,3C13.73,3 16.4,6.02 16.4,10.5C16.4,11.88 16.04,13.18 15.38,14.28C14.73,15.38 13.83,16.19 12.75,16.63C12.5,16.72 12.26,16.76 12,16.76C11.74,16.76 11.5,16.72 11.25,16.63C10.17,16.19 9.27,15.38 8.62,14.28C7.96,13.18 7.6,11.88 7.6,10.5C7.6,6.02 10.27,3 12,3M12,1C9.14,1 5.6,4.97 5.6,10.5C5.6,12.25 6.08,13.9 6.96,15.28C7.84,16.66 9.08,17.69 10.54,18.25C11,18.42 11.5,18.5 12,18.5C12.5,18.5 13,18.42 13.46,18.25C14.92,17.69 16.16,16.66 17.04,15.28C17.92,13.9 18.4,12.25 18.4,10.5C18.4,4.97 14.86,1 12,1Z",
    },
    {
      id: "obsidian-theme",
      name: "Obsidian",
      icon: "M6,3L8,21L16,21L18,3M9.5,5.5L14.5,5.5L14,8.5L10,8.5L9.5,5.5M9,10.5L13.5,10.5L13,13.5L9.5,13.5L9,10.5Z",
    },
  ];

  return (
    <div className="sidebar-view active">
      <div className="sidebar-header">Themes</div>
      <div className="theme-switcher">
        <ul>
          {themes.map((themeOption) => (
            <li
              key={themeOption.id}
              className="hover-highlight"
              onClick={() => changeTheme(themeOption.id)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={themeOption.icon} />
              </svg>
              {themeOption.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExtensionsView;
