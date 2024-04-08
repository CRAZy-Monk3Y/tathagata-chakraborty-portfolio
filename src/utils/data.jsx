import { IoMdCode } from "react-icons/io";
import {
  SiExpress,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaPython, FaTools } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";

import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialGithub } from "react-icons/sl";

import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GitFindr, ResponsiveBankApp } from "../assets/img";

const skills = [
  {
    skillCategory: "Languages",
    icon: <IoMdCode />,
    description: "Languages that I have picked up over the years",
    list: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "Python",
        icon: <FaPython />,
      },
    ],
  },
  {
    skillCategory: "Libraries & Frameworks",
    icon: <PiBracketsCurlyBold />,
    description: "Libraries and Frameworks that I prefer to work with",
    list: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      { name: "MySQL", icon: <SiMysql /> },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
    ],
  },
  {
    skillCategory: "Tools",
    icon: <FaTools />,
    description: "Tools that I know and use on a daily basis",
    list: [
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "Netlify",
        icon: <SiNetlify />,
      },
      {
        name: "Google Cloud",
        icon: <SiGooglecloud />,
      },
    ],
  },
];

const socials = [
  {
    name: "Linkdin",
    href: "https://www.linkedin.com/in/tathagata-chakraborty-478416172",
    icon: <SlSocialLinkedin className="text-xl" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Tathaga24099447",
    icon: <BsTwitterX className="text-xl" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/CRAZy-Monk3Y",
    icon: <SlSocialGithub className="text-xl" />,
  },
];

const jobExperience = [
  {
    index: 1,
    companyName: "Wipro Technologies",
    companySite: "https://www.wipro.com/",
    jobTitle: "Software Engineer",
    tenure: "May 2022 - Present",
  },
  {
    index: 2,
    companyName: "Wipro Technologies",
    companySite: "https://www.wipro.com/",
    jobTitle: "Software Engineer Intern",
    tenure: "February 2022 - April 2022",
  },
];

const contactLinks = [
  {
    title: "Email",
    address: "mailto:tathagata.chakraborty@yahoo.com",
    icon: (
      <div>
        <MdOutlineMail className="w-8 h-8 text-[#6E57E0]" />
      </div>
    ),
  },
  {
    title: "Location",
    address: "Kolkata, India",
    icon: (
      <div>
        <IoLocationOutline className="w-8 h-8 text-[#6E57E0]" />
      </div>
    ),
  },
];

const projects = [
  {
    id: 1,
    title: "GitFindr",
    description:
      "GitFinder is a React.js application built with Yarn and Vite. It allows users to search for GitHub users by their username and provides details about their Git profiles. The app also includes a search history feature that enables users to view their previous searches and delete them. ",
    image: GitFindr, // Replace with your image path
    repoLink: "https://github.com/CRAZy-Monk3Y/gitFinder",
  },
  {
    id: 2,
    title: "Responsive Bank App",
    description:
      "This is a beautifully designed responsive web application for a bank, built using React.js, Vite, and Tailwind CSS. The app is optimized for usability on various devices, including desktops, tablets, and mobile phones.",
    image: ResponsiveBankApp, // Replace with your image path
    repoLink: "https://github.com/CRAZy-Monk3Y/bank_modern_app",
  },
  {
    id: 3,
    title: "Full Stack Movie Review App",
    description:
      "Introducing a dynamic Full Stack Movie Review App, seamlessly merging Spring Boot and MongoDB for a robust backend. Crafted with React JS, Vite, and react-router on the frontend, enhanced by axios, react-icons, and bootstrap, offering a user-friendly interface. Experience smooth RESTful API interactions, empowered by React Player for multimedia integration. Unlock a captivating movie review platform that seamlessly blends technology and cinema passion.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/CRAZy-Monk3Y/FullStackMoviesApp",
  },
  {
    id: 4,
    title: "WeatherWiz",
    description:
      "WeatherWiz is a cutting-edge full-stack weather app that empowers users with real-time weather insights. Crafted with Next.js 13, Tailwind CSS, and TypeScript, it exemplifies our commitment to modern web tech. Seamlessly access weather data worldwide, dive into 7-day forecasts. Tailored for both desktop and mobile, WeatherWiz harnesses the latest web innovations to deliver an immersive and responsive user experience. A Project of web development excellence, leveraging the skills and technologies that make WeatherWiz a true standout in the industry.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/CRAZy-Monk3Y/Weather-App.git",
  },
  {
    id: 5,
    title: "NikeReactive",
    description:
      "This is a responsive web application that replicates the design and functionality of the Nike website. It is built using Yarn, React.js, Vite, Tailwind CSS, and React Reveal for animations. The app is designed to provide an optimal user experience across various devices and screen resolutions.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/CRAZy-Monk3Y/NikeReactiveApp.git",
  },
  {
    id: 6,
    title: "PortFolio Website",
    description:
      "Welcome to my portfolio website! The website you are visitin now. This platform showcases my latest projects, skills, and experiences.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink:
      "https://github.com/CRAZy-Monk3Y/tathagata-chakraborty-portfolio.git",
  },
];

export { skills, socials, jobExperience, contactLinks, projects };
