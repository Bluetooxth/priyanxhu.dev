"use client";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btn, setBtn] = useState("Send");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtn("Sending...");
    try {
      const response = await axios.post("/api/sendmail", {
        name,
        email,
        message,
      });
      if (response.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setBtn("Sent");
      } else {
        setBtn("Error");
      }
    } catch (error) {
      setBtn("Error");
    }
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">
          Drop me a message
        </h2>
        <form className="flex flex-col justify-start items-start gap-2 w-full">
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label
              className="text-lg md:text-xl font-medium text-zinc-200"
              htmlFor="name"
              id="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full py-1 md:py-2 px-3 md:px-5 bg-zinc-900 focus:bg-zinc-900 focus:border-zinc-200 text-zinc-300 border-2 border-zinc-800 rounded-lg transition-all duration-300 ease-in-out outline-none"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label
              className="text-lg md:text-xl font-medium text-zinc-200"
              htmlFor="email"
              id="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@xyz.com"
              className="w-full py-1 md:py-2 px-3 md:px-5 bg-zinc-900 focus:bg-zinc-900 focus:border-zinc-200 text-zinc-300 border-2 border-zinc-800 rounded-lg transition-all duration-300 ease-in-out outline-none"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label
              className="text-lg md:text-xl font-medium text-zinc-200"
              htmlFor="message"
              id="message"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              id="message"
              placeholder="Your Message"
              className="w-full py-1 md:py-2 px-3 md:px-5 bg-zinc-900 focus:bg-zinc-900 focus:border-zinc-200 text-zinc-300 border-2 border-zinc-800 rounded-lg transition-all duration-300 ease-in-out outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="py-1 px-3 md:px-5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-lg font-medium border-2 border-zinc-300 rounded-lg transition-all duration-300 ease-in-out flex items-center gap-3"
          >
            {`${btn}`} <AiOutlineSend className="inline-block" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
