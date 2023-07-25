import React from "react";

const Landing = () => {
  return (
    //fills screen
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h3 className="text-4xl ">Oceana Massano</h3>
      <h2 className="text-5xl py-5 font-bold dark:text-violet-300 text-violet-500 animate-pulse">
        Full-Stack Developer
      </h2>

      <p className="max-w-xl font-light">
        Hello, welcome to my portfolio! I am a Full-Stack Developer who is
        passionate about creating websites and expanding their knowledge!
      </p>
      <a href="/OceanaMassano-CV-ENGLISH-Jul23.pdf" download={true} className="font-semibold">Download Resume</a>
    </section>
  );
};

export default Landing;
