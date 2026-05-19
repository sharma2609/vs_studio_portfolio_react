import { useState } from "react";
import { usePortfolio } from "../../contexts/PortfolioContext";
import { PORTFOLIO_FILES } from "../../config/files";
import { handleListKeyDown } from "../../utils/keyboard";

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { openFile } = usePortfolio();

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const lower = term.toLowerCase();
      const results = PORTFOLIO_FILES.filter(
        (item) =>
          item.name.toLowerCase().includes(lower) ||
          item.keywords.toLowerCase().includes(lower)
      ).map((item) => ({
        filename: item.name,
        context: item.keywords,
        matchType: item.name.toLowerCase().includes(lower)
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

  const formatContext = (context) => {
    if (context.length <= 60) return context;
    return `${context.substring(0, 60)}…`;
  };

  return (
    <div className="sidebar-view active">
      <div className="sidebar-header">Search</div>
      <input
        type="text"
        id="search-input"
        placeholder="Search files and topics..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label="Search portfolio files"
      />
      <div className="search-results-container">
        {searchResults.map((result) => (
          <div
            key={result.filename}
            className="search-result-item hover-highlight"
            role="button"
            tabIndex={0}
            onClick={() => handleResultClick(result.filename)}
            onKeyDown={(e) =>
              handleListKeyDown(e, () => handleResultClick(result.filename))
            }
          >
            <div className="filename">{result.filename}</div>
            <div className="context">
              {result.matchType === "filename" ? "File match" : "Topic match"} —{" "}
              {formatContext(result.context)}
            </div>
          </div>
        ))}
        {searchTerm.length >= 2 && searchResults.length === 0 && (
          <div className="search-result-item">
            <div className="filename">No results found</div>
            <div className="context">
              Try: skills, projects, contact, education, resume
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
