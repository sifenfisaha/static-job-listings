type Filter = string;

type AppState = {
  filters: Filter[];
};

type JobPosting = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: "Frontend" | "Backend" | "Fullstack";
  level: "Junior" | "Midweight" | "Senior";
  postedAt: string;
  contract: "Full Time" | "Part Time" | "Contract";
  location: string;
  languages: string[];
  tools: string[];
};

type JobList = JobPosting[];

export type { Filter, AppState, JobList, JobPosting };
