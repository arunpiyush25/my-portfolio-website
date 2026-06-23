import { useState } from "react";
import "./styles/Career.css";
import { config } from "../config";

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="experience-section section-container" id="experience">
      <div className="career-container">
        <h2>
          MY <span>EXPERIENCE</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h5 className="career-period">{exp.period}</h5>
              </div>
              <div className="career-details">
                <p>{exp.description}</p>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <>
                    <button
                      className="show-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedItems[index] ? "Show Less" : "Show More"}
                    </button>
                    <ul className={`career-responsibilities ${expandedItems[index] ? "expanded" : ""}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
