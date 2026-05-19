import { usePortfolio } from "../../contexts/PortfolioContext";
import DinoGame from "./DinoGame";
import SplitView from "./SplitView";
import resumeData from "../../data/resumeData";
import { RESUME_PDF_PATH } from "../../utils/fileIcons";

const EditorContent = () => {
  const { activeTab, openTabs, openFile } = usePortfolio();

  const latestExperience = resumeData.experience[0];

  const renderSplit = (fileName, code, preview) => (
    <SplitView fileName={fileName} code={code} preview={preview} />
  );

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_PDF_PATH;
    link.download = "PriyanshuSharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fileContents = {
    "home.jsx": `import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>${resumeData.personalInfo.name}</h1>
      <h2>${resumeData.personalInfo.role}</h2>
      <p>Welcome to my portfolio.</p>
      <p>Click on the files in the explorer to learn more about me, or head to the CHATBOT tab in the terminal to ask questions!</p>
    </div>
  );
};

export default HomePage;`,

    "about.md": `# About Me

Hello! I'm ${resumeData.personalInfo.name}, ${
      resumeData.personalInfo.role
    }. I work with AI/ML and build applications using various technologies.

## 💻 Skills

### Programming Languages
${resumeData.skills.programming.map((skill) => `- ${skill}`).join("\n")}

### AI/ML
${resumeData.skills.ai_ml.map((skill) => `- ${skill}`).join("\n")}

### Web Development
${resumeData.skills.webDev.map((skill) => `- ${skill}`).join("\n")}

### Tools & Platforms
${resumeData.skills.tools.map((skill) => `- ${skill}`).join("\n")}

### Core Concepts
${resumeData.skills.core.map((skill) => `- ${skill}`).join("\n")}

## 🚀 Experience

${resumeData.experience
  .map(
    (exp) => `### ${exp.title} | ${exp.company}
* ${exp.period}
* ${exp.description}
* **Skills:** ${exp.skills.join(", ")}`
  )
  .join("\n\n")}

## 🎓 Education

${resumeData.education
  .map(
    (edu) => `- **${edu.degree}**
  * ${edu.institution} (${edu.year})
  * ${edu.details || ""}`
  )
  .join("\n\n")}

## 🏆 Achievements

${resumeData.achievements.map((achievement) => `- ${achievement}`).join("\n")}`,

    "projects.js": `const projects = ${JSON.stringify(
      resumeData.projects,
      null,
      2
    )};

console.log('My Projects:', projects);`,

    "contact.html": `<div class="contact-info">
  <h2>Get in Touch</h2>
  <p><strong>Name:</strong> ${resumeData.personalInfo.name}</p>
  <p><strong>Role:</strong> ${resumeData.personalInfo.role}</p>
  <p><strong>Location:</strong> ${resumeData.personalInfo.location}</p>
  <p><strong>Email:</strong> <a href="mailto:${resumeData.personalInfo.email}">${resumeData.personalInfo.email}</a></p>
  <p><strong>Phone:</strong> ${resumeData.personalInfo.phone}</p>
  <p><strong>LinkedIn:</strong> <a href="${resumeData.personalInfo.socials.linkedin}" target="_blank">View Profile</a></p>
  <p><strong>GitHub:</strong> <a href="${resumeData.personalInfo.socials.github}" target="_blank">View Profile</a></p>
</div>`,

    "resume.pdf": `function downloadResume() {
    const resumeUrl = '${RESUME_PDF_PATH}';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'PriyanshuSharma_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}`,

    "dino.js": `class DinoGame {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.score = 0;
    this.gameOver = false;
  }

  start() {
    this.gameLoop();
  }

  gameLoop() {
    requestAnimationFrame(() => this.gameLoop());
  }
}

const game = new DinoGame();
game.start();`,

    "career_timeline.git": `commit btech2020 (HEAD -> main)
Author: ${resumeData.personalInfo.name}
Date:   2020-2024

    init: Graduated B.Tech (CSE) from MIET, Meerut
    
    - Computer Science and Engineering degree
    - Foundation in programming and algorithms
    - Started AI/ML journey with hands-on projects

commit projects2024
Author: ${resumeData.personalInfo.name}
Date:   2024

    docs: Built Fake News Detection & Translation Systems
    
    - Developed ML-based fake news classifier with research publication
    - Created multilingual translation system with speech processing
    - Full-stack AI applications with modern tech stack

commit aiminor2024
Author: ${resumeData.personalInfo.name}
Date:   2024-2025

    feat: Completed AI Minor from IIT Ropar
    
    - Multidisciplinary AI program
    - Covered ML, DL, NLP, and multilingual processing
    - Advanced AI/ML specialization

commit mba2025
Author: ${resumeData.personalInfo.name}
Date:   2025

    feat: Pursuing MBA at CCS University
    
    - Expanding business and management knowledge
    - Combining technical expertise with business acumen

commit aidev2025
Author: ${resumeData.personalInfo.name}
Date:   2025

    feat: Focused on AI/ML Development & Research
    
    - Advanced AI/ML system development
    - Full-stack application architecture
    - Research in NLP and machine learning`,

    career_timeline_preview: (
      <div className="timeline-editor-pane">
        <h1>Career Timeline</h1>
        <ul className="timeline-list">
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type initial">init</span>: Graduated B.Tech
                (CSE) from MIET, Meerut
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on 2020-2024
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type docs">docs</span>: Built Fake News
                Detection & Translation Systems
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on 2024
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type feat">feat</span>: Completed AI Minor from
                IIT Ropar
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on 2024-2025
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type feat">feat</span>: Pursuing MBA at CCS
                University
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on 2025
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type feat">feat</span>: Focused on AI/ML
                Development & Research
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on 2025
              </div>
            </div>
          </li>
        </ul>
      </div>
    ),

    "extracurriculars.git": `commit gold3x
Author: ${resumeData.personalInfo.name}
Date:   2015-2018

    achievement: 3x National Gold Medalist in Taekwondo
    
    - Won gold medals in 2015, 2017, and 2018
    - Represented at national level competitions
    - Consistent excellence in martial arts

commit blackbelt2016
Author: ${resumeData.personalInfo.name}
Date:   2016

    achievement: Earned Black Belt Dan1 in Taekwondo
    
    - Achieved highest rank in martial arts
    - Years of dedicated training and discipline
    - Demonstrates commitment and perseverance

commit captain2018
Author: ${resumeData.personalInfo.name}
Date:   2017-2018

    feat: Vice Sports Captain at School
    
    - Leadership role in school council
    - Organized sports events and activities
    - Mentored junior students

commit intl2019
Author: ${resumeData.personalInfo.name}
Date:   2019

    feat: Participated in 7th Fujairah International Championship
    
    - International Taekwondo competition
    - Represented India on global stage
    - Gained international experience

commit leetcode2024
Author: ${resumeData.personalInfo.name}
Date:   2024

    feat: Completed 75+ Questions at LeetCode
    
    - Problem-solving practice
    - Algorithm and data structure proficiency
    - Continuous learning in programming`,

    extracurriculars_preview: (
      <div className="timeline-editor-pane">
        <h1>Achievements Timeline</h1>
        <ul className="timeline-list">
          {resumeData.achievements.map((achievement, index) => {
            let type = "achievement";
            let date = "";

            if (achievement.includes("National Gold")) {
              date = "2015-2018";
            } else if (achievement.includes("Black Belt")) {
              date = "2016";
            } else if (achievement.includes("Vice Sports Captain")) {
              date = "2017-2018";
              type = "feat";
            } else if (achievement.includes("Fujairah")) {
              date = "2019";
              type = "feat";
            } else if (achievement.includes("LeetCode")) {
              date = "2024";
              type = "feat";
            }

            return (
              <li key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-message">
                    <span className={`type ${type}`}>{type}</span>:{" "}
                    {achievement}
                  </div>
                  <div className="timeline-details">
                    {resumeData.personalInfo.name} pushed to main{" "}
                    {date && `on ${date}`}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    ),
  };

  const renderContent = () => {
    if (!activeTab || openTabs.size === 0) {
      return (
        <div className="welcome-pane">
          <div className="welcome-hero">
            <div className="welcome-badge">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Meerut, India
            </div>
            <h1 className="welcome-title">{resumeData.personalInfo.name}</h1>
            <h2 className="welcome-subtitle">{resumeData.personalInfo.role}</h2>
            <p className="welcome-description">
              AI/ML Developer and Software Engineer focused on building
              practical systems and applications using machine learning and
              full-stack development.
            </p>
          </div>

          <div className="welcome-quick-start">
            <h3 className="quick-start-title">Quick Start</h3>
            <div className="quick-start-grid">
              <button
                className="quick-start-card"
                onClick={() => openFile("home.jsx")}
              >
                <div className="card-icon">🏠</div>
                <div className="card-title">Home</div>
                <div className="card-description">Start here</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("about.md")}
              >
                <div className="card-icon">👨‍💻</div>
                <div className="card-title">About Me</div>
                <div className="card-description">Skills & experience</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("projects.js")}
              >
                <div className="card-icon">🚀</div>
                <div className="card-title">Projects</div>
                <div className="card-description">What I've built</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("contact.html")}
              >
                <div className="card-icon">📧</div>
                <div className="card-title">Contact</div>
                <div className="card-description">Get in touch</div>
              </button>
            </div>
          </div>

          <div className="welcome-features">
            <div className="feature-item">
              <span className="feature-icon">📁</span>
              <span className="feature-text">Explore files in the sidebar</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <span className="feature-text">Chat with AI in the terminal</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span className="feature-text">Switch themes in Extensions</span>
            </div>
          </div>
        </div>
      );
    }

    const content = fileContents[activeTab];
    if (activeTab === "home.jsx") {
      return renderSplit(
        "home.jsx",
        content,
        <div className="preview-card">
          <p className="preview-label">Portfolio Preview</p>
          <h1 className="preview-title">{resumeData.personalInfo.name}</h1>
          <h2 className="preview-subtitle">{resumeData.personalInfo.role}</h2>
          <p className="preview-description">
            AI/ML developer and software engineer building practical systems,
            applications, and machine learning solutions.
          </p>
          <p className="preview-cta">
            Browse files in the explorer, open <strong>career_timeline.git</strong>{" "}
            under Source Control, or ask questions in the{" "}
            <strong>CHATBOT</strong> terminal tab.
          </p>
        </div>
      );
    }
    if (activeTab === "about.md") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">about.md</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="about-preview-card">
              <h1 className="about-title">About Me</h1>
              <p className="about-intro">
                Hello! I'm <strong>{resumeData.personalInfo.name}</strong>,{" "}
                {resumeData.personalInfo.role}. I work with AI/ML and build
                applications using various technologies.
              </p>

              <div className="skills-grid">
                <div className="skill-category">
                  <h3>💻 Programming</h3>
                  <div className="skill-tags">
                    {resumeData.skills.programming.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h3>🤖 AI/ML</h3>
                  <div className="skill-tags">
                    {resumeData.skills.ai_ml.slice(0, 5).map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h3>🌐 Web Dev</h3>
                  <div className="skill-tags">
                    {resumeData.skills.webDev.slice(0, 5).map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="experience-section">
                <h3>🚀 Latest Experience</h3>
                <div className="experience-card">
                  <h4>{latestExperience.title}</h4>
                  <p className="company">{latestExperience.company}</p>
                  <p className="period">{latestExperience.period}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "projects.js") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">projects.js</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="projects-preview-card">
              <h1 className="projects-title">My Projects</h1>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-type">{project.type}</span>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-features">
                    {project.features.map((feature, i) => (
                      <span key={i} className="feature-item">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "contact.html") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">contact.html</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="contact-preview-card">
              <h1 className="contact-title">Get in Touch</h1>
              <p className="contact-subtitle">
                Let's connect and discuss potential opportunities.
              </p>

              <div className="contact-grid">
                <div className="contact-item">
                  <span className="contact-icon">👤</span>
                  <div>
                    <div className="contact-label">Name</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.name}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <div className="contact-label">Role</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.role}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.location}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <div className="contact-label">Email</div>
                    <a
                      href={`mailto:${resumeData.personalInfo.email}`}
                      className="contact-link"
                    >
                      {resumeData.personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <div className="contact-label">LinkedIn</div>
                    <a
                      href={resumeData.personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      View Profile
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">💻</span>
                  <div>
                    <div className="contact-label">GitHub</div>
                    <a
                      href={resumeData.personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      View Profile
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "resume.pdf") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">resume.pdf</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="resume-preview-card">
              <div className="resume-icon">📄</div>
              <h1 className="resume-title">Resume / CV</h1>
              <p className="resume-subtitle">
                Download my complete professional resume
              </p>

              <div className="resume-summary">
                <div className="resume-stat">
                  <div className="stat-value">
                    {resumeData.experience.length}+
                  </div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="resume-stat">
                  <div className="stat-value">{resumeData.projects.length}</div>
                  <div className="stat-label">Major Projects</div>
                </div>
                <div className="resume-stat">
                  <div className="stat-value">
                    {resumeData.education.length}
                  </div>
                  <div className="stat-label">Degrees</div>
                </div>
              </div>

              <div className="resume-highlights">
                <h3>Highlights</h3>
                <ul>
                  <li>🎓 {resumeData.education[0].degree}</li>
                  <li>🤖 AI/ML & Full-Stack Development Expert</li>
                  <li>🚀 Research & Development Focus</li>
                  <li>🏆 {resumeData.achievements[0]}</li>
                </ul>
              </div>

              <button
                className="download-button"
                onClick={handleDownloadResume}
              >
                <span className="download-icon">⬇</span>
                Download Resume
              </button>

              <p className="resume-note">
                Click the button above to download my complete resume in PDF
                format
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "dino.js") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">dino.js</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="game-preview-card">
              <h2 className="game-title">🦖 Chrome Dino Game</h2>
              <p className="game-instructions">
                Press <kbd>Space</kbd> or <kbd>↑</kbd> to jump, <kbd>↓</kbd> to
                duck
              </p>
              <DinoGame />
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "career_timeline.git") {
      return (
        <div className="home-split-view">
          <div className="code-panel git-log-panel">
            <div className="code-header">
              <span className="git-icon">🌿</span> git log --oneline --graph
            </div>
            <pre className="code-content git-log-content">
              {fileContents["career_timeline.git"]}
            </pre>
          </div>
          <div className="preview-panel">
            {fileContents["career_timeline_preview"]}
          </div>
        </div>
      );
    }
    if (activeTab === "extracurriculars.git") {
      return (
        <div className="home-split-view">
          <div className="code-panel git-log-panel">
            <div className="code-header">
              <span className="git-icon">🌿</span> git log --oneline --graph
            </div>
            <pre className="code-content git-log-content">
              {fileContents["extracurriculars.git"]}
            </pre>
          </div>
          <div className="preview-panel">
            {fileContents["extracurriculars_preview"]}
          </div>
        </div>
      );
    }

    if (typeof content === "object") {
      return (
        <div className="content-pane active raw-html-content">{content}</div>
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
