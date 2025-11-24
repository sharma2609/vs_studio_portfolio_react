import { usePortfolio } from "../../contexts/PortfolioContext";
import DinoGame from "./DinoGame";
import resumeData from "../../data/resumeData";

const EditorContent = () => {
  const { activeTab, openTabs } = usePortfolio();

  const fileContents = {
    "home.jsx": `import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>${resumeData.personalInfo.name}</h1>
      <h2>${resumeData.personalInfo.role}</h2>
      <p>Welcome to my interactive portfolio.</p>
      <p>Click on the files in the explorer to learn more about me, or head to the CHATBOT tab in the terminal to ask me anything!</p>
    </div>
  );
};

export default HomePage;`,

    "about.md": `# About Me

Hello! I'm ${resumeData.personalInfo.name}, ${
      resumeData.personalInfo.role
    }. I'm passionate about AI/ML and building innovative solutions that make a difference.

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

console.log('My Projects:', projects);

// Project Details:
${resumeData.projects
  .map(
    (project, index) => `
// ${index + 1}. ${project.name}
// Type: ${project.type}
// Description: ${project.description}
// Tech Stack: ${project.techStack.join(", ")}
// Features: ${project.features.join(", ")}
`
  )
  .join("\n")}`,

    "contact.html": `<div class="contact-info">
  <h2>Get in Touch</h2>
  <p><strong>Name:</strong> ${resumeData.personalInfo.name}</p>
  <p><strong>Role:</strong> ${resumeData.personalInfo.role}</p>
  <p><strong>Location:</strong> ${resumeData.personalInfo.location}</p>
  <p><strong>Email:</strong> <a href="mailto:${resumeData.personalInfo.email}">${resumeData.personalInfo.email}</a></p>
  <p><strong>Phone:</strong> ${resumeData.personalInfo.phone}</p>
  <p><strong>LinkedIn:</strong> <a href="${resumeData.personalInfo.socials.linkedin}" target="_blank">View Profile</a></p>
  <p><strong>GitHub:</strong> <a href="${resumeData.personalInfo.socials.github}" target="_blank">View Profile</a></p>
  <p><strong>Portfolio:</strong> <a href="${resumeData.personalInfo.socials.website}" target="_blank">Visit Website</a></p>
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
                <span className="type feat">feat</span>: Started as Assistant
                Professor at FIT, Meerut
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on Sep 2025
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
                <span className="type initial">init</span>: Graduated B.Tech
                (CSE) from MIET, Meerut
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on 2020-2024
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
          {resumeData.achievements.map((achievement, index) => {
            let type = "achievement";
            let date = "";

            if (achievement.includes("Black Belt")) {
              date = "2021";
            } else if (achievement.includes("Vice Sports Captain")) {
              date = "2017-2018";
              type = "feat";
            } else if (achievement.includes("National Gold")) {
              date = "2015-2018";
            } else if (achievement.includes("Fujairah")) {
              date = "2019";
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
          <h1>Welcome to my Portfolio!</h1>
          <p>Click on a file in the explorer to get started.</p>
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
