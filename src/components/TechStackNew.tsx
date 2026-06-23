import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// All tech stack items with their icons and official URLs
// Perfect inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Row 1 - 12 items
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
    // { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    // { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
    // { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    // { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", url: "https://angular.io" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },

  ],
  // Row 2 - 10 items
  [
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://tensorflow.org" },
    { name: "Pandas", icon: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000", url: "https://pandas.pydata.org" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
    // { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", url: "https://djangoproject.com" },
    { name: "LangSmith", icon: "https://img.icons8.com/color/48/analytics.png", url: "https://smith.langchain.com/" },
    { name: "LangGraph", icon: "https://img.icons8.com/?size=100&id=11232&format=png&color=FFFFFF", url: "https://langchain-ai.github.io/langgraph/" },
    { name: "LangChain", icon: "https://img.icons8.com/color/48/parrot.png", url: "https://langchain.com" },
    { name: "Transformers", icon: "https://img.icons8.com/color/48/artificial-intelligence.png", url: "https://huggingface.co/docs/transformers" },
    // { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
  ],
  // Row 3 - 8 items
  [
    // { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
    { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co" },
    { name: "n8n", icon: "https://img.icons8.com/?size=100&id=QeAqkuCVOubL&format=png&color=FFFFFF", url: "https://n8n.io" },
    { name: "Neo4j", icon: "https://img.icons8.com/?size=100&id=P7D336AbmFu1&format=png&color=FFFFFF", url: "https://neo4j.com" },
    { name: "Pinecone", icon: "https://img.icons8.com/?size=100&id=2905&format=png&color=FFFFFF", url: "https://pinecone.io" },
    { name: "Git", icon: "https://img.icons8.com/?size=100&id=38389&format=png&color=FFFFFF", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF", url: "https://github.com" },
  ],
  // Row 4 - 6 items
  [
    { name: "Bedrock AgentCore", icon: "https://img.icons8.com/?size=100&id=oNoEKYX8teV0&format=png&color=FFFFFF", url: "https://aws.amazon.com/bedrock/" },
    { name: "Agentic AI", icon: "https://img.icons8.com/color/48/robot.png", url: "https://en.wikipedia.org/wiki/Software_agent" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
  ],
  // Row 5 - 4 items
  [
    { name: "Agile Development", icon: "https://img.icons8.com/?size=100&id=1MEnLo2pIW7O&format=png&color=FFFFFF", url: "https://www.scrum.org/" },
    { name: "AI Research", icon: "https://img.icons8.com/color/48/microscope.png", url: "https://scholar.google.com" },
  ],
  // Row 6 - 2 items
  [
    { name: "LLMs", icon: "https://img.icons8.com/?size=100&id=KQfGcnxd2gfU&format=png&color=FFFFFF", url: "https://en.wikipedia.org/wiki/Large_language_model" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
