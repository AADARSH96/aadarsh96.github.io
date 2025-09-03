// src/config.ts

// Types (optional, can be removed if you don't care about TS checks)
export type Social = {
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
};

export type Project = {
  name: string;
  description: string;
  skills?: string[];
  link?: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  dateRange: string;
  bullets: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  dateRange: string;
  achievements: string[];
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social?: Social;
  aboutMe: string;
  skills: string[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
};

// Actual configuration
export const siteConfig: SiteConfig = {
  name: "Aadarsh Gaikwad",
  title: "Senior Data Engineer • AI/ML Engineer",
  description:
    "Portfolio of Aadarsh Gaikwad — Data Engineering, AI/ML, and Generative AI solutions.",
  accentColor: "#0ea5e9", // Tailwind cyan-500

  social: {
    email: "aadarsh@example.com",
    linkedin: "https://www.linkedin.com/in/aadarsh96/",
    github: "https://github.com/AADARSH96",
    twitter: "https://twitter.com/aadarsh96",
  },

  aboutMe:
    "I’m a Data Engineer & AI/ML Engineer with 6+ years of experience in financial services and insurance. I design large-scale data pipelines, build LLM-powered agents, and deploy production-ready AI solutions. Currently finishing a Master’s in Data Analytics Engineering.",

  skills: [
    "Python",
    "SQL",
    "Airflow",
    "dbt",
    "Spark",
    "Databricks",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Snowflake",
    "BigQuery",
    "LangChain",
    "LangGraph",
    "OpenAI API",
  ],

  projects: [
    {
      name: "TXT→SQL Agent",
      description:
        "LLM-powered text-to-SQL agent with schema awareness, SQL validation, and safe execution for Snowflake/BigQuery.",
      skills: ["Python", "LangChain", "SQLGlot", "SQLite"],
      link: "https://github.com/AADARSH96/txt2sql",
    },
    {
      name: "AI Support Agent + RAG",
      description:
        "Retrieval-augmented email support system with multi-tenant vector stores and fine-tuned LLaMA-2 for improved accuracy.",
      skills: ["FastAPI", "OpenAI", "ChromaDB", "AWS Lambda"],
      link: "https://github.com/AADARSH96/support-agent",
    },
    {
      name: "Marketing Data Pipeline",
      description:
        "End-to-end data pipeline for marketing attribution, incrementality testing, and ROAS dashboards using PySpark + dbt.",
      skills: ["PySpark", "dbt", "Airflow", "Snowflake"],
    },
  ],

  experience: [
    {
      title: "Senior Data Engineer",
      company: "Company A",
      dateRange: "2023 – Present",
      bullets: [
        "Built scalable pipelines (3TB+/day) using PySpark, Airflow, and Snowflake.",
        "Deployed ML-driven attribution models in production, boosting ROI by 15%.",
        "Implemented MLOps workflows in SageMaker for fast, reliable deployment.",
      ],
    },
    {
      title: "Data Engineer",
      company: "Company B",
      dateRange: "2020 – 2023",
      bullets: [
        "Developed data warehouse models in BigQuery and dbt.",
        "Optimized ETL pipelines, reducing latency from 4h to 30m.",
        "Partnered with data science teams to deliver predictive models.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Company C",
      dateRange: "2018 – 2020",
      bullets: [
        "Designed Tableau/Power BI dashboards for executives.",
        "Automated SQL-based reporting, saving 20+ analyst hours weekly.",
      ],
    },
  ],

  education: [
    {
      degree: "M.S. Data Analytics Engineering",
      school: "Northeastern University",
      dateRange: "2024 – 2026",
      achievements: [
        "GPA: 3.62",
        "Research in LLM productivity for engineering workflows.",
      ],
    },
    {
      degree: "B.B.A. in Business Administration",
      school: "XYZ University",
      dateRange: "2014 – 2017",
      achievements: [
        "Specialized in Finance & Economics.",
        "Applied decision-making and statistical analysis techniques.",
      ],
    },
  ],
};
