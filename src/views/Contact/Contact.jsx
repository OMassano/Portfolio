import React from "react";
import socialLinks from "../../data/socialLinks";

const Contact = () => {
    const handleClick = (url) =>{
        window.open(url, "_blank");

    }
  return (
    <div
      name="Contact"
      className="p-5 h-full flex flex-col justify-start items-center "
    >
      <h2 className="text-4xl font-bold pb-5 dark:text-violet-300 text-violet-500 text-center">
        Contact
      </h2>
      <p className="max-w-3xl py-2 text-center font-light">
        I am currently open to work; I look forward to any and all opportunities
        that come my way! Feel free to{" "}
        <span className="dark:text-violet-300 text-violet-500">contact me</span>{" "}
        through any of my social networks linked below!
      </p>
      <div className="grid grid-cols-3 gap-6 py-5">
        {socialLinks && socialLinks.map((social)=>{
            return(
                <div key={social.id} onClick={()=>{handleClick(social.url)}}className="text-4xl cursor-pointer hover:scale-125 hover:dark:text-white hover:text-black dark:text-violet-300 text-violet-500">
                    {social.icon}
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Contact;
