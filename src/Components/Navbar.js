import React, {useState} from "react";
import { NavItem } from "./NavItem.js";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav class="fixed inline-flex items-center justify-between w-full bg-[#02271A]/75 select-none z-10 backdrop-blur-md">
      <h1 class="flex w-full font-thin text-3xl ml-8 text-white cursor-default">
        {" "}{"<tianyechen />"}{" "}
      </h1>
      <ul class="md:flex items-center justify-end w-min hidden">
        <Link to="home" smooth="true" duration="500" onClick={() => setActiveItem("Home")} offset={-window.innerWidth}>
          <NavItem text="Home" activeItem={activeItem}/>
        </Link>
        <Link to="about" smooth="true" duration="500" onClick={() => setActiveItem("About")} offset={-window.innerWidth}>
          <NavItem text="About" activeItem={activeItem}/>
        </Link>
        <Link to="education" smooth="true" duration="500" onClick={() => setActiveItem("Education")} offset={-window.innerWidth}>
          <NavItem text="Education" activeItem={activeItem}/>
        </Link>
        <Link to="skills" smooth="true" duration="500" onClick={() => setActiveItem("Skills")} offset={-window.innerWidth}>
          <NavItem text="Skills" activeItem={activeItem}/>
        </Link>
        <Link to="projects" smooth="true" duration="500" onClick={() => setActiveItem("Projects")} offset={-window.innerWidth}>
          <NavItem text="Projects" activeItem={activeItem}/>
        </Link>
      </ul>
    </nav>
  );
};
