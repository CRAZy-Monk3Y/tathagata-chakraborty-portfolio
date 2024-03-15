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

export { skills, socials, jobExperience };
