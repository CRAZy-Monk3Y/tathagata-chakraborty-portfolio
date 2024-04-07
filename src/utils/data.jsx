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
import { GitFindr } from "../assets/img";

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

// TODO: Complete this image integration
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
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/your-username/e-commerce",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A showcase of your skills and experience built with React and Tailwind CSS. Responsive and visually appealing, highlighting your projects and qualifications.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/your-username/portfolio",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A weather application displaying real-time weather data for various locations. Utilizes APIs and provides a user-friendly interface.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/your-username/weather-app",
  },
  {
    id: 5,
    title: "Quiz Game",
    description:
      "An interactive quiz game testing knowledge on a specific subject. Includes features like scorekeeping and multiple-choice questions.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/your-username/quiz-game",
  },
  {
    id: 6,
    title: "Blog Website",
    description:
      "A content management system (CMS) built with a framework like Django or WordPress. Allows users to create, edit, and publish blog posts.",
    image: "https://random.imagecdn.app/500/150", // Replace with your image path
    repoLink: "https://github.com/your-username/blog",
  },
];

export { skills, socials, jobExperience, contactLinks, projects };
