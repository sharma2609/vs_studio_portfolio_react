import { useState } from "react";
import { usePortfolio } from "../../contexts/PortfolioContext";

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { openFile } = usePortfolio();

  // Searchable content database
  const searchableContent = [
    {
      filename: "home.jsx",
      context: "Welcome page, introduction, React component",
    },
    {
      filename: "about.md",
      context:
        "Skills, experience, education, Python, JavaScript, React, Node.js, BR Softsol, MIET, Computer Science, AI",
    },
    {
      filename: "projects.js",
      context:
        "Truth_Finder, fake news detection, Hue_Haven, color palette, Spend_Wise, money tracker, machine learning",
    },
    {
      filename: "contact.html",
      context:
        "Email, LinkedIn, GitHub, Bento, contact information, social media",
    },
    {
      filename: "resume.pdf",
      context: "Resume, CV, download, PDF, professional document",
    },
    {
      filename: "career_timeline.git",
      context:
        "Career history, timeline, commits, work experience, internships",
    },
    {
      filename: "extracurriculars.git",
      context:
        "Achievements, Taekwondo, Black Belt, Sports Captain, National Gold Medalist",
    },
    {
      filename: "dino.js",
      context: "Game, dinosaur, Chrome dino, JavaScript game, canvas",
    },
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const results = searchableContent
        .filter(
          (item) =>
            item.filename.toLowerCase().includes(term.toLowerCase()) ||
            item.context.toLowerCase().includes(term.toLowerCase())
        )
        .map((item) => ({
          ...item,
          matchType: item.filename.toLowerCase().includes(term.toLowerCase())
            ? "filename"
            : "content",
        }));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (filename) => {
    openFile(filename);
  };

  return (
    <div className="sidebar-view active">
      <div className="sidebar-header">Search</div>
      <input
        type="text"
        id="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="search-results-container">
        {searchResults.map((result, index) => (
          <div
            key={index}
            className="search-result-item hover-highlight"
            onClick={() => handleResultClick(result.filename)}
            style={{ cursor: "pointer" }}
          >
            <div className="filename">{result.filename}</div>
            <div className="context">
              {result.matchType === "filename" ? "File match" : "Content match"}{" "}
              - {result.context.substring(0, 50)}...
            </div>
          </div>
        ))}
        {searchTerm.length >= 2 && searchResults.length === 0 && (
          <div className="search-result-item">
            <div className="filename">No results found</div>
            <div className="context">
              Try searching for: skills, projects, contact, education
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
