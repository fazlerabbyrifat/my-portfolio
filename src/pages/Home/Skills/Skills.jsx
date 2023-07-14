import React from "react";
import { FaBootstrap, FaCss3Alt, FaGithubAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-gray-800 py-10 px-5 lg:px-40 font-serif">
      <h3 className="text-xl font-semibold text-center mb-5">My Skills</h3>
      <div className="flex items-center space-x-6 mb-4 text-9xl text-info p-4">
        <FaHtml5/>
        <FaCss3Alt />
        <FaBootstrap />
        <SiTailwindcss />
        <FaJs></FaJs>
        <FaReact />
        <FaNodeJs />
        <SiMongodb></SiMongodb> <br />
        <FaGithubAlt />
      </div>
    </div>
  );
};

export default Skills;
