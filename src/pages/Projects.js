import React from "react";
import { ProjectItemCard } from "../Components/ProjectItemCard";
import worldreaver from "../images/worldreaver.png";
import muschart from "../images/muschart.png";

export const Projects = () => {
  return (
    <div name="projects" class="h-screen w-screen flex flex-col justify-center px-8 mx-auto">
      {/* Title */}

      <h1 class="text-white text-6xl font-bold border-b-4 border-[#00FFA7] w-min"> Projects </h1>

      {/* Project cards */}
      <div class="grid grid-rows-1 grid-cols-2 text-white mt-6 gap-4">

        {/* Worldreaver card */}
        <div class="border-b-4 border-[#00FFA7] rounded-sm">
          <ProjectItemCard
            title="Worldreaver"
            repo="https://github.com/tianye-chen/worldreaver-unity-game-project"
            demo="https://tianyechen.itch.io/worldreaver"
            image={worldreaver}
            description={
              "Worldeaver is a 2d bullet-hell game made in Unity. " +
              "The game features normal enemies, 2 bosses with unique movesets " +
              "and a wide variation of settings for players to customize the difficulty to their liking."
            }
          />
        </div>
        
        <div class="border-t-4 border-[#00FFA7] ">
          <ProjectItemCard
            title="MusChart"
            repo="https://github.com/tianye-chen/music-app"
            demo="https://muschart.fly.dev/"
            image={muschart}
            description={
              "MusChart is a music ratings a review website " +
              "with over 80 million songs available to rate and review. " +
              "The website is built with React and TailwindCSS, and uses the Spotify public API."
            }
          />
        </div>
      </div>
    </div>
  );
};
