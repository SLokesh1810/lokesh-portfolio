export const personalInfo = {
  name: "Lokesh S",
  role: "ML Engineer | Backend Developer",
  location: "Chennai, India",
  email: "slokesh1810@gmail.com",
  github: "https://github.com/SLokesh1810",
  linkedin: "https://linkedin.com/in/slokesh1810",
  tagline:
    "I build machine learning systems, backend services, and data pipelines that transform complex data into scalable applications.",
  about:
    "I'm a B.Tech Information Technology student focused on machine learning, backend engineering, and data-intensive systems. I enjoy building reliable software that transforms complex real-world data into scalable applications, from data pipelines and ML-powered services to evaluation systems and APIs. My work emphasizes clean architecture, automation, and practical problem-solving rather than isolated model development."
};

export const cpProfiles = {
  leetcode: {
    platform: "LeetCode",
    profileUrl: "https://leetcode.com/u/S_Lokesh_18/",
    totalSolved: 269,
    contestRating: 1522,
    contestsAttended: 18,
  },
  codechef: {
    platform: "CodeChef",
    profileUrl: "https://www.codechef.com/users/slokesh1810",
    totalSolved: 80,
    contestRating: 1325,
    contestsAttended: 13,
  },
} as const;

export const projects = [
  {
    title: "FloatChat – Oceanographic Data Engineering Pipeline",
    category: "Data Engineering",
    description:
      "Designed and implemented a scalable data engineering pipeline for processing ARGO oceanographic datasets stored in NetCDF format. Built a multi-stage ETL workflow that automatically downloads, validates, transforms, and stores float data as optimized Parquet datasets while generating metadata for PostgreSQL and ChromaDB indexing. Implemented parallel processing and hash-based incremental updates to eliminate redundant computation and handle inconsistencies across large scientific datasets. The system enables efficient querying and downstream analytics on previously difficult-to-use oceanographic data.",
    tech: [
      "Python",
      "PostgreSQL",
      "ChromaDB",
      "NetCDF",
      "Pandas",
      "Joblib",
      "ThreadPoolExecutor",
    ],
    impact:
      "Automated ingestion and transformation of large-scale scientific datasets, significantly reducing manual preprocessing effort while improving processing throughput through concurrent execution and incremental updates.",
    link: "https://github.com/SLokesh1810/argo_data_analysis_repo/tree/main/scripts",
    image: "/placeholders/project-floatchat.svg",
  },
  {
    title: "InterviewPilot – AI-Powered Interview Simulation Platform",
    category: "Backend",
    description:
      "Built an AI-powered interview simulation platform that conducts adaptive mock interviews and provides automated candidate evaluation. Designed a multi-stage backend pipeline that manages question generation, response processing, transcription analysis, and feedback generation while maintaining interview state across sessions. Implemented asynchronous workflows to decouple candidate interaction from computationally intensive evaluation tasks, enabling seamless interview progression without blocking user responses. Structured the system using modular agents and reusable services to support extensibility across different interview domains and skill levels.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "AsyncIO",
      "LLMs",
      "REST APIs",
      "Agent Architecture"
    ],
    impact:
      "Automates key stages of the interview process by combining adaptive questioning, response evaluation, and feedback generation into a unified workflow, reducing manual assessment effort and enabling scalable mock interview experiences.",
    link: "https://github.com/SLokesh1810/InterviewPilot",
    image: "/placeholders/project-interviewpilot.svg",
  },
  {
    title: "MindEase – Mental Health Risk Assessment System",
    category: "ML",
    description:
      "Developed a machine learning-based mental health assessment system using PHQ-9 questionnaire data and classical ML techniques. Built a complete training pipeline including data preprocessing, feature engineering, model evaluation, and deployment of a Random Forest classifier through a Flask API. Containerized the application using Docker and implemented automated testing workflows with GitHub Actions to support reliable deployment and reproducible development.",
    tech: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Random Forest",
      "Docker",
      "GitHub Actions"
    ],
    impact:
      "Automated mental health risk assessment through a deployable ML service, transforming questionnaire responses into real-time predictions while maintaining a reproducible development and deployment workflow.",
    link: "https://github.com/SLokesh1810/MindEase_Mental_Health_Detector",
    image: "/placeholders/project-mindease.svg",
  },
  {
    title: "Semiconductor Manufacturing Yield Analysis",
    category: "Data Science",
    description:
      "Contributed to a data science project focused on semiconductor manufacturing process data. Worked with a high-dimensional industrial dataset containing noisy sensor measurements and process variables, performing data cleaning, exploratory analysis, feature selection, and predictive modeling to identify factors associated with manufacturing yield outcomes. Collaborated on preprocessing strategies and model evaluation to improve understanding of complex process behavior.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Data Analysis"
    ],
    impact:
      "Explored methods for extracting insights from complex manufacturing data and evaluated machine learning approaches for yield-related prediction tasks.",
    link: "https://github.com/SLokesh1810/StudyOfSemiconductors-DSproject-",
    image: "/placeholders/project-semiconductor.svg",
  },
] as const;

export const skills = [
  {
    title: "Programming",
    items: ["Python", "Java"],
    icon: "code2",
    image: "/placeholders/skill-programming.svg",
  },
  {
    title: "Machine Learning",
    items: [
      "Scikit-learn",
      "Feature Engineering",
      "Model Evaluation",
      "Classical ML Algorithms",
      "ML Pipelines",
    ],
    icon: "brain",
    image: "/placeholders/skill-ml.svg",
  },
  {
    title: "Backend",
    items: [
      "Flask",
      "Django",
      "FastAPI",
      "REST API Design",
      "Async Programming",
    ],
    icon: "server",
    image: "/placeholders/skill-backend.svg",
  },
  {
    title: "Data Engineering",
    items: [
      "ETL Pipelines",
      "Data Preprocessing",
      "Parquet",
      "Pandas",
      "NetCDF Data Handling",
    ],
    icon: "database",
    image: "/placeholders/skill-data.svg",
  },
  {
    title: "DevOps & Tooling",
    items: [
      "Git",
      "Docker",
      "GitHub Actions",
      "CI/CD Pipelines",
    ],
    icon: "wrench",
    image: "/placeholders/skill-devops.svg",
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "ChromaDB", "Database Design"],
    icon: "database",
    image: "/placeholders/skill-database.svg",
  },
];

export const publication = {
  title: "Smart Parking Safety and Surveillance System Using Computer Vision",
  venue: "Intelligent Transportation and Smart Systems, IGI Global (2025)",
  doi: "https://doi.org/10.4018/979-8-3373-4277-1.ch003",
  details:
    "Proposed a multi-view smart parking pipeline integrating computer vision, IoT, and blockchain, with YOLO and OpenCV for real-time pedestrian and vehicle monitoring.",
};
