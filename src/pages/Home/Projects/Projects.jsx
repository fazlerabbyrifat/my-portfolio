import React from "react";
import projectImg1 from "../../../assets/projects/project1.png";
import projectImg2 from "../../../assets/projects/project2.png";
import projectImg3 from "../../../assets/projects/project3.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Athleti Camp",
      description:
        "Athleti Camp is a summer school based website where instructors teaches different kinds of sports.",
      image: projectImg1,
      features: [
        "MERN-Stack-based project where Firebase authentication system is implemented",
        "There are three dashboard, one is for student, one is for instructors and another is for admins",
        "Instructors can create and manage their courses",
        "Admin can manage all users and can approve and deny any courses",
        "It is fully mobile responsive website",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
        "JWT",
      ],
      clientSideUrl:
        "https://github.com/fazlerabbyrifat/heroic-playmates-client",
      serverSideUrl:
        "https://github.com/fazlerabbyrifat/heroic-playmates-server",
      liveSiteUrl: "https://athleti-camp.web.app/",
      imagePosition: "left",
    },
    {
      title: "Heroic Playmates",
      description:
        "A Toy shop where various kind of superhero toys found. This is a react-router based website for a toy store.",
      image: projectImg2,
      features: [
        "A react-router based project where tailwind, daisyUi is used for basic designing",
        "In this project, I implemented sorting system in server side based on price, user can sort data ascending and descending order by price",
        "Here, I used firebase authentication system to user login system and secures user data. In this project, social login system is also included",
        "It is fully mobile responsive website",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      clientSideUrl:
        "https://github.com/fazlerabbyrifat/heroic-playmates-client",
      serverSideUrl:
        "https://github.com/fazlerabbyrifat/heroic-playmates-server",
      liveSiteUrl: "https://heroic-playmates.web.app/",
      imagePosition: "right",
    },
    {
      title: "Ruchi Bhoj",
      description:
        "A restaurant where any kind of Bangladeshi dishes can be found. A react-router based restaurant website.",
      image: projectImg3,
      features: [
        "A react-router project, where I use tailwind and daisyUi framework for basic designing",
        "In this project, Rest API is used for load user’s data. Here, I used MongoDB to implement server-side code",
        "Here, I used firebase authentication system to user login system and secures user data. In this project, social login system is also included",
        "It is fully mobile responsive website",
      ],
      technologies: ["React.js", "Node.js", "Tailwind", "MongoDB", "Firebase"],
      clientSideUrl: "https://github.com/fazlerabbyrifat/ruchi-bhoj-client",
      serverSideUrl: "https://github.com/fazlerabbyrifat/ruchi-bhoj-server",
      liveSiteUrl: "https://the-ruchi-bhoj.web.app/",
      imagePosition: "left",
    },
  ];

  return (
    <div id="projects" className="bg-gray-800 py-10 px-5 lg:px-40 font-serif">
      <h3 className="text-xl font-semibold text-center mb-10">Projects</h3>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex bg-white relative max-w-full h-[600px] overflow-hidden rounded-lg mb-6"
        >
          {project.imagePosition === "left" && (
            <div className="w-1/2 h-max transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover object-top rounded-lg"
              />
            </div>
          )}
          <div className="w-1/2 p-10">
            <h4 className="text-2xl font-semibold mb-2 text-info">
              {project.title}
            </h4>
            <p className="text-base text-black">{project.description}</p>
            <div className="mt-4">
              <h5 className="font-semibold mb-2 text-info">Features:</h5>
              <ul className="list-disc pl-2 text-black">
                {project?.features?.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold mb-2 text-info">Technologies:</h5>
              <div className="flex flex-wrap">
                {project?.technologies?.map((technology, technologyIndex) => (
                  <div
                    key={technologyIndex}
                    className="border border-gray-300 rounded-full py-1 px-3 text-sm mb-2 mr-2 text-black"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-4 space-x-4 text-black">
              <Link to={project?.clientSideUrl}>
                <button className="btn btn-info py-2 px-4 rounded">
                  Client-side Code
                </button>
              </Link>
              <Link to={project?.serverSideUrl}>
                <button className="btn btn-info py-2 px-4 rounded">
                  Server-side Code
                </button>
              </Link>
              <Link to={project?.liveSiteUrl}>
                <button className="btn btn-info py-2 px-4 rounded">
                  Live Site
                </button>
              </Link>
            </div>
          </div>
          {project.imagePosition === "right" && (
            <div className="w-1/2 h-max transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover object-top rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
