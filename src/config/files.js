export const PORTFOLIO_FILES = [
  {
    name: "home.jsx",
    icon: "react",
    keywords:
      "welcome home introduction portfolio react component overview",
    inExplorer: true,
  },
  {
    name: "about.md",
    icon: "markdown",
    keywords:
      "about introduction bio background summary profile",
    inExplorer: true,
  },
  {
    name: "skills.json",
    icon: "json",
    keywords:
      "skills programming languages python javascript AI ML frameworks libraries tools",
    inExplorer: true,
  },
  {
    name: "experience.ts",
    icon: "typescript",
    keywords:
      "experience work history jobs internships teaching FIT BR Softsol IIT Kanpur",
    inExplorer: true,
  },
  {
    name: "education.py",
    icon: "python",
    keywords:
      "education degree bachelor IIT Ropar MIET university college school",
    inExplorer: true,
  },
  {
    name: "projects.js",
    icon: "js",
    keywords:
      "projects fake news detection multilingual translation NLP machine learning streamlit",
    inExplorer: true,
  },
  {
    name: "contact.html",
    icon: "html",
    keywords: "contact email linkedin github phone location get in touch",
    inExplorer: true,
  },
  {
    name: "resume.pdf",
    icon: "pdf",
    keywords: "resume CV download PDF professional document",
    inExplorer: true,
  },
  {
    name: "career_timeline.git",
    icon: "git",
    keywords:
      "career timeline git history education IIT Ropar MIET work experience",
    inExplorer: false,
  },
  {
    name: "extracurriculars.git",
    icon: "git",
    keywords:
      "achievements taekwondo black belt sports captain national gold medal",
    inExplorer: false,
  },
  {
    name: "dino.js",
    icon: "js",
    keywords: "game dinosaur chrome dino canvas javascript fun",
    inExplorer: false,
  },
];

export const FILE_NAMES = PORTFOLIO_FILES.map((f) => f.name);

export const EXPLORER_FILES = PORTFOLIO_FILES.filter((f) => f.inExplorer);

export const getFileByName = (name) =>
  PORTFOLIO_FILES.find((f) => f.name === name);
