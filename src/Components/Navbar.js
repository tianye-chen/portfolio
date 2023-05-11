import React from "react";
import { NavItem } from "./NavItem.js";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav class="fixed inline-flex items-center justify-between w-full bg-[#02271A]/75 select-none z-10 backdrop-blur-md">
      <h1 class="flex w-full font-thin text-3xl ml-8 text-white cursor-default"> {'<tianyechen />'} </h1>
      <ul class="md:flex items-center justify-end w-min hidden">
        <Link to="home" smooth="true" duration="500">
          <NavItem text="Home" />
        </Link>
        <Link to="about" smooth="true" duration="500">
          <NavItem text="About" />
        </Link>
        <Link to="education" smooth="true" duration="500">
          <NavItem text="Education" />
        </Link>
        <Link to="skills" smooth="true" duration="500">
          <NavItem text="Skills" />
        </Link>
        <Link to="projects" smooth="true" duration="500">
          <NavItem text="Projects" />
        </Link>
      </ul>
    </nav>
  );
};
