import React from "react";

export const SkillCard = ({ name, image, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <div class="relative flex flex-col justify-center items-center w-[200px] h-[200px] rounded-xl border-mint/75 cursor-pointer
    group/item border-b-0 hover:border-b-[6px]
  hover:bg-dark-primary/75 hover:translate-y-[-0.6rem] duration-300 ease-in-out" onClick={handleClick}>
      <img src={image} alt={name} class="w-1/2 h-1/2" />
      {/* <div class="absolute bg-white/75 rounded-xl w-full h-full hidden hover:visible"></div> */}
      <h1 class="text-dark-text text-2xl font-bold mt-2"> {name} </h1>
      <h2 class="text-dark-text/75 text-lg opacity-0 group-hover/item:opacity-100 transition-all duration-200 ease-in-out">Learn More</h2>
    </div>
  );
};
