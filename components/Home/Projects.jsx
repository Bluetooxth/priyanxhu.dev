import React from "react";
import projexts from "@/data/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

const Projects = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-3xl font-normal text-slate-100 font-[family-name:var(--font-primary)]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-start w-full">
          {projexts.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 p-3 md:p-4 rounded-lg bg-zinc-900 border md:border-2 border-zinc-800 hover:border-green-500 transition-colors duration-300 ease-in-out overflow-hidden"
            >
              <div className="flex justify-between items-center w-full">
                <Link
                  href={project.link}
                  className="text-xl font-normal text-slate-200 border-b md:border-b-2 border-transparent hover:border-green-600 flex items-center gap-1 transition-all duration-300 ease-in-out"
                >
                  <RiExternalLinkFill />
                  {project.name}
                </Link>
                <Link
                  href={project.github}
                  className="text-xl font-normal text-slate-100 p-2 bg-zinc-950 rounded-lg"
                >
                  <FaGithub />
                </Link>
              </div>
              <p className="text-md font-normal text-slate-300">
                {project.desc}
              </p>
              <ul className="flex flex-wrap justify-start items-center gap-2 w-full">
                {project.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="text-lg font-normal text-slate-100 p-1 rounded-lg bg-zinc-950"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
