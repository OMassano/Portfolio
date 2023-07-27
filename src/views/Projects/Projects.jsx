import React from "react";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import projects from "../../data/project/projectList";

const Projects = () => {
  return (
    <section name="projects" className="w-full md:h-screen py-5">
      <div className="mx-auto flex flex-col justify-start w-full h-full items-center">
        <div className="pb-5 px-5">
          <h2 className="text-4xl font-bold dark:text-violet-300 text-violet-500 text-center pb-5">
            Projects
          </h2>
          <p className="pb-2 font-light">
            Here are some of the projects I have completed so far:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-10">
          {projects &&
            projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="shadow-sm rounded-lg border-2 p-5 dark:border-violet-300 border-violet-500 flex flex-col"
                >
                  <div className="flex items-center justify-between pb-2 dark:text-violet-300 text-violet-500">
                    <button className="hover:scale-110 dark:hover:text-white hover:text-black duration-100">
                      <AiFillYoutube size={35} />
                    </button>
                    <button className="hover:scale-110 dark:hover:text-white hover:text-black duration-100">
                      <AiFillGithub size={35} />
                    </button>
                  </div>
                  <h3 className="font-semibold capitalize text-xl pb-2">
                    {project.name}
                  </h3>
                  <p className="flex-grow pb-2">
                    {project.descriptions[0].desc}
                  </p>
                  {/* Container for technologies */}
                  <div className="font-russo-one text-gray-400 flex flex-wrap items-end">
                    {project.technologies.join(", ")}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
