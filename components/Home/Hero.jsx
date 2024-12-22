import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-2">
        <h2 className="md:grid-cols-1 flex flex-col gap-1 font-medium text-zinc-100">
          <span className="text-2xl">{`I'm Priyanshu Chahar`}</span>
          <span className="text-lg md:text-xl text-zinc-300">
            {`Developer and a Programmer.Passionate about building things, I love to code and learn new technologies.`}
          </span>
        </h2>
        <img
          src="https://avatars.githubusercontent.com/u/165533860?v=4"
          alt=""
          className="h-32 w-32 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
