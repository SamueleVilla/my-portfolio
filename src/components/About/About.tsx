import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  const [isAboutSectionVisible, setIsVisible] = useState(false);
  const [isSkillsSectionVisible, setSkillsVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          skillsObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about__container">
        <div className="about__header">
          <h2
            className={`about__title ${
              isAboutSectionVisible ? "about__title--visible" : ""
            }`}
          >
            About Me
          </h2>
          <p
            className={`about__subtitle ${
              isAboutSectionVisible ? "about__subtitle--visible" : ""
            }`}
          >
            Get to know me better
          </p>
        </div>

        <div className="about__content">
          <div
            className={`about__image-container ${
              isAboutSectionVisible ? "about__image-container--visible" : ""
            }`}
          >
            <div className="about__image">
              <img
                src="images/about-me.jpg"
                alt="Samuele working on his laptop"
              />
            </div>
            <div className="about__image-decoration about__image-decoration--1"></div>
            <div className="about__image-decoration about__image-decoration--2"></div>
          </div>

          <div className="about__text-container">
            <div
              className={`about__bio ${
                isAboutSectionVisible ? "about__bio--visible" : ""
              }`}
            >
              <h3 className="about__bio-title">Who am I?</h3>
              <p className="about__bio-text">
                I'm a passionate Fullstack Web Developer and graduating student
                based in Milan, Italy. My journey in web development began a
                year ago, and I've been dedicated to creating intuitive and
                performant web applications ever since.
              </p>
              <p className="about__bio-text">
                Currently completing my Computer Science degree, I'm balancing
                my academic studies with real-world web development projects.
                I've already gained valuable experience working with modern
                JavaScript frameworks and enjoy solving complex problems with
                elegant solutions.
              </p>
              <p className="about__bio-text">
                Beyond coding, one of my greatest passions is traveling and
                exploring new cultures. There's something magical about
                immersing myself in different traditions, cuisines, and
                landscapes that broadens my perspective and inspires my
                creativity. This global mindset influences how I approach
                problem-solving and design in my development work.
              </p>
              <p className="about__bio-text">
                When I'm not coding, studying, or traveling, you'll find me
                exploring new technologies, participating in hackathons, or
                enjoying the beautiful sights of Milan with friends. I'm eager
                to apply my academic knowledge, practical skills, and diverse
                cultural experiences to create meaningful digital experiences.
              </p>

              <a
                href="/resume.pdf"
                className="about__resume-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="about__resume-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
                Download Resume
              </a>
            </div>

            <div
              className={`about__timeline ${
                isAboutSectionVisible ? "about__timeline--visible" : ""
              }`}
            >
              <h3 className="about__timeline-title">Experience & Education</h3>

              <div className="about__timeline-item">
                <div className="about__timeline-icon about__timeline-icon--work">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="about__timeline-content">
                  <h4 className="about__timeline-position">
                    Junior Web Developer
                  </h4>
                  <p className="about__timeline-company">Anoki SRL</p>
                  <p className="about__timeline-period">2024 - Present</p>
                  <p className="about__timeline-description">
                    Working part-time developing responsive web applications.
                    Contributing to client projects while continuing my studies.
                  </p>
                </div>
              </div>

              <div className="about__timeline-item">
                <div className="about__timeline-icon about__timeline-icon--education">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="about__timeline-content">
                  <h4 className="about__timeline-position">
                    BSc in Computer Science
                  </h4>
                  <p className="about__timeline-company">
                    University of Milan Bicocca
                  </p>
                  <p className="about__timeline-period">2023 - Present</p>
                  <p className="about__timeline-description">
                    Graduating student specializing in web technologies and
                    software engineering. Expected graduation in 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className={`about__skills ${
            isAboutSectionVisible ? "about__skills--visible" : ""
          }`}
          ref={skillsRef}
        >
          <h3 className="about__skills-title">My Skills</h3>

          <div className="about__skills-container">
            <div className="about__skill">
              <div className="about__skill-info">
                <h4 className="about__skill-name">Frontend Development</h4>
                <span className="about__skill-percentage">80%</span>
              </div>
              <div className="about__skill-bar">
                <div
                  className={`about__skill-progress about__skill-progress--frontend ${
                    isSkillsSectionVisible
                      ? "about__skill-progress--animated"
                      : ""
                  }`}
                  style={{ width: isSkillsSectionVisible ? "80%" : "0%" }}
                ></div>
              </div>
            </div>

            <div className="about__skill">
              <div className="about__skill-info">
                <h4 className="about__skill-name">Backend Development</h4>
                <span className="about__skill-percentage">65%</span>
              </div>
              <div className="about__skill-bar">
                <div
                  className={`about__skill-progress about__skill-progress--backend ${
                    isSkillsSectionVisible
                      ? "about__skill-progress--animated"
                      : ""
                  }`}
                  style={{ width: isSkillsSectionVisible ? "65%" : "0%" }}
                ></div>
              </div>
            </div>

            <div className="about__skill">
              <div className="about__skill-info">
                <h4 className="about__skill-name">UI/UX Design</h4>
                <span className="about__skill-percentage">70%</span>
              </div>
              <div className="about__skill-bar">
                <div
                  className={`about__skill-progress about__skill-progress--design ${
                    isSkillsSectionVisible
                      ? "about__skill-progress--animated"
                      : ""
                  }`}
                  style={{ width: isSkillsSectionVisible ? "70%" : "0%" }}
                ></div>
              </div>
            </div>

            <div className="about__skill">
              <div className="about__skill-info">
                <h4 className="about__skill-name">Problem Solving</h4>
                <span className="about__skill-percentage">85%</span>
              </div>
              <div className="about__skill-bar">
                <div
                  className={`about__skill-progress about__skill-progress--problem-solving ${
                    isSkillsSectionVisible
                      ? "about__skill-progress--animated"
                      : ""
                  }`}
                  style={{ width: isSkillsSectionVisible ? "85%" : "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
