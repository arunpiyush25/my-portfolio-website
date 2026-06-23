import React, { useState, useEffect } from "react";
import { MdClose, MdCheckCircle, MdErrorOutline } from "react-icons/md";
import { config } from "../config";
import { lenis } from "./Navbar";
import "./styles/HireMeModal.css";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireMeModal = ({ isOpen, onClose }: HireMeModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    reason: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    // Pause Lenis smooth scroll
    lenis?.stop();
    
    // Prevent default body scrolling
    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // Resume Lenis smooth scroll
      lenis?.start();
      // Restore body overflow
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: config.contact.web3formsAccessKey ? config.contact.web3formsAccessKey.trim() : "",
          subject: `New Portfolio Hire Me Inquiry from ${formData.name}`,
          from_name: "Portfolio Hire Me Form",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          designation: formData.designation,
          contact_reason: formData.reason,
          message: formData.message || "No additional message provided.",
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          designation: "",
          reason: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit the form. Please check your internet connection.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} data-lenis-prevent>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} data-lenis-prevent>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <MdClose />
        </button>

        {status === "success" ? (
          <div className="form-success-state">
            <div className="state-icon">
              <MdCheckCircle />
            </div>
            <h4>Thank You!</h4>
            <p>Your message has been sent successfully. I will get back to you as soon as possible.</p>
            <button className="state-btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : status === "error" ? (
          <div className="form-error-state">
            <div className="state-icon">
              <MdErrorOutline />
            </div>
            <h4>Submission Failed</h4>
            <p>{errorMessage}</p>
            <button className="state-btn" onClick={() => setStatus("idle")}>
              Try Again
            </button>
          </div>
        ) : (
          <>
            <h3>
              Let's Work <span>Together</span>
            </h3>
            <form onSubmit={handleSubmit} className="hire-form">
              <div className="form-group">
                <label htmlFor="name">
                  Name<span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">
                  Company<span>*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your organization name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="designation">
                  Designation<span>*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="e.g. Engineering Manager, Recruiter"
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">
                  Why are you contacting me?<span>*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select a option
                  </option>
                  <option value="Full-time Opportunity">Full-time Job Opportunity</option>
                  <option value="Contract / Freelance Project">Contract / Freelance Project</option>
                  <option value="Consulting">Consulting / Advisory</option>
                  <option value="Collaboration">Collaboration / Open Source</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Anything you wanna say? (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share any additional details, project scope, or links..."
                />
              </div>

              <button type="submit" className="submit-btn" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default HireMeModal;
