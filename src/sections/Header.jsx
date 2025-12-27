import { useState } from "react";
import { MdOutlineNightlight, MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    // set the theme
    document.documentElement.classList.toggle("dark");
    console.log(window.location.pathname);
  };

  return (
    <nav className="w-screen hidden sm:block left-0 top-0 z-[100] fixed dark:text-white bg-[#FBFBFE] dark:bg-[#191627] backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30">
      <div className="w-full h-[4rem] mx-auto max-w-4xl flex justify-between items-center">
        <a href="#" className="hover:text-[#6E57E0] text-sm md:text-lg">
          Tathagata
        </a>

        <div className="flex gap-6 text-xs md:text-sm" id="nav-menu">
          <ul className="flex justify-between items-center gap-6">
            <li
              className={`nav_item hover:text-[#6E57E0] ${
                activeTab === "home" && "text-[#6E57E0]"
              }`}
            >
              <a
                href="#"
                className="nav_link active-link"
                onClick={() => setActiveTab("home")}
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li
              className={`nav_item hover:text-[#6E57E0] ${
                activeTab === "about" && "text-[#6E57E0]"
              }`}
            >
              <a
                href="#about"
                className="nav_link"
                onClick={() => setActiveTab("about")}
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li
              className={`nav_item hover:text-[#6E57E0] ${
                activeTab === "skills" && "text-[#6E57E0]"
              }`}
            >
              <a
                href="#skills"
                className="nav_link"
                onClick={() => setActiveTab("skills")}
              >
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            <li
              className={`nav_item hover:text-[#6E57E0] ${
                activeTab === "qualification" && "text-[#6E57E0]"
              }`}
            >
              <a
                href="#qualification"
                className="nav_link"
                onClick={() => setActiveTab("qualification")}
              >
                <i className="uil uil-graduation-cap nav_icon"></i>{" "}
                Qualifications
              </a>
            </li>
            <li
              className={`nav_item hover:text-[#6E57E0] ${
                activeTab === "projects" && "text-[#6E57E0]"
              }`}
            >
              <a
                href="#projects"
                className="nav_link"
                onClick={() => setActiveTab("projects")}
              >
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>
            <li
              className={`nav_item hover:text-[#6E57E0] ${
                activeTab === "contact" && "text-[#6E57E0]"
              }`}
            >
              <a
                href="#contact"
                className="nav_link"
                onClick={() => setActiveTab("contact")}
              >
                <i className="uil uil-message nav-icon nav_icon"></i> Contact Me
              </a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="hover:text-[#6E57E0]">
            {isDarkMode ? (
              <MdOutlineWbSunny className="text-xl" />
            ) : (
              <MdOutlineNightlight className="text-xl rotate-[320deg]" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
