import { useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import ChatbotWidget from "./ChatbotWidget";

const SocialIcons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsChatOpen(!isChatOpen);
            }}
            data-cursor="icons"
            className="chatbot-icon-trigger"
            style={{ color: isChatOpen ? "var(--accentColor)" : "inherit" }}
            title="Chat with Piyush's AI twin"
          >
            <TbMessageChatbot />
          </a>
        </span>
      </div>
      
      <button 
        className={`chatbot-mobile-trigger ${isChatOpen ? "open" : ""}`}
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Toggle chat widget"
      >
        {isChatOpen ? <MdClose /> : <TbMessageChatbot />}
      </button>

      <a className="resume-button" href="../resume/Piyush_CV.pdf">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>

      <ChatbotWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
};

export default SocialIcons;
