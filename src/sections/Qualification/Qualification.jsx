import React from "react";
import { IconContext } from "react-icons";
import { MdWork } from "react-icons/md";
import { jobExperience } from "../../utils/data";
import { FaCalendarAlt } from "react-icons/fa";
import "./style.css";

const Qualification = () => {
  return (
    <section id="qualification" className="py-20">
      <div className="pb-20">
        <h2 className="text-center text-4xl font-semibold">Experience</h2>
        <p className="text-center text-[#B8B6C1]">My Work Experience</p>
      </div>
      <div className="">
        <IconContext.Provider value={{ color: "#6E57E0", size: "2rem" }}>
          <div className="flex flex-row items-center justify-center gap-x-2 pb-8">
            <MdWork />
            <p className="text-[#6E57E0]">Work</p>
          </div>
        </IconContext.Provider>
        <div className="w-1/2 mx-auto">
          <div className="">
            <div className={`flex flex-row gap-y-2 `}>
              <div className="qualification_content " data-content id="work">
                <div className="qualification_data">
                  <div>
                    <h3 className="qualification_title font-semibold">
                      {jobExperience[0].jobTitle}
                    </h3>
                    <span className="qualification_subtitle text-sm">
                      <a
                        href={jobExperience[0].companySite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {jobExperience[0].companyName}
                      </a>
                    </span>
                    <div className="pt-6 flex flex-wrap items-center gap-2 qualification_calendar text-sm">
                      <FaCalendarAlt />
                      {jobExperience[0].tenure}
                    </div>
                  </div>

                  <div>
                    <span className="qualification_circle"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>

                <div className="qualification_data">
                  <div></div>

                  <div>
                    <span className="qualification_circle "></span>
                  </div>
                  <div>
                    <h3 className="qualification_title font-semibold">
                      {jobExperience[1].jobTitle}
                    </h3>
                    <span className="qualification_subtitle text-sm">
                      <a
                        href={jobExperience[1].companySite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {jobExperience[1].companyName}
                      </a>
                    </span>
                    <div className="pt-6 flex gap-2 items-center qualification_calendar text-sm">
                      <FaCalendarAlt />
                      <div className="flex flex-wrap">
                        {jobExperience[1].tenure}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
