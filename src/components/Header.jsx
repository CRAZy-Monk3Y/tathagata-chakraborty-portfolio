import React, { useState } from "react";
import { MdOutlineNightlight, MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    // set the theme
    document.documentElement.classList.toggle("dark");
    console.log(window.location.pathname);
  };

  return (
    <nav className="w-full h-[4rem] flex justify-between items-center dark:text-white">
      <a href="#" className="hover:text-[#6E57E0]">
        Tathagata
      </a>

      <div className="flex gap-6 text-sm" id="nav-menu">
        <ul className="flex justify-between items-center gap-6">
          <li className="nav_item hover:text-[#6E57E0]">
            <a href="#home" className="nav_link active-link">
              <i className="uil uil-estate nav_icon"></i> Home
            </a>
          </li>
          <li className="nav_item hover:text-[#6E57E0]">
            <a href="#about" className="nav_link">
              <i className="uil uil-user nav_icon"></i> About
            </a>
          </li>
          <li className="nav_item hover:text-[#6E57E0]">
            <a href="#skills" className="nav_link">
              <i className="uil uil-file-alt nav_icon"></i> Skills
            </a>
          </li>
          <li className="nav_item hover:text-[#6E57E0]">
            <a href="#qualification" className="nav_link">
              <i className="uil uil-graduation-cap nav_icon"></i> Qualifications
            </a>
          </li>
          <li className="nav_item hover:text-[#6E57E0]">
            <a href="#projects" className="nav_link">
              <i className="uil uil-scenery nav_icon"></i> Projects
            </a>
          </li>
          <li className="nav_item hover:text-[#6E57E0]">
            <a href="#contact" className="nav_link">
              <i className="uil uil-message nav-icon nav_icon"></i> Contact Me
            </a>
          </li>
        </ul>
        <button onClick={toggleTheme}>
          {isDarkMode ? (
            <MdOutlineWbSunny className="text-xl" />
          ) : (
            <MdOutlineNightlight className="text-xl rotate-[320deg]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
