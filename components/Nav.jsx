import React from "react";
import Link from "next/link";
import { PiLinktreeLogo } from "react-icons/pi";


const Nav = () => {
  return (
    <nav className="flex justify-center items-center w-full bg-zinc-800 py-2 text-zinc-300 sticky top-0 left-0 z-50 bg-opacity-70 backdrop-blur-sm">
      <div className="flex justify-between items-center w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-2">
        <Link href="/" className="text-lg md:text-xl font-medium">
          <p>Priyanshu</p>
        </Link>
        <div className="flex justify-end items-center gap-2">
          <Link href="/findmeon" className="text-xl p-1 rounded-md border-2 border-transparent hover:border-zinc-700 transition-all duration-300 ease-in-out font-medium">
            <PiLinktreeLogo className="inline-block" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
