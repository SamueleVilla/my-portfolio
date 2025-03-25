import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import capitalize from "../../utils/capitalize";

const sections = ["home", "about", "projects", "contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Handle scroll events for header appearance
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div className="header__logo" onClick={() => scrollToSection("home")}>
          <span className="header__logo-text">SV</span>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {sections.map((section) => (
              <li key={section} className="header__nav-item">
                <a
                  className={`header__nav-link ${
                    activeSection === section ? "header__nav-link--active" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {capitalize(section)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="header__overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;
