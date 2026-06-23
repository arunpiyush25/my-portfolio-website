import { useState } from "react";
import "./styles/Career.css";
import { config } from "../config";

const Education = () => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="education-section section-container" id="education">
      <div className="career-container">
        <h2>
          MY <span>EDUCATION</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.education.map((edu, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.position}</h4>
                  <h5>{edu.company}</h5>
                </div>
                <h5 className="career-period">{edu.period}</h5>
              </div>
              <div className="career-details">
                <p>{edu.description}</p>
                {edu.responsibilities && edu.responsibilities.length > 0 && (
                  <>
                    <button
                      className="show-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedItems[index] ? "Show Less" : "Show More"}
                    </button>
                    <ul className={`career-responsibilities ${expandedItems[index] ? "expanded" : ""}`}>
                      {edu.responsibilities.map((resp, i) => (
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

export default Education;
