import React from "react";
import technologies from "./technologyStack";
const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center">
      <h2 className="text-4xl font-bold py-5 dark:text-violet-300 text-violet-500 text-center ">
        About
      </h2>
      <div>
        <p className="mt-4 max-w-3xl py-2">
          {" "}
          I am a{" "}
          <span className="dark:text-violet-300 text-violet-500">
            Full-Stack Developer
          </span>{" "}
          who is curious and committed to self-improvement. I was born in the{" "}
          <span className="dark:text-violet-300 text-violet-500">
            United States
          </span>{" "}
          but moved to Argentina five years ago, I acknowledge the opportunities
          being fully{" "}
          <span className="dark:text-violet-300 text-violet-500">
            bilingual
          </span>{" "}
          gives me, especially in the technological world.
        </p>
        <p className="max-w-3xl py-2">
          The dynamic nature of programming, with its constant evolution and
          innovation, captivates me as I love learning how things work. My{" "}
          <span className="dark:text-violet-300 text-violet-500">dreams</span>{" "}
          as a web developer are to make innovative websites, to not just tackle
          tasks and fix problems but to genuinely understand them in depth.
        </p>
        <p>Below are the technologies I am currently working with!</p>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-2xl dark:text-violet-300 text-violet-500">
          Technologies
        </h3>
        <div className="grid grid-flow-col auto-cols-max gap-6 py-6">
          {technologies.map((technology) => {
            return <div>{technology.name}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
