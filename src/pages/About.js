import React from "react";
import manhattanBridge from "../images/manhattan-bridge.jpeg"

export const About = () => {
  return (
    <div name="about" class="flex-shrink-0 w-screen min-h-screen justify-center">
      <h1 class="text-white text-6xl font-bold border-b-4 border-[#00FFA7] w-min"> About </h1>
      <div class="grid grid-rows-1 grid-cols-3 text-white mt-6 gap-4">
        <div class="w-full h-min col-span-2">
          <p class="text-white text-xl font-thin"> I'm a software developer based in Brooklyn, New York.</p>
          <p class="text-white text-xl font-thin mt-2"> Currently studying Computer Science at Brooklyn College as a first-generation college student in my family. </p>
          <p class="text-white text-xl font-thin mt-2"> Passionate about all things tech, I strive to provide the best user experience.</p>
          <p class="text-white text-xl font-thin mt-2"> With the tech industry constantly evolving, I am excited to see where the industry will take me.</p>
        </div>
        <div class="translate-x-[-10%] translate-y-[-20%] border-l-4 border-[#00FFA7] pl-2">
          <img src={manhattanBridge} alt="The Manhattan Bridge viewed from Brooklyn"/>
        </div>
      </div>
    </div>
  );
};
