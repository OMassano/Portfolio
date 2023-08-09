import React from "react";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import projects from "../../data/projectList";

const Projects = () => {
  const handleClick = (links, site) => {
    //need to find in links array where link.name === site
    for (let i = 0; i < links.length; i++) {
      if (links[i].name === site) {
        window.open(links[i].url, "_blank");
        break;
      }
    }
  };
  return (
    <section id="projects" className="w-full md:h-screen py-5">
      <div className="mx-auto flex flex-col justify-center w-full h-full items-center">
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
              const youtubeLink = project.links.find(
                (link) => link.name === "youtube"
              );
              const githubLink = project.links.find(
                (link) => link.name === "github"
              );
              return (
                <div
                  key={project.id}
                  className=" hover:sm:-translate-y-6 shadow-sm rounded-lg border-2 p-5 dark:border-violet-300 border-violet-500 flex flex-col duration-500 cursor-pointer"
                >
                  <div
                    className="flex items-center justify-between pb-2 dark:text-violet-300 text-violet-500"
                    style={{
                      flexDirection:
                        githubLink && !youtubeLink ? "row-reverse" : "row",
                    }}
                  >
                    {youtubeLink && (
                      <button
                        className="hover:scale-110 dark:hover:text-white hover:text-black duration-200"
                        onClick={() => handleClick(project.links, "youtube")}
                      >
                        <AiFillYoutube size={35} />
                      </button>
                    )}
                    {githubLink && (
                      <button
                        className="hover:scale-110 dark:hover:text-white hover:text-black duration-200"
                        onClick={() => handleClick(project.links, "github")}
                      >
                        <AiFillGithub size={35} />
                      </button>
                    )}
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
