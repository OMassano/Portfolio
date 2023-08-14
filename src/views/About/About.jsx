import React from "react";
import technologies from "../../data/technologyStack";
import { BsDot } from "react-icons/bs";
import { LangContent } from "../../components/langContent";

const About = () => {
  const text = LangContent({ contentID: "aboutText" });
  const paragraphs = text.split("*p*");
  return (
    <section
      id="about"
      className="md:h-screen flex flex-col justify-center items-center p-5"
    >
      <h2 className="text-4xl font-bold pb-5 dark:text-violet-300 text-violet-500 text-center">
        <LangContent contentID="aboutHeader" />
      </h2>
      <div>
        {paragraphs.map((paragraph) => {
          const text = paragraph.split("*span*");
          console.log(text);
          let i = 0;
          const styledParagraph = text.map((text) => {
            if (i % 2 !== 0) {
              i++;
              return (
                <span className="dark:text-violet-300 text-violet-500" key={i}>
                  {text}
                </span>
              );
            } else {
              i++;
              return <span key={i}>{text}</span>;
            }
          });
          return <p className="max-w-3xl py-2">{styledParagraph}</p>;
        })}
      </div>
      <div className="pt-3">
        <h3 className="text-2xl dark:text-violet-300 text-violet-500 text-center justify-center">
          <LangContent contentID="technologiesHeader" />
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
