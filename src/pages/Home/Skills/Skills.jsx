import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";
import { TbJson } from "react-icons/tb";

const Skills = () => {
  const skillsData = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGithubAlt />, name: "GitHub" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <TbJson />, name: "JWT" },
    { icon: <FaFigma />, name: "Figma" },
  ];
  return (
    <div id="skills" className="bg-gray-800 py-10 px-5 lg:px-40 font-serif">
      <h3 className="text-xl font-semibold text-center mb-10">My Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex items-center bg-gray-700 p-10 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="mr-10 text-7xl text-info">{skill?.icon}</div>
          <div className="text-white text-2xl font-semibold">{skill?.name}</div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
