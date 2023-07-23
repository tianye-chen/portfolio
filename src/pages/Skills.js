import React from "react";
import { SkillCard } from "../Components/ItemCard.js";

export const Skills = () => {
  return (
    <div name="skills" class="flex-shrink-0 w-screen min-h-screen justify-center px-8">

      {/* Title */}
      <h1 class="text-white text-6xl font-bold border-b-4 border-[#00FFA7] w-min h-min"> Skills </h1>

      {/* Skillset grid */}
      <di class="flex flex-row justify-center">
        <div class="grid grid-rows-3 grid-cols-3 w-[65%] mt-6 gap-6">
          <SkillCard name="Python" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <SkillCard name="Java" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          <SkillCard name="C++" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          <SkillCard name="JavaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <SkillCard name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <SkillCard name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <SkillCard name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <SkillCard name="Tailwind" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          <SkillCard name="Unity" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
        </div>
      </di>
    </div>
  );
};
