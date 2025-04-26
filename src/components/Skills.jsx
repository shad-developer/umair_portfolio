import { animated } from "react-spring"; // Assuming you might add react-spring animations later
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiJavascript,
  SiYarn,
  SiVite,
  SiMysql,
} from "react-icons/si";
import { DiFirebase, DiGithubBadge } from "react-icons/di";

const skills = [
  // Added a 'name' property for better display in the tooltip
  { id: "html", name: "HTML5", Component: FaHtml5 },
  { id: "css", name: "CSS3", Component: FaCss3Alt },
  { id: "javascript", name: "JavaScript", Component: SiJavascript },
  { id: "bootstrap", name: "Bootstrap", Component: FaBootstrap },
  { id: "mui", name: "Material UI", Component: SiMui },
  { id: "tailwind", name: "Tailwind CSS", Component: SiTailwindcss },
  { id: "react", name: "React", Component: FaReact },
  { id: "vite", name: "Vite", Component: SiVite },
  { id: "node", name: "Node.js", Component: FaNodeJs },
  { id: "npm", name: "NPM", Component: FaNpm },
  { id: "yarn", name: "Yarn", Component: SiYarn },
  { id: "mongodb", name: "MongoDB", Component: SiMongodb },
  { id: "firebase", name: "Firebase", Component: DiFirebase },
  { id: "sql", name: "MySQL", Component: SiMysql }, // Or just "SQL"
  { id: "vscode", name: "VS Code", Component: SiVisualstudiocode },
  { id: "github", name: "GitHub", Component: DiGithubBadge },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen py-16 md:py-24"
    >
      <div className="text-center max-w-4xl w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-darkDesert mb-8 md:mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 my-4 justify-items-center">
          {skills.map((skill) => {
            const { Component, id, name } = skill;
            return (
              <animated.div
                className="relative group text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert cursor-pointer"
                key={id}
              >
                <Component size={60} />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-auto p-2 min-w-max bg-gray-800 text-white text-xs rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  {name}
                  <svg
                    className="absolute text-gray-800 h-2 w-full left-0 top-full"
                    x="0px"
                    y="0px"
                    viewBox="0 0 255 255"
                    xmlSpace="preserve"
                  >
                    <polygon
                      className="fill-current"
                      points="0,0 127.5,127.5 255,0"
                    />
                  </svg>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
