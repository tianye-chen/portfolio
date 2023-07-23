import React from "react";

export const SkillCard = ({ name, image }) => {
  return (
    <div class="relative flex flex-col justify-center items-center w-[200px] h-[200px] border-2 border-[#00FFA7]/75 rounded-xl hover:bg-[#00FFA7]/75 duration-300 ease-in-out">
      <img src={image} alt={name} class="w-1/2 h-1/2" />
      {/* <div class="absolute bg-white/75 rounded-xl w-full h-full hidden hover:visible"></div> */}
      <h1 class="text-white text-2xl font-bold mt-2"> {name} </h1>
    </div>
  );
};
