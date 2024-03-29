import React from "react";
import bcLogo from "../images/BC-Logo-Maroon.png";
import bcCampus from "../images/brooklyn-college-campus.jpeg";

export const Education = () => {
  return (
    <div name="education" class="h-screen w-screen flex flex-col justify-center px-8 mx-auto">
      {/* Title */}
      <h1 class="text-dark-text text-6xl font-bold border-b-4 border-mint w-min"> Education </h1>

      {/* Info grid */}
      <div class="grid grid-rows-2 grid-cols-2 h-[50%] mt-12 text-dark-text">
        <div class="flex flex-col items-end mr-8">
          <img src={bcLogo} alt="Brooklyn College logo" class="w-[65%]" />
        </div>
        <div class="flex flex-row items-center border-l-8 border-[#7b2240] pl-4 overflow-hidden">
          <img src={bcCampus} alt="The Brooklyn College campus"class="w-[80%]" />
        </div>
        <div class="text-right text-lg pr-4 mt-5">
          {" "}
          Multimedia Programming, Data Structures, Discrete Structures, Game Design and Development, Software Engineering, Linear Algebra, Large Scale
          Web Development
        </div>
        <div class="border-l-8 border-[#fad129] pl-4 pt-4 text-[#fad129] text-4xl font-thin"> 
          <h1>Computer Science B.S</h1>
          <h2 class="text-2xl">Relevant Courses </h2>
        </div>
      </div>
    </div>
  );
};
