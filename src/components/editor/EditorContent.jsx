import { usePortfolio } from "../../contexts/PortfolioContext";
import DinoGame from "./DinoGame";
import SplitView from "./SplitView";
import resumeData from "../../data/resumeData";
import { RESUME_PDF_PATH } from "../../utils/fileIcons";

const EditorContent = () => {
  const { activeTab, openTabs, openFile } = usePortfolio();

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
      <p>Explore the files in the sidebar to learn more about my skills, experience, and projects.</p>
    </div>
  );
};

export default HomePage;`,

    "about.md": `# About Me

I'm ${resumeData.personalInfo.name}, an ${resumeData.personalInfo.role} based in ${resumeData.personalInfo.location}.

## Background

I specialize in building AI/ML systems and full-stack applications. My work focuses on natural language processing, machine learning model development, and creating practical solutions using modern technologies.

## Current Focus

- AI/ML system development and research
- Natural language processing applications
- Full-stack web development
- Teaching and mentoring in computer science

## Approach

I believe in building practical, scalable solutions that solve real-world problems. My experience spans from research and development to teaching and implementation.

---

For detailed information, check out:
- **skills.json** - Technical skills and expertise
- **experience.ts** - Work history and roles
- **education.py** - Academic background
- **projects.js** - Portfolio of work`,

    "skills.json": `{
  "programming_languages": [
    "Python",
    "JavaScript",
    "SQL"
  ],
  "ai_ml": {
    "core": [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Neural Networks",
      "Classification"
    ],
    "libraries": [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "PyTorch",
      "scikit-learn",
      "Transformers"
    ]
  },
  "web_development": [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React",
    "Vite"
  ],
  "tools": [
    "Git",
    "Google Colab",
    "Streamlit"
  ],
  "databases": [
    "MySQL"
  ],
  "core_concepts": [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming"
  ]
}`,

    "experience.ts": `interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experience: Experience[] = [
  {
    title: "Guest Faculty",
    company: "FIT, Meerut",
    period: "Sep 2025 – Dec 2025",
    description: "Taught Data Structures and Algorithms to 2nd year B.Tech students and Machine Learning to 3rd year students. Prepared coding assignments and sessional exam papers covering both theoretical and practical aspects. Started a weekly LeetCode session to get students into a habit of regular problem solving. Handled scheduling and coordination for the 3rd-year batch throughout the semester.",
    skills: ["Teaching", "Data Structures", "Algorithms", "Machine Learning", "Academic Coordination"]
  },
  {
    title: "Front-end Intern",
    company: "BR Softsol",
    period: "Aug 2022 – Nov 2022",
    description: "Built and maintained responsive web interfaces for dynamic web applications. Worked on frontend features using HTML, CSS, JavaScript, and jQuery. Used AJAX to handle asynchronous communication between frontend and backend, reducing page reloads. Assisted with debugging reported issues and making UI fixes based on feedback.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Web Development"]
  },
  {
    title: "Python Internship",
    company: "E&ICT Academy, IIT Kanpur",
    period: "Aug 2021 – Mar 2022",
    description: "Completed a structured Python programming internship covering core language concepts and object-oriented programming. Built various projects as part of the coursework, applying concepts learned throughout the program. Gained hands-on experience writing clean, modular Python code through regular assignments.",
    skills: ["Python", "Object-Oriented Programming", "Problem Solving"]
  }
];

export default experience;`,

    "education.py": `"""
Education Background
"""

class Education:
    def __init__(self, degree, institution, year, details):
        self.degree = degree
        self.institution = institution
        self.year = year
        self.details = details

education = [
    Education(
        degree="Minor in AI",
        institution="IIT Ropar",
        year="2024 - 2026",
        details="Multidisciplinary AI program covering ML, DL, NLP, and multilingual language processing."
    ),
    Education(
        degree="Bachelor of Technology in Computer Science",
        institution="MIET, Meerut",
        year="2020 - 2024",
        details="Graduated with a focus on Computer Science and Engineering."
    ),
    Education(
        degree="XII (CBSE)",
        institution="Dayawati Modi Academy",
        year="2018 - 2019",
        details="Completed Higher Secondary Education."
    )
]

# Print education details
for edu in education:
    print(f"{edu.degree} - {edu.institution} ({edu.year})")
`,

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
  <p><strong>Portfolio:</strong> <a href="${resumeData.personalInfo.socials.portfolio}" target="_blank">Visit Website</a></p>
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
Date:   2024-2026

    feat: Pursuing AI Minor from IIT Ropar
    
    - Multidisciplinary AI program
    - Covered ML, DL, NLP, and multilingual processing
    - Advanced AI/ML specialization

commit teaching2025
Author: ${resumeData.personalInfo.name}
Date:   Sep 2025 - Dec 2025

    feat: Guest Faculty at FIT, Meerut
    
    - Taught Data Structures & Algorithms and Machine Learning
    - Prepared assignments and exam papers
    - Started weekly LeetCode sessions for students

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
                <span className="type feat">feat</span>: Pursuing AI Minor from
                IIT Ropar
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on 2024-2026
              </div>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-message">
                <span className="type feat">feat</span>: Guest Faculty at FIT, Meerut
              </div>
              <div className="timeline-details">
                {resumeData.personalInfo.name} pushed to main on Sep 2025 - Dec 2025
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

    "extracurriculars.git": `commit blackbelt2016
