import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import bannerImg from '../../../assets/rifat.jpg'


const Banner = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?export=download&id=1ny-MD_wLkLom5hO8QwAceO91B4WS4h6J";
    link.download = 'resume_of_Md_Ali_Nabi.pdf';
    link.click();
      };

  return (
    <div className="flex items-center justify-center bg-gray-800 py-10 px-5 lg:px-40">
      <div className="container mx-auto font-serif flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h4 className="text-xl font-semibold text-white mb-2">
            Hello Everyone
          </h4>
          <h1 className="text-5xl font-extrabold text-white mb-2">I'm Ali Nabi</h1>
          <h3 className="text-2xl font-bold text-info mb-2">Working as a</h3>
          <h1 className="text-5xl font-extrabold text-info mb-2">
          <Typewriter
              words={['Web Developer', 'React Developer', 'Frontend Developer', 'MERN Stack Developer']}
              loop={true}
              cursorColor="#fff"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              textStyle={{
                fontSize: '5rem',
                color: '#ffcc00',
                fontWeight: 'bold',
              }}
            />
          </h1>
          <div className="flex mt-4 space-x-4">
            <button className="btn btn-accent">
              Hire Me
            </button>
            <button onClick={handleDownloadResume} className="btn btn-info">
              Download Resume
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={bannerImg}
            alt="Banner Image"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
