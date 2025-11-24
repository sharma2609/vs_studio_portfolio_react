import { useState, useEffect, useRef, useCallback } from "react";
import resumeData from "../../data/resumeData";

const ChatbotPane = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const historyRef = useRef(null);

  // Initial bot message on component load
  useEffect(() => {
    setMessages([
      {
        type: "bot",
        text: "Hi there! I'm Priyanshu's AI assistant. Ask me anything about his skills, projects, experience, education, or achievements! Try typing 'hello' or 'skills'.",
      },
    ]);
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [messages]);

  // --- Core Logic: Chatbot Response Handling (now uses resumeData) ---

  const getBotResponse = useCallback((userInput) => {
    const input = userInput.toLowerCase();

    const {
      personalInfo,
      skills,
      experience,
      projects,
      education,
      achievements,
    } = resumeData;

    // 1) Greeting
    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      return `Hello! I'm here to help you learn about ${personalInfo.name}, ${personalInfo.role}. I can tell you about his skills, projects, work experience, education, or achievements. What would you like to know?`;
    }

    // 2) Skills
    if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("tech") ||
      input.includes("programming")
    ) {
      return `Priyanshu's expertise is focused on AI/ML and Full-Stack Development:
\n🔹 Programming: ${skills.programming.join(", ")}
🔹 AI/ML: ${skills.ai_ml.join(", ")}
🔹 Web Development: ${skills.webDev.join(", ")}
🔹 Core CS Concepts: ${skills.core.join(", ")}
🔹 Tools: ${skills.tools.join(", ")}`;
    }

    // 3) Experience (Assistant Professor)
    if (
      input.includes("experience") ||
      input.includes("work") ||
      input.includes("job") ||
      input.includes("professor") ||
      input.includes("teaching")
    ) {
      const exp = experience[0];
      return `Priyanshu's primary professional experience:
\n👨‍🏫 ${exp.title} | ${exp.company} (${exp.period})
${exp.description}
\nSkills Applied: ${exp.skills.join(", ")}`;
    }

    // 4) Projects (general)
    if (
      input.includes("project") ||
      input.includes("portfolio") ||
      input.includes("build") ||
      input.includes("app")
    ) {
      const [p1, p2] = projects;
      return `Priyanshu has worked on two key AI projects:
\n1. ${p1.name} | ${p1.type}
   • ${p1.description}
   • Key Features: ${p1.features.join(", ")}
   • Tech: ${p1.techStack.join(", ")}
\n2. ${p2.name} | ${p2.type}
   • ${p2.description}
   • Key Features: ${p2.features.join(", ")}
   • Tech: ${p2.techStack.join(", ")}`;
    }

    // 5) Specific Project: Fake News Detection
    if (
      input.includes("truth") ||
      input.includes("fake news") ||
      input.includes("detection")
    ) {
      const p = projects[0];
      return `The **${p.name}** is a ${p.type}:
\n• ${p.description}
• Key Features: ${p.features.join(", ")}
• Tech used: ${p.techStack.join(", ")}
\nThis project demonstrates Priyanshu's skills in classical ML, text processing, and full-stack development.`;
    }

    // 6) Specific Project: Multilingual Translation System
    if (
      input.includes("translation") ||
      input.includes("translator") ||
      input.includes("multilingual") ||
      input.includes("nllb")
    ) {
      const p = projects[1];
      return `The **${p.name}** is a ${p.type}:
\n• ${p.description}
• Features: ${p.features.join(", ")}
• Tech used: ${p.techStack.join(", ")}
\nThis showcases Priyanshu's experience in NLP, multilingual models, and building practical AI tools.`;
    }

    // 7) Education
    if (
      input.includes("education") ||
      input.includes("study") ||
      input.includes("degree") ||
      input.includes("college")
    ) {
      const lines = education
        .map((e) => {
          const extra = e.details ? `\n   ${e.details}` : "";
          return `🎓 ${e.degree} - ${e.institution} (${e.year})${extra}`;
        })
        .join("\n\n");

      return `Priyanshu's educational background:
\n${lines}`;
    }

    // 8) Contact
    if (
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("reach") ||
      input.includes("connect") ||
      input.includes("phone")
    ) {
      return `You can connect with Priyanshu through:
\n📧 Email: ${personalInfo.email}
📱 Phone: ${personalInfo.phone}
💼 LinkedIn: ${personalInfo.socials.linkedin}
💻 GitHub: ${personalInfo.socials.github}
🔗 Portfolio: ${personalInfo.socials.website}
📍 Location: ${personalInfo.location}`;
    }

    // 9) Location / where he lives
    if (
      input.includes("where is he") ||
      input.includes("where does he live") ||
      input.includes("location") ||
      input.includes("based")
    ) {
      return `${personalInfo.name} is based in ${personalInfo.location}.`;
    }

    // 10) Achievements / Taekwondo
    if (
      input.includes("achievement") ||
      input.includes("taekwondo") ||
      input.includes("sport") ||
      input.includes("medal")
    ) {
      return `Priyanshu's notable achievements:
\n${achievements.map((a) => `🏆 ${a}`).join("\n")}`;
    }

    // 11) Help / what can you do
    if (
      input.includes("help") ||
      input.includes("what can you do") ||
      input.includes("options")
    ) {
      return `You can ask me about:
\n• Skills and technologies
• AI/ML and web development projects
• Teaching and work experience
• Education and current studies
• Achievements and Taekwondo background
• Contact and location

For example, try:
- "What projects has he done in AI?"
- "Tell me about his experience as an Assistant Professor."
- "What are his core skills?"`;
    }

    // Default response
    return "That's an interesting question! I can tell you about Priyanshu's skills, projects, work experience, education, achievements, or contact information. What would you like to know more about?";
  }, []);

  // Function to simulate a test interaction
  const testChatbot = () => {
    const testMessage = "What are his skills?";

    setMessages((prev) => [
      ...prev,
      { type: "user", text: testMessage },
      { type: "loading", text: "..." },
    ]);

    setTimeout(() => {
      const response = getBotResponse(testMessage);

      setMessages((prev) => {
        const newMessages = prev.filter((msg) => msg.type !== "loading");
        return [...newMessages, { type: "bot", text: response }];
      });
    }, 500);
  };

  // Handles user submission
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!input.trim() || isTyping) return;

      const userMessage = input.trim();
      setInput("");

      setMessages((prev) => [
        ...prev,
        { type: "user", text: userMessage },
        { type: "loading", text: "..." },
      ]);

      setIsTyping(true);

      const timeoutId = setTimeout(() => {
        setIsTyping(false);
        const response = getBotResponse(userMessage);

        setMessages((prev) => {
          const newMessages = prev.filter((msg) => msg.type !== "loading");
          return [...newMessages, { type: "bot", text: response }];
        });
      }, 500 + Math.random() * 500);

      return () => clearTimeout(timeoutId);
    },
    [input, isTyping, getBotResponse]
  );

  return (
    <div className="chatbot-terminal-content">
      <div ref={historyRef} className="chatbot-message-history">
        {messages.map((message, index) => {
          let promptClass = "chatbot-prompt-bot";
          let textClass = "chatbot-text-bot";

          if (message.type === "user") {
            promptClass = "chatbot-prompt-user";
            textClass = "chatbot-text-user";
          } else if (message.type === "loading") {
            promptClass = "chatbot-prompt-loading";
            textClass = "chatbot-text-bot";
          }

          return (
            <div
              key={index}
              className="chatbot-message-base"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className={promptClass}>
                {message.type === "user" || message.type === "loading"
                  ? "guest@priyanshu:~$ "
                  : "priyanshu-ai:~$ "}
              </span>
              <span
                className={textClass}
                style={{
                  animation:
                    message.type === "loading"
                      ? "blink 1s step-end infinite"
                      : "none",
                }}
              >
                {message.text}
              </span>
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={testChatbot}
          className="chatbot-test-button"
          disabled={isTyping}
        >
          {isTyping ? "Thinking..." : "🤖 Test Chatbot (Skills)"}
        </button>
        <form onSubmit={handleSubmit} className="chatbot-form">
          <span className="chatbot-prompt-user">guest@priyanshu:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects, skills, etc..."
            autoComplete="off"
            className="chatbot-input"
            disabled={isTyping}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatbotPane;
