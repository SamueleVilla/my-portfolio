import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import { PROJECTS, IProject, IProjectCategory } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import capitalize from "../../utils/capitalize";

type IProjectCategoryWithAll = IProjectCategory | "all";
const projectCategories: IProjectCategoryWithAll[] = [
  "all",
  "fullstack",
  "frontend",
  "backend",
  "games",
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] =
    useState<IProjectCategoryWithAll>("all");
  const [visibleProjects, setVisibleProjects] = useState<IProject[]>(PROJECTS);
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setVisibleProjects(PROJECTS);
    } else {
      setVisibleProjects(
        PROJECTS.filter((project) => project.category === activeFilter)
      );
    }

    // Reset current slide when filter changes
    setCurrentSlide(0);
  }, [activeFilter]);

  const handleFilterClick = (filter: IProjectCategoryWithAll) => {
    setActiveFilter(filter);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(visibleProjects.length / 2) - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(visibleProjects.length / 2) - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="projects__container">
        <div className="projects__header">
          <h2
            className={`projects__title ${
              isVisible ? "projects__title--visible" : ""
            }`}
          >
            My Projects
          </h2>
          <p
            className={`projects__subtitle ${
              isVisible ? "projects__subtitle--visible" : ""
            }`}
          >
            Exploring my latest work
          </p>
        </div>

        <div
          className={`projects__filters ${
            isVisible ? "projects__filters--visible" : ""
          }`}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`projects__filter ${
                activeFilter === category ? "projects__filter--active" : ""
              }`}
              onClick={() => handleFilterClick(category)}
            >
              {capitalize(category)}
            </button>
          ))}
        </div>

        <div className="projects__carousel-container">
          <button
            className="projects__carousel-arrow projects__carousel-arrow--prev"
            onClick={handlePrevSlide}
            aria-label="Previous projects"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="projects__carousel">
            <div
              className="projects__carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {visibleProjects.length > 0 ? (
                visibleProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isVisible={isVisible}
                  />
                ))
              ) : (
                <div className="projects__placeholder">
                  No projects available for this category.
                </div>
              )}
            </div>
          </div>

          <button
            className="projects__carousel-arrow projects__carousel-arrow--next"
            onClick={handleNextSlide}
            aria-label="Next projects"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="projects__pagination">
          {Array.from({ length: Math.ceil(visibleProjects.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                className={`projects__pagination-dot ${
                  currentSlide === index
                    ? "projects__pagination-dot--active"
                    : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>

        <div className="projects__cta">
          <a
            href="https://github.com/yourusername"
            className="projects__github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="projects__github-icon"
            />
            <span>See more on GitHub</span>
          </a>
        </div>
      </div>

      <div className="projects__background">
        <div className="projects__shape projects__shape--1"></div>
        <div className="projects__shape projects__shape--2"></div>
      </div>
    </section>
  );
};

export default Projects;
