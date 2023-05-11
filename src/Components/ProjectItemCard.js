import React from "react";
import { Github, BoxArrowInUpRight } from "react-bootstrap-icons";

export const ProjectItemCard = ({ title, repo, demo, image, description }) => {
  return (
    <div class="relative flex flex-col items-center w-full max-h-[45vh] overflow-hidden group/project">
      {/* Background image for the project */}
      <img src={image} alt={title} />

      {/* Overlay when hovered*/}
      <div class="absolute bg-white/75 backdrop-blur-md w-full h-full opacity-0 group-hover/project:opacity-100 duration-300 ease-in-out transition-all">
        <div class="flex flex-col justify-center items-center w-full h-full">
          <h1 class="text-black text-5xl font-thin"> {title} </h1>

          {/* Icon with links */}
          <div class="flex flex-row justify-around mt-4 text-black font-thin text-lg">
            <div class="flex flex-row justify-around group/github">

              {/* Animated text */}
              <div class="w-full relative">
                <p class="opacity-0">Github</p> {/* Placeholder to take space */}
                <p class="absolute top-0 right-0 my-1 w-0 overflow-hidden group-hover/github:w-full duration-300 ease-in-out">Github</p>
              </div>
              
              {/* Icon */}
              <a href={repo} target="_blank" rel="noreferrer">
                <Github size={32} class="text-black mx-2 cursor-pointer" />
              </a>
            </div>

            <div class="flex flex-row justify-between group/demo">

              {/* Icon */}
              <a href={demo} target="_blank" rel="noreferrer">
                <BoxArrowInUpRight size={32} class="text-black mx-2 cursor-pointer" />
              </a>

              {/* Animated text */}
              <div class="w-full relative">
                <p class="opacity-0">Demo</p> {/* Placeholder to take space */}
                <p class="absolute top-0 left-0 my-1 w-0 overflow-hidden group-hover/demo:w-full duration-300 ease-in-out">Demo</p>
              </div>
            </div>
          </div>

          {/* Description of the project */}
          <p class="text-black mt-4 mx-8 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};