Author: ${resumeData.personalInfo.name}
Date:   2016

    achievement: Earned Black Belt Dan - 1 in Taekwondo
    
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

commit medals2018
Author: ${resumeData.personalInfo.name}
Date:   2015, 2017, 2018

    achievement: National Medalist in Taekwondo (2 Gold, 1 Silver)
    
    - Won 2 gold medals and 1 silver medal
    - Represented at national level competitions
    - Consistent excellence in martial arts

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
                <div className="card-icon">▸</div>
                <div className="card-title">Home</div>
                <div className="card-description">Start here</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("about.md")}
              >
                <div className="card-icon">◉</div>
                <div className="card-title">About</div>
                <div className="card-description">Background & bio</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("skills.json")}
              >
                <div className="card-icon">{"{}"}</div>
                <div className="card-title">Skills</div>
                <div className="card-description">Technical expertise</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("experience.ts")}
              >
                <div className="card-icon">◈</div>
                <div className="card-title">Experience</div>
                <div className="card-description">Work history</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("projects.js")}
              >
                <div className="card-icon">⚡</div>
                <div className="card-title">Projects</div>
                <div className="card-description">Portfolio work</div>
              </button>
              <button
                className="quick-start-card"
                onClick={() => openFile("contact.html")}
              >
                <div className="card-icon">@</div>
                <div className="card-title">Contact</div>
                <div className="card-description">Get in touch</div>
              </button>
            </div>
          </div>

          <div className="welcome-features">
            <div className="feature-item">
              <span className="feature-icon">◧</span>
              <span className="feature-text">Explore files in the sidebar</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">◪</span>
              <span className="feature-text">Chat with AI in the terminal</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">◨</span>
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
            Browse files in the explorer to learn more about my skills, experience, and projects.
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
                I'm <strong>{resumeData.personalInfo.name}</strong>, an{" "}
                {resumeData.personalInfo.role} based in {resumeData.personalInfo.location}.
              </p>
              
              <div className="about-section">
                <h3>Background</h3>
                <p>I specialize in building AI/ML systems and full-stack applications. My work focuses on natural language processing, machine learning model development, and creating practical solutions using modern technologies.</p>
              </div>

              <div className="about-section">
                <h3>Current Focus</h3>
                <ul className="about-list">
                  <li>AI/ML system development and research</li>
                  <li>Natural language processing applications</li>
                  <li>Full-stack web development</li>
                  <li>Teaching and mentoring in computer science</li>
                </ul>
              </div>

              <div className="about-section">
                <h3>Approach</h3>
                <p>I believe in building practical, scalable solutions that solve real-world problems. My experience spans from research and development to teaching and implementation.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "skills.json") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">skills.json</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="skills-preview-card">
              <h1 className="skills-title">Technical Skills</h1>

              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Programming Languages</h3>
                  <div className="skill-tags">
                    {resumeData.skills.programming.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h3>AI & Machine Learning</h3>
                  <div className="skill-tags">
                    {resumeData.skills.ai_ml.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h3>ML Libraries & Frameworks</h3>
                  <div className="skill-tags">
                    {resumeData.skills.libraries.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Web Development</h3>
                  <div className="skill-tags">
                    {resumeData.skills.webDev.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Tools & Platforms</h3>
                  <div className="skill-tags">
                    {resumeData.skills.tools.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Core Concepts</h3>
                  <div className="skill-tags">
                    {resumeData.skills.core.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "experience.ts") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">experience.ts</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="experience-preview-card">
              <h1 className="experience-title">Work Experience</h1>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-card">
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-period">{exp.period}</p>
                  <p className="exp-description">{exp.description}</p>
                  <div className="exp-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
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
    if (activeTab === "education.py") {
      return (
        <div className="home-split-view">
          <div className="code-panel">
            <div className="code-header">education.py</div>
            <pre className="code-content">{content}</pre>
          </div>
          <div className="preview-panel">
            <div className="education-preview-card">
              <h1 className="education-title">Education</h1>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-year">{edu.year}</p>
                  <p className="edu-details">{edu.details}</p>
                </div>
              ))}
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
              <h1 className="projects-title">Projects</h1>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <p className="project-domain">{project.domain}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    <strong>Tech Stack:</strong>
                    <div className="tech-tags">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-features">
                    <strong>Key Features:</strong>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
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
                  <span className="contact-icon">▸</span>
                  <div>
                    <div className="contact-label">Name</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.name}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">◉</span>
                  <div>
                    <div className="contact-label">Role</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.role}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">◈</span>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.location}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">@</span>
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
                  <span className="contact-icon">☎</span>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">
                      {resumeData.personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">◪</span>
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
                  <span className="contact-icon">◧</span>
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

                <div className="contact-item">
                  <span className="contact-icon">◨</span>
                  <div>
                    <div className="contact-label">Portfolio</div>
                    <a
                      href={resumeData.personalInfo.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Visit Website
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
              <div className="resume-icon">▣</div>
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
                  <li>{resumeData.education[0].degree}</li>
                  <li>AI/ML & Full-Stack Development Expert</li>
                  <li>Research & Development Focus</li>
                  <li>{resumeData.achievements[0]}</li>
                </ul>
              </div>

              <button
                className="download-button"
                onClick={handleDownloadResume}
              >
                <span className="download-icon">↓</span>
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
              <h2 className="game-title">Chrome Dino Game</h2>
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
