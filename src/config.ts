export const config = {
    developer: {
        name: "Piyush",
        fullName: "Piyush Arun",
        title: "AI Engineer & Software Engineer",
        description: "AI Engineer & Software Engineer building intelligent agentic systems, n8n automations, and modern web applications. Passionate about multi-agent systems, prompt engineering, and LLM orchestration."
    },
    social: {
        github: "arunpiyush25",
        email: "arunpiyush10@gmail.com",
        location: "Bengaluru, India"
    },
    about: {
        title: "About Me",
        description: "I am a Software Engineer (Agentic AI & FinTech) based in Bengaluru, India. I specialize in building production-grade agentic workflows, multi-agent frameworks, and high-scale FinTech systems. Currently working as an Agentic AI Intern at Tazapay and just completed my masters in Computer Science & Engineering (Information Security) from NIT Calicut. With experience ranging from developing \"end-to-end cross border payment systems\" to \"architecting multi-agent framework for reducing hallucination in zero-show code generation by LLMs\", I am deeply passionate about software engineering, LLMs, Agentic AI, and doing intelligent automation."
    },
    experiences: [
        {
            position: "Agentic AI Intern",
            company: "Tazapay",
            period: "Jan 2026 - Present",
            location: "Bengaluru, India",
            description: "Architected and deployed production-grade workflow automations using n8n. Built prediction models for cross-border payouts using ML models.",
            responsibilities: [
                "Deployed automation workflow for end-to-end China Payouts using n8n integrating bank APIs, OAuth2, and idempotency controls.",
                "Integrated third-party bank APIs and Slack monitoring for automated payout processing",
                "Built production-ready payout time prediction models using XG-Boost and feature engineering",
                "Estimated and displayed expected settlement times to merchants at payout initiation",
                "Tech Stack: AI, ML, LLMs, Prompt Engineering, n8n, Automation, AI Agents, FinTech"
            ],
            // technologies: ["LLMs", "Prompt Engineering", "n8n", "Automation", "AI Agent"]
        },
        {
            position: "Software Engineer",
            company: "Instantpay India Ltd",
            period: "Feb 2023 - Sep 2023",
            location: "New Delhi, India",
            description: "Developed financial products handling 1M+ daily transactions ($1B+ monthly volume) and spearheaded frontend migrations.",
            responsibilities: [
                "Developed financial calculators (EMI, TDS, GST, CAGR, etc.), improving user engagement by 30%",
                "Built secure internal products (Expense Card, Gift Card, SFTP) ensuring high reliability",
                "Spearheaded frontend migration to Angular CLI v15+, resolving 30+ UI/UX issues",
                "Managed GitHub repositories through branching strategies and thorough code reviews",
                "Tech Stack:  HTML, CSS, Angular, TypeScript, Bootstrap, Git, GitHub"
            ],
            // technologies: ["FinTech", "Angular", "TypeScript", "CSS", "GitHub"]
        }
    ],
    education: [
        {
            position: "M.Tech",
            company: "National Institute of Technology Calicut",
            period: "Aug 2024 - May 2026",
            location: "Calicut, India",
            description: "Specialization: Computer Science & Engineering (Information Security).\nRelevant Courses: Information Security, AI Agents, Machine Learning, Distributed Systems, Linear Algebra, Big Data.",
            responsibilities: [
                "Conducted research on code generation and hallucination reduction. The paper accepted at IndoML'25, BITS Pilani & RECCAP'26, IIT Palakkad. The paper is published under IEEE Proceedings.",
                "Served as Alumni Representative (Coordinator) for the CSE Department."
            ],
            technologies: ["Research", "AI Agents", "Information Security", "Distributed Systems", "Linear Algebra", "Big Data"]
        },
        {
            position: "B.Tech",
            company: "CIC, University of Delhi",
            period: "Aug 2019 - Jul 2023",
            location: "Delhi, India",
            description: "Specialization: Information Technology & Mathematics.\nRelevant Courses: Data Structures & Algorithms, DBMS, Object-Oriented Programming, Operating System, SDLC.",
            responsibilities: [
                "Secured All India Rank - 67 in Delhi University Entrance Test (NTA DUET)",
                // "Mastered software development lifecycles and mathematical innovations"
            ],
            technologies: ["Data Structures", "Algorithms", "DBMS", "OOP", "Operating Systems", "SDLC"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "COM: Halucination Reduction",
            category: "Multi-Agent System",
            technologies: "Python, LangGraph, n8n, Open source models, HuggingFace, Research",
            image: "/images/COM.png",
            description: "A multi-agent framework (Creator, Critic, Verifier, Refiner) integrating domain-specific open-source models. Achieved ~35% hallucination reduction and improved Pass@1 accuracy in zero-shot code generation.",
            link: "https://drive.google.com/file/d/1WGA1Sub_UHgOD553q4xF-RcRldghSUSR/view?usp=drive_link"
        },
        {
            id: 2,
            title: "AI Hybrid Travel Assistant",
            category: "Personalized RAG System",
            technologies: "Python, Pinecone, Neo4j, Hugging Face, Gemini 2.5 Pro",
            image: "/images/HYBRID-TRAVEL.png",
            description: "A hybrid retrieval system combining Pinecone (vector similarity search) and Neo4j (graph-based queries) to generate context-aware travel recommendations with stateful LangChain conversation memory.",
            link: "https://github.com/arunpiyush25/AI-hybrid-travel-assistant"
        },
        {
            id: 3,
            title: "Agentic Embedded Software Development",
            category: "Agentic AI System",
            technologies: "Python, LangGraph, Gemini API, Lattice Radiant/Propel SDK",
            image: "/images/craftifai.png",
            description: "A fully automated AI-driven system that automates the entire Lattice Propel SDK development process—including Gemini-powered C code generation, project setup, makefile compilation, ELF validation, and FPGA device detection/programming.",
            link: "https://github.com/arunpiyush25/craftifai-project"
        },
        {
            id: 4,
            title: "Samarth — Bharat's Agriculture cum Climate Assistant",
            category: "GenAI Q&A Pipeline",
            technologies: "Python, Gemini 2.0 Flash, Pandas, Gradio, data.gov.in REST API",
            image: "/images/samarth.png",
            description: "An intelligent, real-time Q&A system built over live Indian agriculture and climate datasets. Leverages Gemini for query intent extraction and Pandas for automated, hallucination-free calculations, complete with source citations and daily automated data fetching.",
            link: "https://github.com/arunpiyush25/Build-For-Bharat"
        },
        {
            id: 5,
            title: "NIT Calicut's Way-Finder",
            category: "Geospatial Information System",
            technologies: "Angular, TypeScript, Node.js, Express, MongoDB, Google Maps API",
            image: "/images/wayfinder.png",
            description: "A scalable full-stack geospatial mapping and wayfinding platform designed for NIT Calicut. Features secure JWT role segregation, real-time campus route visualization, moderated user marker suggestions (POIs), and admin governance systems.",
            link: "https://github.com/arunpiyush25/Nit_Calicut-WayFinder"
        },
        {
            id: 6,
            title: "GenAI Adaptive eLearning Platform",
            category: "Adaptive EdTech Platform",
            technologies: "Angular, TypeScript, Node.js, Express, Gemini API",
            image: "/images/elearning.png",
            description: "A full-stack, cognitively-aware adaptive eLearning platform utilizing Bloom's Taxonomy. Features real-time prompt classification to assess the learner's cognitive level, backend-engineered semantic prompt transformation to raise or scaffold learning complexity, and real-time visualization of cognitive trajectory analytics.",
            link: "https://github.com/arunpiyush25/GenAI-Adaptive-eLearning"
        }
    ],
    contact: {
        email: "arunpiyush10@gmail.com",
        github: "https://github.com/arunpiyush25",
        linkedin: "https://linkedin.com/in/piyushkumararun",
        twitter: "https://x.com/piyushkumararun",
        web3formsAccessKey: "59a880ed-e0bb-40a4-a4f8-20336278fadd" // Add your Web3Forms access key here
        // facebook: "https://facebook.com/piyushkumararun",
        // instagram: "https://instagram.com/piyushkumararun"
    },
    skills: {
        develop: {
            title: "AI Domain",
            description: "LLMs, multi-agent frameworks, and automation pipelines",
            details: "Built Multi-agent framework for hallucination reduction in zero-shot code generation by LLMs, RAG systems with Pinecone & Neo4j, and Voice AI Agent to speed up compliance hold transactions in FinTech.",
            tools: ["Python", "LangChain", "LangGraph", "RAG", "LLMs", "Agentic AI", "Voice AI", "Prompt Engineering"]
        },
        design: {
            title: "SWE Domain",
            description: "Performant full-stack applications & APIs",
            details: "Deployed secure financial products like Financial Calculators & end-to-end cross border payment pipelines, and worked around transaction time prediction.",
            tools: ["n8n", "HTML", "CSS", "TypeScript", "Angular", "SQL", "AWS", "Agile"]
        }
    }
};
