import type { Education } from "@/types/portfolio";

export const education: Education[] = [
  {
    level: "undergraduate",
    qualification: "B.Tech, AI & Data Science",
    institution: "PACE Institute of Technology and Sciences",
    location: "Ongole, Andhra Pradesh",
    start: "2021",
    end: "2025",
    grade: "GPA 8.15/10",
  },
  {
    level: "intermediate",
    qualification: "Intermediate",
  },
  {
    level: "secondary",
    qualification: "Secondary School (Class 10)",
  },
];

export const highestEducation = education[0];

export function hasEducationDetails(entry: Education) {
  return Boolean(entry.institution);
}
