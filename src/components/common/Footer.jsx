import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center text-white space-y-2">
        <p className="text-sm md:text-base font-semibold">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">NoteVerse</span>. All rights reserved.
        </p>
        <p className="text-xs md:text-sm">
          Created by
          <a
            href="https://www.linkedin.com/in/ashika-verma-0193b7345/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1 hover:text-gray-200"
          >
            Ashika Verma
          </a>
        </p>
        <div className="flex gap-6 justify-center mt-2">
          <a
            href="https://github.com/ashika-09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-all duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-kumar-6b20a3246/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-all duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
