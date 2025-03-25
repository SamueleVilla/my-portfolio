import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__info">
          <div className="footer__logo">
            <span className="footer__logo-text">
              Samuele<span className="footer__logo-accent">.</span>
            </span>
          </div>
          <p className="footer__tagline">
            Building the web, one pixel at a time
          </p>
          <div className="footer__social">
            <a
              href="https://github.com"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__link-group">
            <h3 className="footer__link-title">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="footer__link-list">
                <li>
                  <a href="#home" className="footer__link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer__link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="footer__link">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__link-group">
            <h3 className="footer__link-title">Resources</h3>
            <ul className="footer__link-list">
              <li>
                <a href="/resume.pdf" className="footer__link" target="_blank">
                  Resume
                </a>
              </li>
              <li>
                <a href="/blog" className="footer__link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#FAQ" className="footer__link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#newsletter" className="footer__link">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          <p>© {currentYear} Samuele Villa. All rights reserved.</p>
          <p className="footer__made-with">
            Made with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              className="footer__heart"
              aria-hidden="true"
            />{" "}
            in Milan, Italy
          </p>
        </div>

        <button
          className={`footer__scroll-top ${showScrollTop ? "footer__scroll-top--visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
        </button>
      </div>

      <div className="footer__background">
        <div className="footer__shape footer__shape--1"></div>
        <div className="footer__shape footer__shape--2"></div>
        <div className="footer__shape footer__shape--3"></div>
      </div>
    </footer>
  );
};

export default Footer;
