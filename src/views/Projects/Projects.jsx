import React from "react";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center">
      <h2 className="text-4xl font-bold py-5 dark:text-violet-300 text-violet-500 text-center">
        Projects
      </h2>
      <p className="max-w-3xl py-2 font-light">
        Here are all the projects I have completed so far:
      </p>
      <ProjectCard/>
    </section>
  );
};

export default Projects;
