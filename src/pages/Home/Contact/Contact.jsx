import React, { useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqk0xr6",
        "template_y1bi54h",
        form.current,
        "1WhoAu4BGoU8pV9oe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="bg-gray-800 py-10 px-5 lg:px-40 font-serif">
      <h3 className="text-xl font-semibold text-center mb-10">Contact</h3>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 pr-5">
          <h4 className="text-2xl font-semibold mb-2">Send a Message</h4>
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="bg-gray-200 text-gray-800 rounded py-2 px-3"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="bg-gray-200 text-gray-800 rounded py-2 px-3"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-gray-200 text-gray-800 rounded py-2 px-3"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <input type="submit" className="btn btn-info" value="send" />
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h4 className="text-2xl font-semibold text-center mb-5">
            Contact Information
          </h4>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">
              <FaPhoneAlt></FaPhoneAlt>
            </span>
            <p className="text-xl font-semibold">Mobile: +8801762355131</p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">
              <HiOutlineMail></HiOutlineMail>
            </span>
            <p className="text-xl font-semibold">
              Email: rifatfazlerabby@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">
              <HiOutlineLocationMarker></HiOutlineLocationMarker>
            </span>
            <p className="text-xl font-semibold">
              Address: Chattogram, Bangladesh
            </p>
          </div>
          <div className="divider"></div>
          <h4 className="text-2xl font-semibold text-center mb-5">
            Social Links
          </h4>
          <div className="mb-4 px-20 text-5xl flex items-center gap-5">
            <Link to="https://www.facebook.com/fazle.rabbie.3/">
              <FaFacebook></FaFacebook>
            </Link>
            <Link to="https://github.com/fazlerabbyrifat">
              <FaGithub></FaGithub>
            </Link>
            <Link to="https://www.linkedin.com/in/f-r-md-ali-nabi-557b95176/">
              {" "}
              <FaLinkedin></FaLinkedin>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
