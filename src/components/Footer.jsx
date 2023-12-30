import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-[#6E57E0] dark:bg-[#100E1B] text-white">
      <div className="flex justify-between max-w-4xl w-full mx-auto">
        <div className="flex flex-col">
          <h1>Tathagata</h1>
          <h1>Chakraborty</h1>
          <p>Full Stack developer</p>
        </div>
        <div className="flex gap-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="flex ">
          <a href="">
            <SlSocialLinkedin />
          </a>
          <a href="">
            <CiTwitter />
          </a>
          <a href="">
            <SlSocialGithub />
          </a>
        </div>
        <div></div>
      </div>
      <p>© Tathagata Chakraborty. All rights reserved</p>
    </footer>
  );
};

export default Footer;
