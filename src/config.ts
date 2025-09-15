export const siteConfig = {
  "name": "Aadarsh Gaikwad",
  "title": "AI-focused Data Engineer and Data Scientist",
  "description": "MS in Data Science graduate from Northeastern University specializing in cloud-native data pipelines, MLOps on AWS, and applied AI/LLM systems.",
  "accentColor": "#8b5cf6",

  "social": {
    "email": "aadarshgaikwad04@gmail.com",
    "linkedin": "https://www.linkedin.com/in/aadarsh-gaikwad-940549a5",
    "github": "https://github.com/AADARSH96"
  },

"aboutMe": "AI-focused Data Engineer and Data Scientist with more than five years of experience building scalable data pipelines, cloud-native platforms, and applied AI/ML solutions. I have delivered attribution and fraud/segmentation systems at J.P. Morgan and Wells Fargo, optimized EMR and S3 costs by tens of thousands of dollars, and developed NLP pipelines with BERT and spaCy to process loan documents. Recently, I have shipped RAG systems using AWS Bedrock, LangChain, and vector databases. I am passionate about reliable data foundations, measurable business value, and clean, reproducible MLOps practices."
,
  "skills": [
    "Python",
    "SQL",
    "JavaScript",
    "Node.js",
    "Shell Scripting",
    "AWS Lambda",
    "Amazon S3",
    "Amazon EMR",
    "AWS Glue",
    "Amazon EC2",
    "Amazon Athena",
    "Amazon Redshift",
    "Amazon CloudWatch",
    "AWS Step Functions",
    "Amazon SES",
    "Amazon SNS",
    "Amazon SQS",
    "Amazon SageMaker",
    "Snowflake",
    "BigQuery",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "ChromaDB",
    "PySpark",
    "Apache Airflow",
    "Hadoop",
    "Hive",
    "RAG Systems",
    "LangChain",
    "AWS Bedrock",
    "LLM Fine-tuning",
    "Vector Databases",
    "Prompt Engineering",
    "Docker",
    "Terraform",
    "GitHub Actions",
    "Jenkins",
    "FastAPI",
    "REST APIs",
    "GraphQL",
    "Tableau"
  ],

  "projects": [
    {
      "name": "AI-Powered Customer Email Automation System",
      "description": "Intelligent email handling with AWS SES and Lambda plus a RAG architecture. Parsed more than one hundred sites via ETL, generated embeddings with SentenceTransformers, and served retrieval using Bedrock (Llama-3-70B) and LangChain. Evaluated with RAGAS and applied guardrails for factual consistency.",
      "link": "https://github.com/AADARSH96",
      "skills": ["AWS SES", "AWS Lambda", "RAG", "LangChain", "ChromaDB", "Llama-3", "Python", "BeautifulSoup"]
    },
    {
      "name": "Multi-Agent Airline Assistant with OpenAI SDK",
      "description": "Production-style demo using OpenAI Agents SDK with triage/FAQ/seat-booking agents, conversation memory, safe-tool invocation, and SQLite persistence. Includes function tools for FAQ lookups and seat updates.",
      "link": "https://github.com/AADARSH96/openai-airline-agent",
      "skills": ["OpenAI Agents SDK", "Multi-Agent Systems", "Python", "SQLite", "Session Management", "Guardrails", "Function Tools"]
    },
    {
      "name": "AI Web Crawler",
      "description": "Crawls sites with Crawl4AI and outputs clean, LLM-ready Markdown. Removes nav/ads, preserves structure and metadata, includes CLI and OpenAI-powered content filtering.",
      "link": "https://github.com/AADARSH96/ai-web-crawler",
      "skills": ["Crawl4AI", "Web Scraping", "Markdown", "OpenAI", "LLM Filtering", "Python", "AsyncIO"]
    },
    {
      "name": "LLM Document RAG System",
      "description": "Retrieval-Augmented Generation pipeline for large document stores with LangChain and vector DBs. Semantic search, source-grounded answers, chunking strategies, embedding generation, and optimized retrieval.",
      "link": "https://github.com/AADARSH96/llm-doc-RAG",
      "skills": ["RAG", "LangChain", "Vector DB", "Python", "LLMs", "ChromaDB", "OpenAI"]
    },
    {
      "name": "NeMo Guardrails Implementation",
      "description": "Safety and reliability layers for LLM apps using NVIDIA NeMo Guardrails. Programmable rules to prevent harmful outputs, ensure factuality, and enforce conversation boundaries with tests and custom rails.",
      "link": "https://github.com/AADARSH96/nemo-guardrails",
      "skills": ["NeMo Guardrails", "LLM Safety", "Python", "NVIDIA", "AI Ethics", "Prompt Security"]
    },
    {
      "name": "OpenAI Prompt Engineering Toolkit",
      "description": "Toolkit for prompt design and evaluation: few-shot patterns, reasoning templates, cost controls, and quality checks across tasks.",
      "link": "https://github.com/AADARSH96/openai-prompt-engineering",
      "skills": ["OpenAI", "Prompt Engineering", "GPT-4 class models", "Python", "Few-shot Learning", "Optimization"]
    }
  ],

  "opensource": [
    {
      "name": "Prompt-to-JSON",
      "description": "Python package to convert natural-language prompts into structured JSON. MIT-licensed, published on PyPI with CI, pre-commit, and coverage.",
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
        "Designed a retrieval-augmented generation pipeline using AWS Bedrock, LangChain, and ChromaDB to generate context-aware responses from historical support data.",
        "Built web data pipelines with BeautifulSoup and Scrapy and stored validated, structured outputs in Amazon S3.",
        "Generated dense embeddings with SentenceTransformers and a fixed-length chunking strategy with fifteen percent overlap; persisted indexes in ChromaDB.",
        "Applied reranking for improved top-k retrieval and created prompt templates that increased reasoning consistency.",
        "Implemented an evaluation harness with RAGAS metrics including answer relevancy, context recall, and precision."
      ]
    },
    {
      "company": "J.P. Morgan Chase & Co",
      "title": "Data Scientist",
      "dateRange": "Apr 2023 – Dec 2023",
      "bullets": [
        "Built a PyTorch and BERT text-classification pipeline on fifty thousand loan documents, improving accuracy from 78% to 86%.",
        "Implemented spaCy NER to extract key loan fields such as amount, applicant name, and property address with roughly 90% accuracy.",
        "Developed and deployed a serverless document workflow using API Gateway, AWS Lambda, and DynamoDB for secure intake and batch inference."
      ]
    },
    {
      "company": "J.P. Morgan Chase & Co",
      "title": "Data Engineer",
      "dateRange": "Mar 2022 – Apr 2023",
      "bullets": [
        "Built attribution data pipelines processing more than three terabytes of customer behavior data using AWS Step Functions to orchestrate EMR, Lambda, and Glue jobs.",
        "Created pipeline control APIs with Node.js and AWS Lambda behind API Gateway for Step Functions triggers and job-status monitoring.",
        "Optimized PySpark workloads and EMR configurations with Spot Instances, reducing annual compute spend by $50,000.",
        "Designed Snowflake ingestion and reporting with Snowpipe, clustering keys, and materialized views to enable near real-time attribution dashboards.",
        "Automated deployments with Docker, Terraform, and GitHub Actions using a blue-green strategy, reducing release times by forty percent."
      ]
    },
    {
      "company": "Wells Fargo",
      "title": "Data Engineer",
      "dateRange": "Apr 2021 – Mar 2022",
      "bullets": [
        "Supported fraud detection and customer segmentation by building Amazon SageMaker data pipelines that produced curated feature datasets for machine-learning teams.",
        "Implemented feature engineering with PySpark in SageMaker Processing, including one-hot encoding, scaling, and time-window aggregations.",
        "Built a data validation framework with Great Expectations to check for nulls, outliers, and schema consistency before publishing to Amazon S3.",
        "Configured Amazon S3 Intelligent-Tiering for feature storage, reducing monthly storage spend by approximately twenty percent.",
        "Set up Amazon CloudWatch logging and Amazon SNS alerts to improve traceability and adherence to pipeline service-level objectives."
      ]
    },
    {
      "company": "Cognizant Technology Solutions",
      "title": "Data Engineer",
      "dateRange": "Jul 2018 – Apr 2021",
      "bullets": [
        "Engineered regulatory reporting pipelines processing more than one terabyte of financial and compliance data per month using PySpark and Hive.",
        "Built Python REST microservices with FastAPI and SQLAlchemy to migrate operational data from OLTP systems to Hadoop with GDPR safeguards.",
        "Enforced data-governance controls with tokenization and column-level encryption and secured services with OAuth 2.0 and JWT.",
        "Improved PySpark SQL performance via broadcast joins, column pruning, and predicate pushdown and automated deployments for more than twenty jobs with shell scripts.",
        "Delivered Tableau dashboards for compliance metrics and business KPIs."
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
        "Relevant coursework: Natural Language Processing, Big Data Systems, Large Language Models, Cloud Computing"
      ]
    },
    {
      "school": "Amazon Web Services",
      "degree": "AWS Certified Data Engineer – Associate",
      "dateRange": "2023",
      "achievements": [
        "Validated expertise in AWS data services and pipeline design",
        "Hands-on experience with performance tuning and cost optimization",
        "Focus on data security, governance, and compliance best practices"
      ]
    }
  ]
}
;
