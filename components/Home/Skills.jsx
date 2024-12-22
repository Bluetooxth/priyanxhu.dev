import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">
          What i know
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-3 w-full">
          {skills.map((skill, index) => (
            <p
              className="text-md md:text-lg font-medium bg-zinc-900 hover:bg-zinc-900 border-2 border-zinc-800 py-1 px-3 md:px-5 rounded-lg text-zinc-200 flex items-center gap-1 transition-all duration-300 ease-in-out"
              key={index}
            >
              <span>{skill.skillIcon}</span>
              <span>{skill.skillName}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
