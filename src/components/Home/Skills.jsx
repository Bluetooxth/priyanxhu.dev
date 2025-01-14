import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-2xl font-normal text-zinc-100">What i know</h2>
        <div className="flex flex-wrap justify-start items-center gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-1 px-2 md:px-3 py-[6px] md:py-2 border-2 border-zinc-800 hover:border-cyan-500 rounded-md bg-zinc-900 text-zinc-200 transition-all duration-300 ease-in-out overflow-hidden"
            >
              <p className="text-lg">{skill.skillIcon}</p>
              <p className="text-md font-normal">{skill.skillName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
