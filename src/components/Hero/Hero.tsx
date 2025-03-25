import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { TECH_STACKS } from "../../data/tech-stacks";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Create a typing effect for subtitle
  const [displayText, setDisplayText] = useState("");
  const fullText = "Fullstack Web Developer";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set visibility after component mounts for animations
    setIsVisible(true);

    // Typing effect
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Function to handle scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div
        className={`hero__content ${isVisible ? "hero__content--visible" : ""}`}
      >
        <div className="hero__profile-container">
          <div className="hero__profile-photo">
            <img src="images/profile.jpg" alt="Profile" />
            <div className="hero__profile-border"></div>
            <div className="hero__profile-status">
              <span className="hero__status-dot"></span>
              Available for work
            </div>
          </div>
          <div className="hero__profile-accent"></div>
          <div className="hero__profile-decoration"></div>
        </div>

        <div className="hero__text">
          <h1 className="hero__title">
            Hi, I'm <span className="hero__highlight">Samuele Villa</span>
          </h1>
          <h2 className="hero__subtitle">
            {displayText}
            <span className="hero__cursor">|</span>
          </h2>
          <p className="hero__description">
            I create engaging digital experiences with modern technologies.
            Specializing in building robust web applications from front to back.
          </p>
          <div className="hero__cta">
            <button
              className="button button--primary"
              onClick={scrollToProjects}
              aria-label="View my projects"
            >
              <span className="button__icon">
                <FontAwesomeIcon icon={faCode} />
              </span>
              View Projects
            </button>
            <button
              className="button button--secondary"
              onClick={scrollToContact}
              aria-label="Scroll to contact section"
            >
              <span className="button__icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="hero__tech">
        <div className="hero__tech-title">Tech Stack</div>
        <div className="hero__tech-icons">
          {TECH_STACKS.map((tech, index) => (
            <span
              key={tech}
              className="hero__tech-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-text">Scroll down</div>
        <div className="hero__scroll-icon"></div>
      </div>

      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>
    </section>
  );
};

export default Hero;
