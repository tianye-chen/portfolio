import React from "react";
import manhattanBridge from "../images/manhattan-bridge.jpeg"

export const About = () => {
  return (
    <div name="about" class="h-screen w-screen flex flex-col justify-center px-8 mx-auto">
      <h1 class="text-dark-text text-6xl font-bold border-b-4 border-mint w-min"> About </h1>
      <div class="grid grid-rows-1 grid-cols-3 text-dark-text mt-6 gap-4">
        <div class="w-full col-span-2">
          <p class="text-dark-text text-xl font-thin mt-2"> I'm a software developer based in Brooklyn, New York.</p>
          <p class="text-dark-text text-xl font-thin mt-2"> Currently studying Computer Science at Brooklyn College as a first-generation college student in my family. </p>
          <p class="text-dark-text text-xl font-thin mt-2"> Passionate about all things tech, I strive to provide the best user experience.</p>
          <p class="text-dark-text text-xl font-thin mt-2"> With the tech industry constantly evolving, I am excited to see where the industry will take me.</p>
        </div>
        <div class="absolute right-0 w-[40%] translate-x-20 translate-y-[-20%] border-l-4 border-mint pl-2">
          <img src={manhattanBridge} alt="The Manhattan Bridge viewed from Brooklyn"/>
        </div>
      </div>
    </div>
  );
};
