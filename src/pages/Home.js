import React from "react";
import vectorArt from "../images/vector-art.png";
import { Github, Linkedin, Envelope, Files } from "react-bootstrap-icons";

export const Home = () => {
  return (
    <div name="home" class="h-screen w-screen flex flex-col justify-center px-8 mx-auto">
      {/* Subject text */}
      <h1 class="text-6xl font-thin text-slate-400">
        Hello, I'm <span class="text-dark-text font-normal border-b-4 border-mint text-8xl">Tianye Chen</span>,
      </h1>
      <h2 class="text-4xl font-thin text-slate-400 mt-3">
        I am a <span class="text-dark-text text-5xl">Software Developer</span>.
      </h2>
      <i class="bi bi-github"></i>

      {/* Social media links */}
      <div class="flex flex-row gap-4 mt-3">
        <a href="https://github.com/tianye-chen" target="_blank" rel="noreferrer">
          <Github size="32" class="text-slate-400 hover:text-dark-text" />
        </a>
        <a href="https://www.linkedin.com/in/tianyechen/" target="_blank" rel="noreferrer">
          <Linkedin size="32" class="text-slate-400 hover:text-dark-text" />
        </a>
      </div>

      {/* Email contact info */}
      <div class="flex flex-row gap-2 mt-3 ml-[0.2rem] w-min">
        <div class="flex flex-row gap-2 group/email">
          <Envelope size="24" class="text-slate-400 group-hover/email:text-dark-text" />
          <p class="text-slate-400 group-hover/email:text-dark-text font-thin">tianyecf@gmail.com</p>
        </div>
        <Files
          size="16"
          class="text-slate-400 hover:text-dark-text mt-[0.3rem] cursor-pointer"
          onClick={() => navigator.clipboard.writeText("tianyecf@gmail.com")}
        />
      </div>

      <div class="absolute right-0 w-[50%] translate-x-[100px]">
        <img src={vectorArt} alt=""/>
      </div>
    </div>
  );
};
