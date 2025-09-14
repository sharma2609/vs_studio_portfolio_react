import { usePortfolio } from "../../contexts/PortfolioContext";
import DinoGame from "./DinoGame";

const EditorContent = () => {
  const { activeTab, openTabs } = usePortfolio();

  const fileContents = {
    "home.jsx": `import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Priyanshu Sharma</h1>
      <p>Welcome to my interactive portfolio.</p>
      <p>Click on the files in the explorer to learn more about me, or head to the CHATBOT tab in the terminal to ask me anything!</p>
    </div>
  );
};

export default HomePage;`,

    "about.md": `# About Me

Hello! I'm Priyanshu Sharma, a passionate developer with a knack for building creative and efficient web applications. I have a solid foundation in computer science and a specialization in AI.

## 💻 Skills

- **Languages:** Python, JavaScript, SQL
- **Front-end:** HTML, CSS, SCSS, Tailwind, Bootstrap, React, Next.js
- **Back-end:** Node.js, Express
- **Databases:** MySQL, MongoDB
- **Tools & Concepts:** Git, VITE, Framer Motion, OOP

## 🚀 Experience

### Web Development Intern | BR Softsol
* (Aug 2022 - Nov 2022)
* Collaborated on upgrading the company homepage to meet new design specifications.
* Designed and implemented new features and advanced filters to improve user experience.
* **Technologies:** HTML, CSS, Javascript, jQuery, AJAX, PHP

### Web Development Intern | MIET
* (Sep 2021 - Oct 2021)
* Developed simple and responsive web applications, honing skills in front-end development.
* **Technologies:** HTML, CSS, Javascript

## 🎓 Education

- **Bachelor of Technology, Computer Science**
  * MIET, Meerut (2020-2024)
  * CGPA: 7.08

- **Minor in AI**
  * IIT Ropar (2024 - Present)

- **XII (CBSE)** | Dayawati Modi Academy | 88.4% (2019)
- **X (CBSE)** | Dayawati Modi Academy | 93.1% (2017)`,

    "projects.js": `const projects = [
  {
    name: 'Truth_Finder | Fake News Detection',
    description: 'A web application that determines the authenticity of news using ML models like Random Forest and Gradient Boosting with TF-IDF vectorization.',
    stack: ['Python', 'React', 'Node', 'ML', 'Tailwind', 'VITE'],
    year: 2024
  },
  {
    name: 'Hue_Haven | Color Palette Generator',
    description: 'A React-based tool for creating color palettes, featuring random/custom generation modes and a copy-to-clipboard function.',
    stack: ['React', 'HTML', 'CSS', 'JavaScript', 'VITE'],
    year: 2024
  },
  {
    name: 'Spend_Wise | Money Tracker App',
    description: 'A money-tracking application with real-time expense/income tracking and transaction history visualization.',
    stack: ['React', 'HTML', 'CSS', 'JavaScript', 'VITE'],
    year: 2024
  }
];

console.log('My Projects:', projects);`,

    "contact.html": `<div class="contact-info">
  <h2>Get in Touch</h2>
  <p>Email: <a href="mailto:priyanshu.sharma.2609p@gmail.com">priyanshu.sharma.2609p@gmail.com</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/priyanshu-sharma-p2609s" target="_blank">linkedin.com/in/Priyanshu-Sharma</a></p>
  <p>GitHub: <a href="https://github.com/sharma2609" target="_blank">github.com/sharma2609</a></p>
</div>`,

    "resume.pdf": `// This action will trigger a download of my resume.

function downloadResume() {
    // In a real scenario, you would have the PDF file in your project directory.
    const resumeUrl = './PriyanshuSharmaResume_CV.pdf';
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'PriyanshuSharma_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// To initiate download, you could call this function from an event listener.
// For now, this file just shows the code for the download logic.
// downloadResume();`,

    "dino.js":
      "// A classic Dino game.\n// Use Space or Arrow Up to jump, Arrow Down to duck.\n// Avoid the obstacles!",

    "career_timeline.git": (
      <div className="timeline-editor-pane">
        <h1>Career Commit History</h1>
        <ul className="timeline-list">
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type feat">feat</span>: Added AI Minor & new
                projects
              </div>
              <div className="timeline-details">
                Priyanshu Sharma pushed to main on May 04, 2024
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type feat">feat</span>: Web Development Intern
                at BR Softsol
              </div>
              <div className="timeline-details">
                Priyanshu Sharma pushed to main on Aug 25, 2022
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type docs">docs</span>: Updated skills with
                HTML, CSS, & JavaScript
              </div>
              <div className="timeline-details">
                Priyanshu Sharma pushed to main on Oct 10, 2021
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type initial">init</span>: Began B.Tech in
                Computer Science
              </div>
              <div className="timeline-details">
                Priyanshu Sharma pushed to main on Aug 01, 2020
              </div>
            </div>
          </li>
        </ul>
      </div>
    ),

    "extracurriculars.git": (
      <div className="timeline-editor-pane">
        <h1>Extracurricular Commit History</h1>
        <ul className="timeline-list">
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type achievement">achievement</span>: Earned
                Black Belt in Taekwondo
              </div>
              <div className="timeline-details">
                Priyanshu Sharma pushed to main on Mar 20, 2021
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type feat">feat</span>: Vice Sports Captain at
                School
              </div>
              <div className="timeline-details">
                Priyanshu Sharma pushed to main on May 15, 2018
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type achievement">achievement</span>: 3x
                National Gold Medalist in Taekwondo
              </div>
              <div className="timeline-details">
                Priyanshu Sharma pushed to main between 2017-2019
              </div>
            </div>
          </li>
        </ul>
      </div>
    ),
  };

  const renderContent = () => {
    if (!activeTab || openTabs.size === 0) {
      return (
        <div className="welcome-pane">
          <h1>Welcome to my Portfolio!</h1>
          <p>Click on a file in the explorer to get started.</p>
          <p>Your session (theme & open tabs) is saved automatically.</p>
        </div>
      );
    }

    const content = fileContents[activeTab];

    if (activeTab === "dino.js") {
      return <DinoGame />;
    }

    if (typeof content === "object") {
      return (
        <div className="content-pane active raw-html-content">{content}</div>
      );
    }

    if (activeTab === "contact.html") {
      return (
        <div className="content-pane active raw-html-content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      );
    }

    return (
      <div className="content-pane active">
        <pre>{content}</pre>
      </div>
    );
  };

  return <div className="editor-content">{renderContent()}</div>;
};

export default EditorContent;
