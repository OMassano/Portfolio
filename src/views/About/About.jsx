import React from "react";
import technologies from "../../data/technologyStack";
import { BsDot } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="md:h-screen flex flex-col justify-center items-center p-5"
    >
      <h2 className="text-4xl font-bold pb-5 dark:text-violet-300 text-violet-500 text-center">
        {/* <LangContent contentId="download" /> */}
        About
      </h2>
      <div>
        <p className=" max-w-3xl py-2">
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
      <div className="pt-5">
        <h3 className="text-2xl dark:text-violet-300 text-violet-500 text-center justify-center">
          Technologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 py-5 font-light">
          {technologies &&
            technologies.map((technology) => {
              return (
                <div key={technology.id} className="flex flex-row items-center">
                  <BsDot className="dark:text-violet-300 text-violet-500" />
                  {technology.name}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default About;
