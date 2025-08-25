export const siteConfig = {
  name: "Aadarsh Gaikwad",
  title: "Data Engineer & Full Stack Developer",
  description: "MS in Data Science student at Northeastern University with expertise in cloud architecture, data pipelines, and AI/ML solutions",
  accentColor: "#8b5cf6", // Purple accent - you can change this hex code
  
  social: {
    email: "aadarshgaikwad04@gmail.com",
    linkedin: "https://www.linkedin.com/in/aadarsh-gaikwad-940549a5",
    github: "https://github.com/AADARSH96",
  },
  
  aboutMe:
    "I'm a Data Engineer and completed my MS in Data Science at Northeastern University. With 5+ years of experience building scalable data pipelines and cloud solutions, I specialize in AWS services, big data technologies, and recently AI/ML implementations including RAG systems. I've worked at leading financial institutions like J.P. Morgan Chase and Wells Fargo, where I built data pipelines processing terabytes of data, optimized costs by tens of thousands of dollars, and delivered business-critical analytics solutions. My passion lies in solving complex data challenges and building efficient, scalable systems that drive business value.",
  
  skills: [
    // Programming Languages
    "Python",
    "SQL", 
    "JavaScript",
    "Node.js",
    "Shell Scripting",
    
    // AWS Services
    "AWS Lambda",
    "S3",
    "EMR",
    "Glue",
    "EC2",
    "Athena",
    "Redshift",
    "CloudWatch",
    "Step Functions",
    "SES",
    "SNS/SQS",
    
    // Databases
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "ChromaDB",
    "Snowflake",
    "BigQuery",
    
    // Big Data & ETL
    "PySpark",
    "Apache Airflow",
    "Hadoop",
    "Hive",
    
    // AI/ML
    "RAG Systems",
    "LangChain",
    "AWS Bedrock",
    "LLM Fine-tuning",
    "Vector Databases",
    "Prompt Engineering",
    
    // DevOps & Tools
    "Docker",
    "Terraform",
    "GitHub Actions",
    "Jenkins",
    "FastAPI",
    "REST APIs",
    "GraphQL",
    "Tableau"
  ],
  
  projects: [
    {
      name: "AI-Powered Customer Email Automation System",
      description: "Built an intelligent email handling system at Northeastern University using AWS SES, Lambda, and RAG architecture. Processed 100+ websites via ETL pipelines, generated vector embeddings with SentenceTransformers, and implemented a retrieval-augmented generation pipeline using AWS Bedrock (Llama-3-70B) and LangChain. Achieved high accuracy with RAGAS evaluation metrics and integrated guardrails to ensure factual consistency.",
      link: "https://github.com/AADARSH96",
      skills: ["AWS SES", "Lambda", "RAG", "LangChain", "ChromaDB", "Llama-3", "Python", "BeautifulSoup"]
    }
  ],
  
  experience: [
    {
      company: "Northeastern University",
      title: "Research Assistant",
      dateRange: "Sep 2024 - May 2024",
      bullets: [
        "Automated customer email handling using AWS SES with Lambda, triggering workflows for inbound messages",
        "Built RAG pipeline using AWS Bedrock (Llama-3-70B), LangChain, and ChromaDB for context-aware responses",
        "Implemented reranking models and chain-of-thought prompts to enhance reasoning quality",
        "Developed LLM evaluation framework using RAGAS metrics to measure and refine system performance"
      ]
    },
    {
      company: "J.P. Morgan Chase & Co",
      title: "Software Developer",
      dateRange: "Mar 2022 - Dec 2023",
      bullets: [
        "Built data pipelines for Multi-Touch Attribution model processing 3+ TB of customer behavior data",
        "Orchestrated workflows using AWS Step Functions, coordinating Lambda, EMR clusters, and Glue jobs",
        "Optimized PySpark jobs and EMR tuning with spot instances, reducing compute costs by $50K annually",
        "Designed Snowflake architecture with Snowpipe and materialized views for real-time reporting",
        "Delivered Tableau dashboards to leadership, communicating attribution impact and business KPIs"
      ]
    },
    {
      company: "Wells Fargo",
      title: "Software Developer",
      dateRange: "Apr 2021 - Mar 2022",
      bullets: [
        "Developed AWS-native ETL pipelines with Lambda and Glue for ML fraud detection workflows",
        "Partnered with ML teams to transform transaction data into feature sets for SageMaker",
        "Automated financial data ingestion using Apache Airflow DAGs with medallion architecture",
        "Optimized AWS S3 storage with lifecycle policies and Intelligent-Tiering, reducing costs by 30%"
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      title: "Programmer Analyst",
      dateRange: "Jul 2018 - Apr 2021",
      bullets: [
        "Engineered regulatory reporting pipelines processing 1TB+/month of financial compliance data",
        "Designed REST API microservices with FastAPI to migrate data from OLTP systems to Hadoop",
        "Enforced GDPR using tokenization and column-level encryption for data governance",
        "Improved PySpark SQL query performance using broadcast joins and predicate pushdown techniques",
        "Developed Tableau dashboards for business KPIs, funnel analytics, and attribution metrics"
      ]
    }
  ],
  
  education: [
    {
      school: "Northeastern University",
      degree: "Master of Science in Data Science",
      dateRange: "Jan 2024 - May 2025",
      achievements: [
        "Specialization in Machine Learning and AI",
        "Research Assistant - AI/ML Projects",
        "Relevant Coursework: Natural Language Processing, Big Data Systems, Large Language Models, Cloud Computing"
      ]
    },
    {
      school: "AWS",
      degree: "AWS Certified Data Engineer – Associate",
      dateRange: "2023",
      achievements: [
        "Demonstrated expertise in AWS data services",
        "Proficient in data pipeline design and optimization",
        "Certified in data security and governance best practices"
      ]
    }
  ]
};
