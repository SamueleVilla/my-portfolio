export type IProjectCategory = "frontend" | "fullstack" | "backend" | "games";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  category: IProjectCategory;
}

export const PROJECTS: IProject[] = [
  {
    id: 5,
    title: "Portfolio Website Design",
    description:
      "A modern, responsive portfolio design for creative professionals with dark mode theme and smooth animations.",
    image: "/images/projects/portfolio-design.jpg",
    technologies: ["Figma", "Adobe Photoshop", "Illustrator"],
    figmaUrl: "https://figma.com/file/portfolio-design",
    category: "frontend",
  },
  {
    id: 4,
    title: "Sudoku Solver",
    description:
      "A Sudoku solver web app that uses backtracking algorithm to solve any valid Sudoku puzzle.",
    image: "/images/projects/sudoku-solver.jpg",
    technologies: ["HTML", "CSS", "Typescript", "React"],
    category: "frontend",
    githubUrl: "",
  },
];
