import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";

function SkillsDropDown({ skill }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleExpand = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <div className="">
      <div
        className="flex flex-row items-center justify-between gap-4 h-20 cursor-pointer"
        onClick={handleExpand}
      >
        {skill.icon}
        <div className="">
          <h2 className="text-xl font-semibold">{skill.skillCategory}</h2>
          <p className="text-sm text-[#B8B6C1]">{skill.description}</p>
        </div>
        {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {showDropdown && (
        <div className="flex flex-col gap-4">
          {skill.list.map((item) => (
            <div key={skill.skillCategory + item.name} className="pl-6 ">
              <div className="flex flex-row items-center justify-between gap-4">
                {item.icon}
                <div className="">
                  <h2 className="font-semibold">{item.name}</h2>
                </div>
              </div>
              <div className="mt-2 w-full bg-[#6E57E0] h-1 rounded-md"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillsDropDown;
