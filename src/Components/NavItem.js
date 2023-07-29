import React from "react";

export const NavItem = ({text, activeItem}) => {
  return (
    <div class="group/navitem cursor-pointer hover:bg-white/[25%] duration-300 w-full ease-in-out p-4 overflow-hidden">
      <li class="text-dark-text text-xl font-thin text-center">{text}</li>
      <div class="flex flex-row justify-around">
        <div class={`bg-mint max-h-[1px] ${activeItem === text ? 'w-full' : 'w-0'} group-hover/navitem:w-full duration-300 ease-in-out`}><br /></div>
      </div>
    </div>
  );
}