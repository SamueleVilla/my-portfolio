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
  category: IProjectCategory[];
}

export const PROJECTS: IProject[] = [
  {
    id: 5,
    title: "Portfolio Website Design",
    description:
      "A modern, responsive portfolio design for creative professionals with dark mode theme and smooth animations.",
    image: "images/projects/portfolio.png",
    technologies: ["Figma", "Adobe Photoshop", "Illustrator"],
    category: ["frontend"],
  },
  {
    id: 4,
    title: "Sudoku Cheat",
    description:
      "A Sudoku solver web app that uses backtracking algorithm to solve any valid Sudoku puzzle.",
    image: "images/projects/sudoku-solver.png",
    technologies: ["HTML", "CSS", "Typescript", "React"],
    category: ["frontend", "games"],
    githubUrl: "https://github.com/SamueleVilla/sudoku-cheat",
  },
];
