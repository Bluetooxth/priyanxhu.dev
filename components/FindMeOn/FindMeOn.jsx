import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const FindMeOn = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/bluetooxth",
      icon: <AiOutlineGithub />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/bluetooxth",
      icon: <FaSquareXTwitter />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/priyannxhuu",
      icon: <FaLinkedin />,
    },
    {
      name: "Discord",
      link: "https://discord.com/users/bluetooxth",
      icon: <FaDiscord />,
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@bluetooxth",
      icon: <FaYoutube />,
    },
  ];

  return (
    <section className="flex justify-center items-start min-h-screen w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">
          Find me on
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 w-full">
          {socials.map((social, index) => (
            <Link
              className="
                flex flex-col justify-center items-center gap-1 p-5 bg-zinc-800 rounded-lg hover:bg-zinc-900 text-zinc-200 text-lg border-2 border-zinc-700 md:text-xl transition-all duration-300 ease-in-out
                "
              key={index}
              href={social.link}
            >
              <p className="text-2xl">{social.icon}</p>
              <p>{social.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindMeOn;
