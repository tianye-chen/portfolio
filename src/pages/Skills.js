import React, {useState, useEffect} from "react";
import { SkillCard } from "../Components/ItemCard.js";

export const Skills = () => {
  const MAX_INT = 2147483647;
  const fixedScrollSpeed = 1;
  const [skillCardScrollX, setSkillCardScrollX] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(fixedScrollSpeed); // lower is faster

  const scrollStep = 0.5; // lower allows for more smooth scrolling, also controls speed
  const cardWidth = 224;
  const numCards = 9;

  const skillCards = [
    <SkillCard name="Python" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" link="https://www.python.org/"/>,
    <SkillCard name="Java" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" link="https://dev.java/"/>,
    <SkillCard name="C++" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" link="https://cplusplus.com/"/>,
    <SkillCard name="JavaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>,
    <SkillCard name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" link="https://react.dev/"/>,
    <SkillCard name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" link="https://developer.mozilla.org/en-US/docs/Web/HTML"/>,
    <SkillCard name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>,
    <SkillCard name="Tailwind" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" link="https://tailwindcss.com/"/>,
    <SkillCard name="Unity" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" link="https://unity.com/"/>
  ]

  const skillCardsGroup = [skillCards, skillCards, skillCards]

  useEffect(() => {
    const scrollContainer = setInterval(() => {
      setSkillCardScrollX((prev) => {
        const scrollPosition = (prev + scrollStep) % (cardWidth * numCards);

        return scrollPosition;
      });
    }, scrollSpeed);

    return () => clearInterval(scrollContainer);
  }, [scrollSpeed]);

  const handleMouseEnter = () => {
    setScrollSpeed(MAX_INT);
  }

  const handleOnMouseLeave = () => {
    setScrollSpeed(fixedScrollSpeed);
  }

  return (
    <div name="skills" class="h-screen w-screen flex flex-col justify-center px-8 mx-auto">

      {/* Title */}
      <h1 class="text-white text-6xl font-bold border-b-4 border-[#00FFA7] w-min h-min"> Skills </h1>

      {/* Skillset grid */}
      <div class="flex flex-col items-center relative mt-16 w-[calc(100% + 100px)]" style={{transform: `translateX(-${skillCardScrollX}px)`}} onMouseEnter={handleMouseEnter} onMouseLeave={handleOnMouseLeave}>
        <div class="flex gap-6">
          {skillCardsGroup}
        </div>
      </div>
    </div>
  );
};
