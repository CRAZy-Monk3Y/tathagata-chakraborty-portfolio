import React from "react";
import { IconContext } from "react-icons";
import { CiTwitter } from "react-icons/ci";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { LuSendHorizonal } from "react-icons/lu";
import { BsMouse } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";
import Typed from "react-typed";
import Button from "../components/Button";
import { socials } from "../utils/data";

const Home = () => {
  return (
    <section
      className="items-center justify-center dark:text-white dark:bg-[#191627] h-[92vh] mt-[4rem]"
      id="home"
    >
      <div className="container grid pt-[20vh]">
        <div className="home_content grid grid-cols-4">
          <IconContext.Provider value={{ color: "#5A43CB", size: "1.5rem" }}>
            <div className="flex flex-col justify-center items-start gap-6">
              {socials.map((item) => (
                <a key={item.name} href={item.href} target="_blank">
                  {item.icon}
                </a>
              ))}
            </div>
          </IconContext.Provider>

          {/* <div className="home_img">
            <svg
              className="home_blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              data-tilt
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home_blob-img"
                  x="12"
                  y="8"
                  href="./assets/img/icon.png"
                />
              </g>
            </svg>
          </div> */}

          <div className="flex flex-col gap-4 col-span-3">
            <h1 className="text-5xl font-semibold">Hi, I'm Tathagata</h1>
            <h3 className="text-[#6D6A7C] dark:text-gray-300 text-xl">
              I am{" "}
              <Typed
                strings={[
                  "a Web Developer",
                  "full stack Engineer",
                  "a tech enthusiast ",
                ]}
                typeSpeed={100}
                backSpeed={90}
                loop
              />{" "}
            </h3>

            <p className="text-[#6D6A7C] dark:text-gray-300 max-w-64">
              Building Software to solve real life problems
            </p>
            <Button
              title="Contact Me"
              href="#contact"
              icon={<LuSendHorizonal size={20} />}
              className="mt-4"
            />
          </div>
          
        </div>
      </div>
      <a
        href="#about"
        className="w-[10rem] flex hover:animate-bounce flex-row items-center gap-2 py-10"
      >
        <IconContext.Provider value={{ color: "#5A43CB" }}>
          <BsMouse size={30} />
          <span className="home_scroll-name">Scroll Down</span>
          <FaArrowDown size={20} />
        </IconContext.Provider>
      </a>
    </section>
  );
};

export default Home;
