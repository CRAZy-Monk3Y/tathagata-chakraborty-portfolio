import React, { useState } from "react";
import Button from "../components/Button";
import { projects } from "../utils/data";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalProjects - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  return (
    <section id="projects" className=" mx-auto">
      <div className="pb-20">
        <h2 className="text-center text-4xl font-semibold">Projects</h2>
        <p className="text-center text-[#B8B6C1]">Most recent work</p>
      </div>

      <div className="relative mb-12">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 p-2 rounded-full focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7-1.41-1.41L6 12l8.41 8.41z"
              />
            </svg>
          </button>
        )}
        <div className="flex scrollbar-hide gap-4 px-4">
          {projects.map((project, index) =>
            currentIndex === index ? (
              <div
                key={project.id}
                className={`transition duration-300 ease-in-out transform`}
              >
                <ProjectCard project={project} />
              </div>
            ) : null
          )}
        </div>
        {currentIndex < totalProjects - 1 && (
          <button
            onClick={handleNext}
            className="absolute outline-none right-0 top-1/2 -translate-y-1/2 p-2 rounded-full focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
      {/* Indexse */}
      <div className="w-full mb-36 flex flex-row justify-center items-center gap-4">
        {Array.from(Array(totalProjects).keys()).map((index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-blue-200"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-row w-10/12 min-h-56 mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden ">
      <img
        className="max-w-72 object-cover"
        src={project.image}
        alt={project.title}
      />
      <div className="p-4 flex flex-col justify-between items-center">
        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-700 text-justify leading-6 dark:text-gray-500">
          {project.description}
        </p>

        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#5A43CB] bg-[#6E57E0] text-white flex justify-center items-center w-1/4 gap-2 py-3 rounded-lg"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default Projects;
