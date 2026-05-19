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
      "about skills experience education python javascript react AI ML MIET FIT teaching",
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
      "career timeline git history education IIT Ropar MBA MIET work experience",
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
