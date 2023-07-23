import React, {useState, useEffect} from "react";
import { SkillCard } from "../Components/ItemCard.js";

export const Skills = () => {
  const [skillCardScrollX, setSkillCardScrollX] = useState(0);

  const scrollStep = 1;
  const scrollSpeed = 1; // lower is faster
  const cardWidth = 224;
  const numCards = 9;

  const skillCards = [
    <SkillCard name="Python" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />,
    <SkillCard name="Java" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />,
    <SkillCard name="C++" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />,
    <SkillCard name="JavaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />,
    <SkillCard name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
    <SkillCard name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />,
    <SkillCard name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />,
    <SkillCard name="Tailwind" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />,
    <SkillCard name="Unity" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
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
  }, []);

  return (
    <div name="skills" class="h-screen w-screen flex flex-col justify-center px-8 mx-auto">

      {/* Title */}
      <h1 class="text-white text-6xl font-bold border-b-4 border-[#00FFA7] w-min h-min"> Skills </h1>

      {/* Skillset grid */}
      <div class="flex flex-col items-center relative mt-6 w-[calc(100% + 100px)]" style={{transform: `translateX(-${skillCardScrollX}px)`}}>
        <div class="flex gap-6">
          {skillCardsGroup}
        </div>
      </div>
    </div>
  );
};
