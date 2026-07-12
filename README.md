# VS Code Portfolio

A personal portfolio website that replicates the Visual Studio Code interface, built with React and Vite. Designed for developers who want to present their resume, projects, and skills in an interactive, editor-like experience.

## Overview

This project replaces the traditional portfolio page with a functional VS Code mockup. Visitors navigate through files representing different sections of a developer's resume — skills, experience, education, projects — as if browsing a real codebase. The editor displays split views with "source code" on the left and rendered content previews on the right, creating a developer-native way to present professional information.

The portfolio is fully static (no backend), loads fast, and works across all devices. It supports multiple VS Code themes, a built-in chatbot for Q&A about the developer, and a hidden dinosaur game easter egg.

## Features

- **VS Code interface** — Activity bar, sidebar, editor tabs, terminal panel, and status bar that mirror the real editor
- **File explorer** — Navigate resume sections as files (`.jsx`, `.md`, `.json`, `.ts`, `.py`, `.html`, `.pdf`)
- **Split-view editor** — Code on the left, rendered preview on the right for each section
- **5 themes** — Catppuccin Mocha (default), Dark, Light, Nord, Cyberpunk — switchable from the Extensions sidebar or status bar
- **Keyboard shortcuts** — `Ctrl+B` toggles sidebar, `Ctrl+J` toggles terminal panel
- **Chatbot** — Terminal-based Q&A assistant that answers questions about skills, experience, projects, and contact info using keyword matching
- **Dino game** — Hidden Chrome-style runner game accessible via Run & Debug sidebar
- **Contact form** — Sends messages via `mailto:` protocol (no backend required)
- **Resume download** — Direct PDF download from the editor
- **Responsive** — Mobile layout auto-collapses sidebar, hides code panel on small screens
- **Resizable panels** — Drag-to-resize sidebar width and terminal height

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18.2 |
| Build tool | Vite 7.x |
| Styling | Pure CSS with CSS custom properties (no UI library) |
| Icons | Inline SVG |
| Font | JetBrains Mono Nerd Font (CDN) |
| Linting | ESLint 9 (flat config) with React/hooks plugins |

## Getting Started

### Prerequisites

- **Node.js >= 18.0.0**
- npm (comes with Node)

### Installation

```bash
git clone https://github.com/sharma2609/vs_studio_portfolio_react.git
cd vs_studio_portfolio_react
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview locally:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

Requires zero warnings to pass.

## Configuration

**No environment variables required.** The project is fully static.

To customize content, edit the files in `src/data/`:

| File | Controls |
|------|----------|
| `personalInfo.js` | Name, role, email, phone, location, social links |
| `experience.js` | Work history and internships |
| `education.js` | Academic background |
| `projects.js` | Project details, descriptions, tech stacks |
| `skills.js` | Technical skills organized by category |
| `achievements.js` | Awards, certifications, accomplishments |

To add a new theme:
1. Define CSS variables under `body.theme-<name>` in `src/themes.css`
2. Add the theme to the `THEMES` array in `src/components/sidebar/ExtensionsView.jsx`
3. Add the theme key to `THEME_LIST` in `src/components/StatusBar.jsx`

To add or remove files in the explorer, edit `src/config/files.js`.

## Project Structure

```
src/
├── components/
│   ├── editor/          # Editor area (tabs, split view, content, dino game)
│   ├── sidebar/         # Explorer, search, source control, extensions, run/debug
│   ├── terminal/        # Chatbot, contact form, terminal shortcuts, problems
│   ├── ActivityBar.jsx  # Left icon bar (VS Code activity bar)
│   ├── EditorGroup.jsx  # Editor + terminal layout with resize
│   ├── MenuBar.jsx      # Top bar with logo, search, toggle buttons
│   ├── Sidebar.jsx      # Sidebar container with overlay for mobile
│   ├── StatusBar.jsx    # Bottom bar with clock, theme, location
│   └── TerminalPanel.jsx # Terminal tab container
├── config/
│   └── files.js         # Virtual file definitions for the explorer
├── contexts/
│   ├── PortfolioContext.jsx  # UI state (tabs, sidebar, terminal)
│   └── ThemeContext.jsx      # Theme state with localStorage persistence
├── data/                # All portfolio content (edit these to customize)
│   ├── personalInfo.js
│   ├── experience.js
│   ├── education.js
│   ├── projects.js
│   ├── skills.js
│   └── achievements.js
├── utils/
│   ├── fileIcons.js     # SVG icons mapped by file extension
│   └── keyboard.js      # Keyboard accessibility helper
├── index.css            # Main styles (~3000 lines)
├── themes.css           # Theme CSS variable definitions
├── css-fixes.css        # Layout overrides for split views
└── fonts.css            # JetBrains Mono Nerd Font face declarations
```

## Deployment

The project includes configs for both Vercel and Netlify:

**Vercel** — Push to GitHub, import repo at vercel.com, auto-detects Vite.

**Netlify** — Push to GitHub, import repo at netlify.com, uses `netlify.toml`.

**GitHub Pages** — Add `gh-pages` devDependency, set `base` in `vite.config.js`, run `npm run deploy`.

## License

[MIT](LICENSE) — Copyright (c) 2026 Priyanshu Sharma
