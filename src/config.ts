export const siteConfig = {
  "name": "Aadarsh Gaikwad",
  "title": "AI-focused Data Engineer and Data Scientist",
  "description": "MS in Data Science graduate from Northeastern University specializing in MLOps, cloud-native data platforms, and applied AI/LLM systems on AWS and Databricks.",
  "accentColor": "#8b5cf6",

  "social": {
    "email": "aadarshgaikwad04@gmail.com",
    "linkedin": "https://www.linkedin.com/in/aadarsh-gaikwad-940549a5",
    "github": "https://github.com/AADARSH96"
  },

  "aboutMe": "AI-focused Data Engineer and Data Scientist with over five years of experience building large-scale data pipelines, MLOps workflows, and applied AI/LLM systems. At J.P. Morgan and Wells Fargo, I delivered attribution and fraud detection systems, optimized EMR and S3 costs by tens of thousands, and built end-to-end Databricks pipelines integrated with Unity Catalog, Delta Tables, and MLflow. I’ve developed NLP and RAG solutions using Bedrock, LangChain, DSPy, and vector databases, and deployed LoRA fine-tuning on Llama-3.1 models via SageMaker and Unsloth. My focus is on reliable data foundations, reproducible MLOps, and AI systems that drive measurable business outcomes.",

  "skills": [
    "Python", "SQL", "JavaScript", "Node.js", "Shell Scripting",
    "AWS Lambda", "Amazon S3", "Amazon EMR", "AWS Glue", "Amazon EC2",
    "Amazon Athena", "Amazon Redshift", "Amazon CloudWatch", "AWS Step Functions",
    "Amazon SES", "Amazon SNS", "Amazon SQS", "Amazon SageMaker", "Databricks",
    "Snowflake", "BigQuery", "MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "ChromaDB",
    "PySpark", "Apache Airflow", "Hadoop", "Hive", "Unity Catalog", "MLflow",
    "RAG Systems", "LangChain", "AWS Bedrock", "LLM Fine-tuning", "Vector Databases",
    "DSPy", "Prompt Engineering", "Unsloth", "Docker", "Terraform", "GitHub Actions",
    "Jenkins", "FastAPI", "REST APIs", "GraphQL", "Tableau"
  ],

  "projects": [
    {
      "name": "DSPy Prompt Optimizer",
      "description": "Framework to optimize prompts programmatically using DSPy’s MIPRO optimizer and evaluation-driven feedback loops. Implemented few-shot rewriters, task adapters, and a modular experiment runner with structured metrics for LLM evaluation.",
      "link": "https://github.com/AADARSH96/dspy-prompt-optimizer",
      "skills": ["DSPy", "Prompt Optimization", "Evaluation Loops", "LangChain", "Python", "RAG", "LLMs"]
    },
    {
      "name": "Unsloth LoRA Fine-Tuning on AWS SageMaker",
      "description": "End-to-end Llama-3.1 fine-tuning pipeline using Unsloth and AWS SageMaker. Automated LoRA adapters training on GPU Spot instances with cost tracking, model registry integration, and multi-instance orchestration via Terraform.",
      "link": "https://github.com/AADARSH96/unsloth-llama31-lora-sagemaker",
      "skills": ["Unsloth", "AWS SageMaker", "Llama-3.1", "LoRA", "Terraform", "GPU Optimization", "MLOps"]
    },
    {
      "name": "AI-Powered Customer Email Automation System",
      "description": "RAG-based email automation pipeline with AWS SES, Lambda, and Bedrock (Llama-3-70B). Parsed hundreds of websites with ETL, generated embeddings with SentenceTransformers, and implemented factual guardrails using RAGAS metrics.",
      "link": "https://github.com/AADARSH96",
      "skills": ["AWS SES", "AWS Lambda", "RAG", "LangChain", "ChromaDB", "Bedrock", "Python", "BeautifulSoup"]
    },
    {
      "name": "Multi-Agent Airline Assistant with OpenAI SDK",
      "description": "Built multi-agent demo with OpenAI Agents SDK handling triage, FAQs, and booking tasks. Features safe tool invocation, session memory, and SQLite persistence.",
      "link": "https://github.com/AADARSH96/openai-airline-agent",
      "skills": ["OpenAI Agents SDK", "Multi-Agent Systems", "Python", "SQLite", "Function Tools", "Session Management"]
    },
    {
      "name": "AI Web Crawler",
      "description": "Web crawler powered by Crawl4AI to extract clean, LLM-ready Markdown with ad removal and metadata preservation. CLI and OpenAI filters ensure structured and relevant data for training pipelines.",
      "link": "https://github.com/AADARSH96/ai-web-crawler",
      "skills": ["Crawl4AI", "Web Scraping", "OpenAI", "Markdown", "AsyncIO", "LLM Filtering", "Python"]
    },
    {
      "name": "LLM Document RAG System",
      "description": "Retrieval-Augmented Generation system for document intelligence using LangChain and vector databases. Includes chunking optimization, reranking, and precision/recall evaluation with RAGAS.",
      "link": "https://github.com/AADARSH96/llm-doc-RAG",
      "skills": ["LangChain", "Vector DB", "RAG", "Python", "LLMs", "ChromaDB", "OpenAI"]
    },
    {
      "name": "NeMo Guardrails Implementation",
      "description": "Implemented NVIDIA NeMo Guardrails to ensure LLM safety, factuality, and compliance. Configured rule-based interceptors and validated outputs through automated tests and audit logs.",
      "link": "https://github.com/AADARSH96/nemo-guardrails",
      "skills": ["NeMo Guardrails", "LLM Safety", "Python", "AI Ethics", "Prompt Security"]
    },
    {
      "name": "OpenAI Prompt Engineering Toolkit",
      "description": "Comprehensive toolkit for few-shot prompt design, cost control, and reasoning evaluation. Includes prompt templates, consistency metrics, and task-specific testing harnesses.",
      "link": "https://github.com/AADARSH96/openai-prompt-engineering",
      "skills": ["OpenAI", "Prompt Engineering", "GPT-4", "Python", "Few-Shot Learning", "Optimization"]
    }
  ],

  "opensource": [
    {
      "name": "Prompt-to-JSON",
      "description": "MIT-licensed Python package to convert natural-language prompts into structured JSON. Published on PyPI with pre-commit hooks, CI/CD, and 100% test coverage.",
      "links": {
        "pypi": "https://pypi.org/project/prompt-to-json/",
        "github": "https://github.com/OpenSoucrce/prompt-to-json"
      }
    }
  ],

  "experience": [
    {
      "company": "Northeastern University",
      "title": "Research Assistant",
      "dateRange": "Sep 2024 – May 2025",
      "bullets": [
        "Developed a retrieval-augmented generation (RAG) pipeline using AWS Bedrock, LangChain, and ChromaDB to answer context-specific queries from institutional data.",
        "Built structured web-scraping pipelines (BeautifulSoup, Scrapy) and stored validated outputs in S3 with metadata tagging.",
        "Generated embeddings using SentenceTransformers and implemented overlap-aware chunking with persistent vector indexes.",
        "Applied reranking to boost retrieval precision and introduced RAGAS evaluation for recall and factuality."
      ]
    },
    {
      "company": "J.P. Morgan Chase & Co.",
      "title": "Data Scientist",
      "dateRange": "Apr 2023 – Dec 2023",
      "bullets": [
        "Migrated credit-card campaign analysis from Oracle to Databricks, processing 500K+ transactions with PySpark to achieve 3× faster campaign scoring.",
        "Developed customer propensity models using XGBoost and MLlib with feature management in Databricks Feature Store and experiment tracking in MLflow.",
        "Built Unity Catalog + Delta Table pipelines to centralize campaign metrics for three marketing teams, eliminating manual reporting.",
        "Deployed APIs with Node.js and DynamoDB to trigger Databricks scoring workflows, reducing deployment cycles from days to hours."
      ]
    },
    {
      "company": "J.P. Morgan Chase & Co.",
      "title": "Data Engineer",
      "dateRange": "Mar 2022 – Apr 2023",
      "bullets": [
        "Engineered attribution pipelines processing 3+ TB of customer data via AWS Step Functions orchestrating EMR, Lambda, and Glue jobs.",
        "Optimized PySpark and EMR tuning with Spot Instances, cutting compute costs by $50K annually while maintaining SLA windows.",
        "Built Snowflake ingestion and reporting using Snowpipe, clustering keys, and materialized views for real-time marketing analytics.",
        "Automated deployments using Docker, Terraform, and GitHub Actions with blue-green strategies reducing release time by 40%."
      ]
    },
    {
      "company": "Wells Fargo",
      "title": "Data Engineer",
      "dateRange": "Apr 2021 – Mar 2022",
      "bullets": [
        "Developed SageMaker data pipelines delivering curated features (velocity, merchant patterns, anomalies) to fraud-detection models.",
        "Implemented PySpark feature engineering and time-window aggregations within SageMaker Processing jobs.",
        "Created Great Expectations validation suite integrated with CloudWatch alerts for schema consistency.",
        "Configured S3 Intelligent-Tiering, reducing storage costs by 20%."
      ]
    },
    {
      "company": "Cognizant Technology Solutions",
      "title": "Data Engineer",
      "dateRange": "Jul 2018 – Apr 2021",
      "bullets": [
        "Developed PySpark/Hive ETL workflows processing 1 TB+ monthly for regulatory CECL/CCAR reporting.",
        "Built FastAPI microservices migrating 5M+ OLTP records daily to Hadoop with full GDPR compliance.",
        "Implemented OAuth 2.0 + JWT-secured APIs and enforced column-level encryption.",
        "Optimized PySpark SQL via broadcast joins and predicate pushdown, reducing nightly ETL durations."
      ]
    }
  ],

  "education": [
    {
      "school": "Northeastern University",
      "degree": "Master of Science in Data Science",
      "dateRange": "Jan 2024 – May 2025",
      "achievements": [
        "Specialization in Machine Learning and AI",
        "Research Assistant for AI/ML projects",
        "Relevant coursework: NLP, Big Data Systems, Large Language Models, Cloud Computing"
      ]
    },
    {
      "school": "Amazon Web Services",
      "degree": "AWS Certified Data Engineer – Associate",
      "dateRange": "2023",
      "achievements": [
        "Validated expertise in AWS data architecture, orchestration, and optimization",
        "Hands-on experience with performance tuning, governance, and compliance"
      ]
    }
  ]
};
