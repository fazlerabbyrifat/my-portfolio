import React, { useEffect, useState } from "react";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);
  return (
    <div id="about" className="bg-gray-800 py-10 px-5 lg:px-40 font-serif">
      <h3 className="text-xl font-semibold text-center mb-5">About Me</h3>
      <p
        className={`text-xl font-medium p-5 text-justify transition-all duration-1000 transform ${
          showContent
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-180 opacity-0"
        }`}
      >
        My name is F.R.Md. Ali Nabi, a passionate Web Developer who recently
        complete a MERN-Stack course. I have acquired a lot of knowledge about
        HTML, CSS, Bootstrap, Tailwind, Javascript, React, Node, and MongoDB. I
        have also knowledge about Git and Firebase. As a web developer, I
        possess a strong passion for learning and continuously improving my
        skills. I am a quick learner, always eager to explore new technologies
        and stay up-to-date with industry trends. I am familiar with both
        front-end and back-end technologies. I am dedicated to crafting
        exceptional user experiences and leveraging innovative solutions to
        drive impactful web projects. Seeking an entry-level position to apply
        my technical prowess, collaborate with a dynamic team, and spearhead the
        development of cutting-edge web applications. Let's collaborate and
        bring your ideas to life! Feel free to reach out to me for any web
        development opportunities or project inquiries.
      </p>
    </div>
  );
};

export default About;
