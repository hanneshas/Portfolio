export interface Project {
  number: string;
  name: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  url?: string;
  imageMobile?: string;
  imageDesktop?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Adaptys Hub",
    description:
      "Billing & customer management platform for a SaaS reseller. Consolidated invoicing, margin tracking, and Fortnox integration.",
    tags: ["Internal Tool", "Billing"],
    year: "2024",
    color: "#B8A5D4",
    url: "adaptys.app",
  },
  {
    number: "02",
    name: "Yuncture Mentor Hub",
    description:
      "Internal web app replacing Excel/SharePoint for managing a mentor network at a startup incubator. AI-powered mentor matching.",
    tags: ["Internal Tool", "AI", "CRM"],
    year: "2024",
    color: "#C5E636",
    url: "yuncture.io/mentors",
  },
  {
    number: "03",
    name: "Finance Tracker",
    description:
      "Personal finance app for parsing Nordea CSV bank statements with smart categorization and budget overviews.",
    tags: ["Personal Tool", "FinTech"],
    year: "2024",
    color: "#1F0F14",
    url: "finance.hannes.dev",
  },
  {
    number: "04",
    name: "Client Project",
    description: "Placeholder for next project. Coming soon.",
    tags: ["Coming Soon"],
    year: "2025",
    color: "#8A7E73",
    url: "coming-soon.dev",
  },
];
