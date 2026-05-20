# VS Code Portfolio - Priyanshu Sharma

A modern, interactive portfolio website designed to look and feel like Visual Studio Code. Built with React and Vite, this portfolio showcases my professional experience, projects, skills, and achievements in an engaging developer-friendly interface.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.9-purple) ![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **VS Code Interface**: Authentic VS Code-inspired UI with activity bar, sidebar, editor, and terminal panels
- **Interactive File Explorer**: Navigate through different sections like a real code editor
- **Split View**: Code and preview panels showing both source and rendered content
- **Multiple Themes**: Switch between popular VS Code themes (Catppuccin Mocha, GitHub Dark, One Dark Pro, etc.)
- **AI Chatbot**: Interactive chatbot in the terminal for answering questions about my experience
- **Dino Game**: Hidden Chrome dinosaur game for fun
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Polished transitions and hover effects throughout

## 🚀 Live Demo

Visit the live portfolio: [PriyanshuSharma.Dev](https://PriyanshuSharma.Dev)

## 📱 Mobile Optimization

The portfolio is fully responsive with special optimizations for mobile devices:
- **Mobile View**: Shows only the preview panel (code panel hidden) for better readability
- **Touch-Friendly**: Larger touch targets and optimized spacing
- **Collapsible Sidebar**: Slide-out navigation with overlay
- **Adaptive Layout**: Content adjusts seamlessly across all screen sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 7.1.9
- **Styling**: Pure CSS with CSS Variables for theming
- **Icons**: Custom SVG icons
- **Fonts**: JetBrains Mono (Nerd Font)

## 📂 Project Structure

```
vs_studio_portfolio_react/
├── public/
│   └── PriyanshuSharma_Resume.pdf
├── src/
│   ├── components/
│   │   ├── editor/
│   │   │   ├── DinoGame.jsx
│   │   │   ├── EditorContent.jsx
│   │   │   ├── SplitView.jsx
│   │   │   └── TabsBar.jsx
│   │   ├── sidebar/
│   │   │   ├── ExplorerView.jsx
│   │   │   ├── ExtensionsView.jsx
│   │   │   ├── RunDebugView.jsx
│   │   │   ├── SearchView.jsx
│   │   │   └── SourceControlView.jsx
│   │   ├── terminal/
│   │   │   ├── ChatbotPane.jsx
│   │   │   ├── ContactPane.jsx
│   │   │   ├── ProblemsPane.jsx
│   │   │   └── TerminalPane.jsx
│   │   ├── ActivityBar.jsx
│   │   ├── EditorGroup.jsx
│   │   ├── MenuBar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatusBar.jsx
│   │   └── TerminalPanel.jsx
│   ├── config/
│   │   └── files.js
│   ├── contexts/
│   │   ├── PortfolioContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── achievements.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── index.js
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   ├── resumeData.js
│   │   └── skills.js
│   ├── utils/
│   │   ├── fileIcons.js
│   │   └── keyboard.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── themes.css
│   ├── fonts.css
│   └── css-fixes.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sharma2609/vs_studio_portfolio_react.git
cd vs_studio_portfolio_react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit the files in `src/data/` to customize the portfolio with your information:

- `personalInfo.js` - Name, role, contact details, social links
- `experience.js` - Work experience and internships
- `education.js` - Educational background
- `projects.js` - Project details and tech stack
- `skills.js` - Technical skills organized by category
- `achievements.js` - Awards and accomplishments

### Add New Themes

1. Add theme colors in `src/themes.css`
2. Update the theme list in `src/components/sidebar/ExtensionsView.jsx`

### Modify File Structure

Update `src/config/files.js` to add or remove files in the explorer view.

## 📦 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎯 Features Breakdown

### Activity Bar
- **Explorer**: Browse files and sections
- **Search**: Search through portfolio content
- **Source Control**: View career and achievements timeline
- **Run & Debug**: Quick actions and shortcuts
- **Extensions**: Theme switcher

### Editor Panel
- **Split View**: Code on left, preview on right (desktop only)
- **Tabs**: Multiple files can be open simultaneously
- **Syntax Highlighting**: Realistic code display
- **File Icons**: Language-specific icons

### Terminal Panel
- **Problems**: Known issues and todos
- **Terminal**: Command-line interface simulation
- **Contact**: Contact form and information
- **Chatbot**: AI-powered Q&A about experience

### Sidebar Views
- **Explorer**: File tree navigation
- **Search**: Content search functionality
- **Source Control**: Git-style timeline
- **Extensions**: Theme customization
- **Run & Debug**: Quick links

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Priyanshu Sharma**
- Portfolio: [PriyanshuSharma.Dev](https://PriyanshuSharma.Dev)
- GitHub: [@sharma2609](https://github.com/sharma2609)
- LinkedIn: [Priyanshu Sharma](https://linkedin.com/in/priyanshu-sharma)
- Email: priyanshu.sharma.2609p@gmail.com

## 🙏 Acknowledgments

- Inspired by Visual Studio Code
- Icons and design patterns from VS Code
- Font: JetBrains Mono
- Themes: Catppuccin, GitHub, One Dark Pro, and more

## 🐛 Known Issues

- None currently reported

## 📝 Changelog

### Version 1.0.0 (2026)
- Initial release
- VS Code-inspired interface
- Multiple themes support
- Fully responsive design
- Interactive chatbot
- Dino game easter egg

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sharma2609/vs_studio_portfolio_react/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Priyanshu Sharma
