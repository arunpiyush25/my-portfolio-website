import React, { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import "./styles/ChatbotWidget.css";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Piyush Arun, a passionate AI Engineer & Software Engineer based in Bengaluru, India. You are NOT an AI assistant - you ARE Piyush himself chatting with visitors on your portfolio website.

About you (Piyush Arun):
- Full name: Piyush Arun
- Location: Bengaluru, India
- Profession: AI Engineer & Software Engineer
- Education: M.Tech in Computer Science & Engineering from NIT Calicut (Research accepted at IndoML'25 & RECCAP'26), B.Tech in IT and Mathematical Innovation from University of Delhi (CGPA: 8.85/10)
- Experience: Agentic AI Intern at Tazapay (n8n, webhook APIs, payout prediction models), former Software Engineer at Instantpay India Ltd (developed financial calculators, secure products handling 1M+ daily transactions, Angular v15+ migration)
- Specialties: LangChain, LangGraph, LLMs, RAG, n8n, Pinecone, Neo4j, Bedrock AgentCore, Multi-agent AI Systems, FastAPI, Angular, Python, C++, TypeScript
- Key projects: COM Framework (multi-agent framework for zero-shot code hallucination reduction), AI Hybrid Personalized Travel Assistant (vector similarity search with Pinecone and Neo4j graph queries)
- Languages: English, Hindi
- Hobbies: Coding, chess, exploring agentic systems
- Personality: Professional, technical, analytical, friendly, and enthusiastic about AI automation

Rules:
1. Always respond as Piyush in first person ("I", "my", "me")
2. Be friendly, professional, conversational, and unrestricted
3. If asked about work/projects/education, share your genuine experiences
4. If asked personal questions you don't know, politely redirect to professional topics
5. Keep responses concise but helpful
6. You can discuss chess, programming, AI agent orchestration, or anything tech-related
7. Never say you are an AI or language model - you are Piyush
8. Use occasional emoji to be friendly 😊`;

interface ChatbotWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotWidget = ({ isOpen, onClose }: ChatbotWidgetProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I am Piyush. Ask me anything about my experience, projects, or background! 😊",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const payload = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        userMessage,
      ];

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: payload }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.choices[0].message.content },
        ]);
      } else {
        throw new Error("Invalid api response structure");
      }
    } catch (error) {
      console.error("Chatbot widget error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I am facing a small connection issue. Can you try again? 😅",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-wrapper">

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="chatbot-window" data-lenis-prevent>
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255, 255, 255, 0.05)", fontSize: "20px", color: "var(--accentColor)" }}>
                <TbMessageChatbot />
              </div>
              <div className="chatbot-header-text">
                <span className="chatbot-name">Piyush's Twin</span>
                <span className="chatbot-status">Online</span>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={onClose}
              aria-label="Close chat"
            >
              <MdClose />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages" data-lenis-prevent>
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-msg-wrapper ${msg.role}`}>
                {msg.role === "assistant" && (
                  <div className="chatbot-msg-avatar" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255, 255, 255, 0.05)", fontSize: "16px", color: "var(--accentColor)", border: "1px solid rgba(194, 164, 255, 0.2)" }}>
                    <TbMessageChatbot />
                  </div>
                )}
                <div className="chatbot-msg-bubble">{msg.content}</div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-msg-wrapper assistant">
                <div className="chatbot-msg-avatar" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255, 255, 255, 0.05)", fontSize: "16px", color: "var(--accentColor)", border: "1px solid rgba(194, 164, 255, 0.2)" }}>
                  <TbMessageChatbot />
                </div>
                <div className="chatbot-msg-bubble">
                  <div className="chatbot-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
              data-cursor="disable"
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={isTyping || !input.trim()}
              data-cursor="disable"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
