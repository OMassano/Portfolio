// import React from "react";
// import ProjectCard from "../../components/ProjectCard";

// const Projects = () => {
//   return (
//     <section className="min-h-screen flex flex-col justify-start items-center w-full">
//       <h2 className="text-4xl font-bold py-5 dark:text-violet-300 text-violet-500 text-center">
//         Projects
//       </h2>
//       <p className="max-w-3xl py-2 font-light">
//         Here are all the projects I have completed so far:
//       </p>
//       <ProjectCard/>
//     </section>
//   );
// };

// export default Projects;

import React from "react";

const Projects = () => {
  //md:h-screen only sets as height of screen on md+ devices, w-full sets parent container as full width of screen
  return (
    <section name="projects" className="w-full md:h-screen">
      <div>
        <div>
          <h2>Projects</h2>
          <p>Here are some of the projects I have completed so far:</p>
        </div>
        <div>
          {/*Project cards*/}
          <div>
            <div>
              <button>yt link</button>
              <button>github link</button>
              <h3>title of proj</h3>
              <p>Description...</p>
              <p>TECHNOLOGIES? on hover?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
