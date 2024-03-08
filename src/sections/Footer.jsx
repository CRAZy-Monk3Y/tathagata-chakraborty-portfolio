import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-[#6E57E0] dark:bg-[#100E1B] text-white  h-[17rem] py-[3rem]">
      <div className="flex justify-between max-w-4xl w-full mx-auto mb-[3rem]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Tathagata</h1>
          <h1 className="text-3xl font-semibold">Chakraborty</h1>
          <p className="mt-[1rem] text-sm">Full Stack developer</p>
        </div>
        <div className="flex gap-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
        {/* :TODO add socials links */}
        <div className="flex gap-4 justify-end">
          <a href="">
            <SlSocialLinkedin className="text-xl" />
          </a>
          <a href="">
            <CiTwitter className="text-xl" />
          </a>
          <a href="">
            <SlSocialGithub className="text-xl" />
          </a>
        </div>
      </div>
      <p className="text-sm text-slate-300 text-center">
        {new Date().getFullYear()} © Tathagata Chakraborty. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
