import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProject } from "../../data/projects";

import "./ProjectCard.css";

interface IProjectCardProps {
  project: IProject;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, isVisible, index }: IProjectCardProps) => {
  return (
    <div
      key={project.id}
      className={`project-card ${isVisible ? "project-card--visible" : ""}`}
      style={{ animationDelay: `${0.1 + (index % 2) * 0.2}s` }}
    >
      <div className="project-card__image">
        <img src={project.image} alt={project.title} />
        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}

            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Figma design for ${project.title}`}
              >
                <FontAwesomeIcon icon={faFigma} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
