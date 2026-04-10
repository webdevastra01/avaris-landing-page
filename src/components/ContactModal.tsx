import React, { useState } from "react";
import { X, Mail, User, MessageSquare, Tag } from "lucide-react";
import "../styles/ContactModal.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="contact-modal__overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="contact-modal__header">
          <h2 className="contact-modal__title">{title}</h2>
          <p className="contact-modal__subtitle">
            {description ||
              "Fill out the form below and we'll get back to you shortly."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="contact-modal__form">
          {/* Name Field */}
          <div className="contact-modal__field">
            <label htmlFor="name" className="contact-modal__label">
              <User size={18} />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              className="contact-modal__input"
            />
          </div>

          {/* Email Field */}
          <div className="contact-modal__field">
            <label htmlFor="email" className="contact-modal__label">
              <Mail size={18} />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
              className="contact-modal__input"
            />
          </div>

          {/* Subject Field */}
          <div className="contact-modal__field">
            <label htmlFor="subject" className="contact-modal__label">
              <Tag size={18} />
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="contact-modal__input contact-modal__select"
            >
              <option value="" disabled>
                Select a topic
              </option>
              <option value="sales-support">Sales Support Services</option>
              <option value="lead-management">Lead Management</option>
              <option value="follow-up-systems">Follow-Up Systems</option>
              <option value="excel-fast-trial">Excel Fast Trial</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="contact-modal__field">
            <label htmlFor="message" className="contact-modal__label">
              <MessageSquare size={18} />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business and what you're looking for..."
              required
              rows={4}
              className="contact-modal__input contact-modal__textarea"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="contact-modal__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="contact-modal__spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="contact-modal__status contact-modal__status--success">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Message sent successfully! We'll be in touch soon.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="contact-modal__status contact-modal__status--error">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>Something went wrong. Please try again.</span>
          </div>
        )}

        {/* Footer Note */}
        <p className="contact-modal__footer">
          Prefer email? Reach us directly at{" "}
          <a href="mailto:contact@avaris.clientdesk@gmail.com">
            avaris.clientdesk@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
