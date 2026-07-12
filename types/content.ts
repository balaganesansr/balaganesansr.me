export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type JourneyChapter = {
  id: string;
  period: string;
  year: string;
  title: string;
  org: string;
  location: string;
  kind: "role" | "internship" | "education";
  summary: string;
  highlights: string[];
  tags: string[];
};

export type PlayApp = {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  motif: "grocery" | "course" | "numerology" | "compass" | "astrology";
  hue: string;
  hue2: string;
};

export type WebProject = {
  id: string;
  name: string;
  url?: string;
  urlLabel?: string;
  sector: string;
  role: string;
  built: string;
  stack: string[];
};

export type SkillNode = {
  id: string;
  label: string;
  domain: string;
  usedIn: string[];
};

export type SkillDomain = {
  id: string;
  label: string;
  ring: number;
};
