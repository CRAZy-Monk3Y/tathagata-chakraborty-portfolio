import React from "react";
import about_me_img from "../assets/img/about-img-animate.png";
import { BiNews } from "react-icons/bi";
import Button from "../components/Button";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-full h-screen flex flex-col justify-center items-center"
      id="about"
    >
      <h2 className="text-4xl text-center">About Me</h2>
      <span className="pb-6 text-center text-[#B8B6C1]">My introduction</span>
      <div className="flex flex-row items-center justify-between gap-4 max-w-2xl">
        {/* <motion.div className="w-full"> */}
        <img
          src={about_me_img}
          alt="headshot image"
          className="rounded-lg h-[20rem] object-cover"
          data-tilt
        />
        {/* </motion.div> */}
        <div className="flex flex-col gap-4">
          <p className="about_description">
            Hey there, 🖐️ I am Tathagata Chakraborty a full stack web developer
            from India. I am a passionate learner 🧑‍💻 and a problem solver. I am
            currently persuing a career in web development in Wipro
            Technologies, India. With 2+ years of experience in building
            responsive websites, I have a good understanding of the frontend and
            backend technologies. I am also proficient in building APIs and
            working with databases.
          </p>
          <div className="">
            <Button icon={<BiNews size={20} />}>
              <a
                href="https://drive.google.com/drive/folders/146aTOEjTiIh7Z3uG7WibDTwbCv1BcM87?usp=sharing"
                className="button button--flex"
                target="_blank"
              >
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
