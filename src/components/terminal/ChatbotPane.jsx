import { useState, useEffect, useRef, useCallback } from "react";
import resumeData from "../../data/resumeData";

const ChatbotPane = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const historyRef = useRef(null);
  const replyTimeoutRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        type: "bot",
        text: "Hi! I'm Priyanshu's portfolio assistant. Ask about skills, projects, experience, education, or contact details.",
      },
    ]);
  }, []);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) clearTimeout(replyTimeoutRef.current);
    };
  }, []);

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

    const translationProject = projects[0];
    const fakeNewsProject = projects[1];

    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      return `Hello! I can tell you about ${personalInfo.name}, ${personalInfo.role}. Ask about skills, projects, experience, education, or achievements.`;
    }

    if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("tech") ||
      input.includes("programming")
    ) {
      return `Technical skills:
\n🔹 Programming: ${skills.programming.join(", ")}
🔹 AI/ML: ${skills.ai_ml.join(", ")}
🔹 Web: ${skills.webDev.join(", ")}
🔹 Libraries: ${skills.libraries.join(", ")}
🔹 Databases: ${skills.databases.join(", ")}
🔹 Core: ${skills.core.join(", ")}
🔹 Tools: ${skills.tools.join(", ")}`;
    }

    if (
      input.includes("experience") ||
      input.includes("work") ||
      input.includes("job") ||
      input.includes("teaching") ||
      input.includes("career")
    ) {
      const exp = experience[0];
      const eduSummary = education
        .map((e) => `• ${e.degree} — ${e.institution} (${e.year})`)
        .join("\n");

      return `Professional experience:
\n💼 ${exp.title} at ${exp.company} (${exp.period})
• ${exp.description}
• Skills: ${exp.skills.join(", ")}

Education:
\n${eduSummary}`;
    }

    if (
      input.includes("project") ||
      input.includes("portfolio") ||
      input.includes("build") ||
      input.includes("app")
    ) {
      return projects
        .map(
          (p, i) =>
            `${i + 1}. ${p.name}\n   • ${p.description}\n   • Tech: ${p.techStack.join(", ")}`
        )
        .join("\n\n");
    }

    if (
      input.includes("truth") ||
      input.includes("fake news") ||
      input.includes("detection")
    ) {
      const p = fakeNewsProject;
      return `**${p.name}** (${p.type})
\n• ${p.description}
• Features: ${p.features.join(", ")}
• Tech: ${p.techStack.join(", ")}`;
    }

    if (
      input.includes("translation") ||
      input.includes("translator") ||
      input.includes("multilingual") ||
      input.includes("nllb")
    ) {
      const p = translationProject;
      return `**${p.name}** (${p.type})
\n• ${p.description}
• Features: ${p.features.join(", ")}
• Tech: ${p.techStack.join(", ")}`;
    }

    if (
      input.includes("education") ||
      input.includes("study") ||
      input.includes("degree") ||
      input.includes("college")
    ) {
      const lines = education
        .map((e) => {
          const extra = e.details ? `\n   ${e.details}` : "";
          return `🎓 ${e.degree} — ${e.institution} (${e.year})${extra}`;
        })
        .join("\n\n");

      return `Education:\n\n${lines}`;
    }

    if (
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("reach") ||
      input.includes("connect") ||
      input.includes("phone")
    ) {
      return `Contact:
\n📧 ${personalInfo.email}
📱 ${personalInfo.phone}
💼 ${personalInfo.socials.linkedin}
💻 ${personalInfo.socials.github}
📍 ${personalInfo.location}`;
    }

    if (
      input.includes("where is he") ||
      input.includes("where does he live") ||
      input.includes("location") ||
      input.includes("based")
    ) {
      return `${personalInfo.name} is based in ${personalInfo.location}.`;
    }

    if (
      input.includes("achievement") ||
      input.includes("taekwondo") ||
      input.includes("sport") ||
      input.includes("medal")
    ) {
      return `Achievements:\n\n${achievements.map((a) => `🏆 ${a}`).join("\n")}`;
    }

    if (
      input.includes("help") ||
      input.includes("what can you do") ||
      input.includes("options")
    ) {
      return `Try asking:
• "What are his skills?"
• "Tell me about fake news detection"
• "What is his current job?"
• "How can I contact him?"`;
    }

    return "I can help with skills, projects, experience, education, achievements, or contact info. What would you like to know?";
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!input.trim() || isTyping) return;

      const userMessage = input.trim();
      setInput("");
      setIsTyping(true);

      setMessages((prev) => [
        ...prev,
        { type: "user", text: userMessage },
        { type: "loading", text: "..." },
      ]);

      replyTimeoutRef.current = setTimeout(() => {
        const response = getBotResponse(userMessage);
        setIsTyping(false);
        setMessages((prev) => {
          const withoutLoading = prev.filter((msg) => msg.type !== "loading");
          return [...withoutLoading, { type: "bot", text: response }];
        });
      }, 400 + Math.random() * 400);
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
          }

          return (
            <div
              key={`${message.type}-${index}`}
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

      <form onSubmit={handleSubmit} className="chatbot-form">
        <span className="chatbot-prompt-user">guest@priyanshu:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about skills, projects, experience..."
          autoComplete="off"
          className="chatbot-input"
          disabled={isTyping}
          aria-label="Chat message"
        />
      </form>
    </div>
  );
};

export default ChatbotPane;
