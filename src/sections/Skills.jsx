import React from "react";
import SkillsDropDown from "../components/SkillsDropDown";
import { IconContext } from "react-icons";
import { skills } from "../utils/data";

const Skills = () => {
  return (
    <section
      className="max-w-2xl h-full mx-auto mb-20
     flex items-center"
      id="skills"
    >
      <div className="">
        <h1 className="text-center text-4xl font-semibold">Skills</h1>
        <p className="text-center text-[#B8B6C1]">My Technical Skills</p>
        <IconContext.Provider value={{ color: "#6E57E0", size: "2rem" }}>
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-2">
            {skills.map((skill) => (
              <SkillsDropDown key={skill.skillCategory} skill={skill} />
            ))}
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Skills;
