import React from "react";
import projexts from "@/data/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-2">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">
          Thing i worked on
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-3 w-full">
          {projexts.map((project, index) => (
            <div
              className="flex flex-col justify-between items-start w-full gap-2 p-5 rounded-lg bg-zinc-800
                hover:bg-zinc-900 border-2 border-zinc-700 transition-all duration-300 ease-in-out
                "
              key={index}
            >
              <div className="flex flex-col justify-start items-start gap-1">
                <h3 className="text-xl font-medium text-zinc-200">
                  {project.name}
                </h3>
                <p className="text-lg text-zinc-300">{project.desc}</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 h-full mt-2">
                <div className="flex flex-wrap justify-start items-start gap-2">
                {project.tech.map((icon, index) => (
                  <span key={index} className="text-xl text-zinc-300">
                    {icon}
                  </span>
                ))}
                </div>
                <div className="flex flex-wrap justify-start items-center gap-2 mt-2">
                  <Link
                    target="_blank"
                    href={project.github}
                    className="
                    text-md font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-900 border-2 border-zinc-300 py-1 px-3 rounded-lg transition-all duration-300 ease-in-out flex items-center gap-2
                    "
                  >
                    Source Code <FaGithub className="inline-block" />
                  </Link>
                  {project.link && (
                    <Link
                      target="_blank"
                      href={project.link}
                      className="
                    text-md font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-900 border-2 border-zinc-300 py-1 px-3 rounded-lg transition-all duration-300 ease-in-out flex items-center gap-2
                    "
                    >
                      Live Demo <IoGlobeOutline className="inline-block" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;