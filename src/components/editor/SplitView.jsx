// Reusable Split View Component
const SplitView = ({ fileName, code, preview }) => {
  return (
    <div className="home-split-view">
      <div className="code-panel">
        <div className="code-header">{fileName}</div>
        <pre className="code-content">{code}</pre>
      </div>
      <div className="preview-panel">{preview}</div>
    </div>
  );
};

export default SplitView;
