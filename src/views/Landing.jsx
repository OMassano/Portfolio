import React from "react";

const Landing = () => {
  return (
    //fills screen
    <section className="min-h-screen flex flex-col justify-center  items-center p-5 text-center">
      <h3 className="text-4xl ">Oceana Massano</h3>
      <h2 className="text-5xl py-5 font-bold dark:text-violet-300 text-violet-500">
        Full-Stack Developer
      </h2>

      <p className="max-w-xl font-light">
        Hello, welcome to my portfolio! I am a Full-Stack Developer who is
        passionate about creating websites and expanding their knowledge!
      </p>
      <a
        href="/OceanaMassano-CV-ENGLISH-Jul23.pdf"
        download={true}
        className="flex items-center justify-center mt-10 py-2 px-4 rounded-md dark:bg-violet-300 bg-violet-500 font-semibold dark:text-darkBG text-white shadow-md dark:shadow-inner dark:hover:bg-violet-200 hover:bg-violet-600"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Landing;
