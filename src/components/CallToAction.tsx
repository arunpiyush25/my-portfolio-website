import { useState } from "react";
import HireMeModal from "./HireMeModal";
import "./styles/CallToAction.css";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="cta-section" id="cta">
      <div className="cta-buttons">
        <button
          onClick={() => setIsModalOpen(true)}
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
          style={{ border: "none", cursor: "pointer" }}
        >
          Contact Me →
        </button>
      </div>

      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CallToAction;
