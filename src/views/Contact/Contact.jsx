import React from "react";
import socialLinks from "../../data/socialLinks";
import { LangContent } from "../../components/langContent";

const Contact = () => {
  const content = LangContent({ contentID: "contactText" });
  let paragraphs;
  content.includes("*p*")
    ? (paragraphs = content.split("*p*"))
    : (paragraphs = [content]);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section
      id="contact"
      className="p-5 md:h-screen flex flex-col justify-center items-center "
    >
      <h2 className="text-4xl font-bold pb-5 dark:text-violet-300 text-violet-500 text-center">
        <LangContent contentID="contactHeader" />
      </h2>
      {paragraphs.map((paragraph) => {
        if (paragraph.includes("*span*")) {
          let text = paragraph.split("*span*");
          let i = 0;
          const spanParagraph = text.map((text) => {
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
          return (
            <p className="max-w-3xl py-2 text-center font-light" key={spanParagraph}>
              {spanParagraph}
            </p>
          );
        }
        else{
          return(
            <p className="max-w-3xl py-2 text-center font-light" key={paragraph}>{paragraph}</p>
          )
        }
      })}
      <div className="grid grid-cols-3 gap-6 py-5">
        {socialLinks &&
          socialLinks.map((social) => {
            return (
              <div
                key={social.id}
                onClick={() => {
                  handleClick(social.url);
                }}
                className="text-4xl cursor-pointer hover:scale-125 hover:dark:text-violet-200 dark:text-violet-300 text-violet-500 hover:text-violet-600 duration-200"
              >
                {social.icon}
              </div>
            );
          })}
      </div>
      <a
        href="/OceanaMassano-CV-ENGLISH-Jul23.pdf"
        download={true}
        className="flex hover:scale-110 items-center justify-center mt-10 py-2 px-4 rounded-md dark:bg-violet-300 bg-violet-500 font-semibold dark:text-darkBG text-white shadow-md dark:shadow-inner dark:hover:bg-violet-200 hover:bg-violet-600 duration-200"
      >
        <LangContent contentID="resume"/>
      </a>
    </section>
  );
};

export default Contact;
