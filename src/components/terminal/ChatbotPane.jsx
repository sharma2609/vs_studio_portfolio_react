import { useState, useEffect, useRef } from "react";

const ChatbotPane = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const historyRef = useRef(null);

  // Portfolio data for the chatbot
  const portfolioData = {
    about: `# About Me

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

    projects: `const projects = [
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
];`,

    contact: `<div class="contact-info">
  <h2>Get in Touch</h2>
  <p>Email: <a href="mailto:priyanshu.sharma.2609p@gmail.com">priyanshu.sharma.2609p@gmail.com</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/priyanshu-sharma-p2609s" target="_blank">linkedin.com/in/Priyanshu-Sharma</a></p>
  <p>GitHub: <a href="https://github.com/sharma2609" target="_blank">github.com/sharma2609</a></p>
</div>`,

    timeline: `Career Timeline:
- feat: Added AI Minor & new projects (May 04, 2024)
- feat: Web Development Intern at BR Softsol (Aug 25, 2022)
- docs: Updated skills with HTML, CSS, & JavaScript (Oct 10, 2021)
- init: Began B.Tech in Computer Science (Aug 01, 2020)

Achievements:
- achievement: Earned Black Belt in Taekwondo (Mar 20, 2021)
- feat: Vice Sports Captain at School (May 15, 2018)
- achievement: 3x National Gold Medalist in Taekwondo (2017-2019)`,
  };

  useEffect(() => {
    // Initial bot message
    setMessages([
      {
        type: "bot",
        text: "Hi there! I'm Priyanshu's AI assistant. Ask me anything about his resume, projects, skills, or experience! Try typing 'hello' or 'skills'.",
      },
    ]);
  }, []);

  const testChatbot = () => {
    const testMessage = "What are his skills?";
    setMessages((prev) => [...prev, { type: "user", text: testMessage }]);
    setTimeout(() => {
      const response = getBotResponse(testMessage);
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
    }, 500);
  };

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    console.log("User message:", userMessage); // Debug log
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);

    // Show typing indicator
    setIsTyping(true);
    setMessages((prev) => [...prev, { type: "loading", text: "..." }]);

    // Get bot response
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(userMessage);
      console.log("Bot response:", response); // Debug log
      setMessages((prev) => {
        const newMessages = prev.filter((msg) => msg.type !== "loading");
        return [...newMessages, { type: "bot", text: response }];
      });
    }, 500 + Math.random() * 500); // Faster response for testing
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Simple keyword matching - much more reliable
    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      return "Hello! I'm here to help you learn about Priyanshu Sharma. I can tell you about his skills, projects, work experience, education, or contact information. What would you like to know?";
    }

    if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("tech") ||
      input.includes("programming")
    ) {
      return `Priyanshu has expertise in:

🔹 Programming Languages: Python, JavaScript, SQL
🔹 Frontend: HTML, CSS, SCSS, Tailwind, Bootstrap, React, Next.js
🔹 Backend: Node.js, Express
🔹 Databases: MySQL, MongoDB
🔹 Tools & Concepts: Git, VITE, Framer Motion, OOP

He's particularly strong in full-stack web development and has experience with AI/ML technologies.`;
    }

    if (
      input.includes("experience") ||
      input.includes("work") ||
      input.includes("job") ||
      input.includes("intern")
    ) {
      return `Here's Priyanshu's work experience:

1. Web Development Intern at BR Softsol
   📅 Aug 2022 - Nov 2022
   📝 Collaborated on upgrading company homepage, designed new features and advanced filters
   💻 Technologies: HTML, CSS, Javascript, jQuery, AJAX, PHP

2. Web Development Intern at MIET
   📅 Sep 2021 - Oct 2021
   📝 Developed simple and responsive web applications
   💻 Technologies: HTML, CSS, Javascript

He's currently pursuing a Minor in AI at IIT Ropar to further enhance his technical expertise.`;
    }

    if (
      input.includes("project") ||
      input.includes("portfolio") ||
      input.includes("build") ||
      input.includes("app")
    ) {
      return `Priyanshu has worked on several impressive projects:

1. Truth_Finder | Fake News Detection (2024)
   A web application that determines news authenticity using ML models like Random Forest and Gradient Boosting with TF-IDF vectorization.
   Tech Stack: Python, React, Node, ML, Tailwind, VITE

2. Hue_Haven | Color Palette Generator (2024)
   A React-based tool for creating color palettes with random/custom generation modes and copy-to-clipboard function.
   Tech Stack: React, HTML, CSS, JavaScript, VITE

3. Spend_Wise | Money Tracker App (2024)
   A money-tracking application with real-time expense/income tracking and transaction history visualization.
   Tech Stack: React, HTML, CSS, JavaScript, VITE`;
    }

    if (
      input.includes("education") ||
      input.includes("study") ||
      input.includes("degree") ||
      input.includes("college")
    ) {
      return `Priyanshu's educational background:

🎓 Bachelor of Technology, Computer Science
   MIET, Meerut (2020-2024)
   CGPA: 7.08

🎓 Minor in AI
   IIT Ropar (2024 - Present)

📚 XII (CBSE)
   Dayawati Modi Academy | 88.4% (2019)

📚 X (CBSE)
   Dayawati Modi Academy | 93.1% (2017)`;
    }

    if (
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("reach") ||
      input.includes("connect")
    ) {
      return `You can connect with Priyanshu through:

📧 Email: priyanshu.sharma.2609p@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/priyanshu-sharma-p2609s
💻 GitHub: https://github.com/sharma2609
🔗 Bento: https://bento.me/sharma2609p
📍 Location: Meerut, India

Feel free to reach out for collaborations, opportunities, or just to connect!`;
    }

    if (input.includes("truth") || input.includes("fake news")) {
      return `Truth_Finder is one of Priyanshu's most impressive projects!

It's a web application that determines the authenticity of news using advanced ML models like Random Forest and Gradient Boosting with TF-IDF vectorization to analyze news authenticity.

Built with: Python, React, Node, ML, Tailwind, VITE

This project showcases his expertise in both machine learning and full-stack web development.`;
    }

    if (input.includes("hue") || input.includes("color")) {
      return `Hue_Haven is a creative tool Priyanshu built!

It's a React-based tool for creating color palettes, featuring random/custom generation modes and a copy-to-clipboard function. It's designed to help designers and developers create beautiful color schemes easily.

Tech stack: React, HTML, CSS, JavaScript, VITE

This project demonstrates his frontend development skills and eye for design.`;
    }

    if (input.includes("spend") || input.includes("money")) {
      return `Spend_Wise is a practical financial management tool!

It's a money-tracking application with real-time expense/income tracking and transaction history visualization. Users can easily monitor their financial habits with intuitive charts and reports.

Built using: React, HTML, CSS, JavaScript, VITE

This project shows his ability to create useful, real-world applications.`;
    }

    if (
      input.includes("achievement") ||
      input.includes("taekwondo") ||
      input.includes("sport")
    ) {
      return `Priyanshu's notable achievements:

🏆 Earned Black Belt in Taekwondo (Mar 2021)
🏆 Vice Sports Captain at School (May 2018)
🏆 3x National Gold Medalist in Taekwondo (2017-2019)

He has a strong background in martial arts and leadership, showing discipline and dedication both in sports and academics!`;
    }

    if (
      input.includes("where") ||
      input.includes("location") ||
      input.includes("live")
    ) {
      return `Priyanshu is based in Meerut, India. He's open to remote opportunities and collaborations worldwide!`;
    }

    // Default response
    return "That's an interesting question! I can tell you about Priyanshu's skills, projects, work experience, education, or contact information. What would you like to know more about?";
  };

  return (
    <div
      className="terminal-content active"
      style={{ justifyContent: "flex-end" }}
    >
      <div
        ref={historyRef}
        style={{
          flexGrow: 1,
          overflowY: "auto",
          marginBottom: "var(--padding-md)",
          lineHeight: 1.5,
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.type}`}
            style={{
              marginBottom: "var(--padding-sm)",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            <span
              className="prompt"
              style={{
                color:
                  message.type === "user"
                    ? "#4af626"
                    : message.type === "loading"
                    ? "#f9d71c"
                    : "#569cd6",
              }}
            >
              {message.type === "user"
                ? "guest@priyanshu:~$ "
                : "priyanshu-ai:~$ "}
            </span>
            <span
              className="text"
              style={{
                color:
                  message.type === "user"
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
                animation:
                  message.type === "loading"
                    ? "blink 1s step-end infinite"
                    : "none",
              }}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={testChatbot}
          style={{
            background: "var(--accent-primary)",
            color: "white",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "0.8rem",
            marginBottom: "8px",
            cursor: "pointer",
          }}
        >
          Test Chatbot
        </button>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span className="terminal-prompt">guest@priyanshu:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects, skills, etc..."
            autoComplete="off"
            style={{
              flexGrow: 1,
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: "1.1rem",
              outline: "none",
              paddingLeft: "var(--padding-sm)",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatbotPane;
