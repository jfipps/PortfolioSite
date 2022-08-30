import React, { useState } from "react";
import LandingArea from "../Components/LandingArea.js";
import InfoArea from "../Components/InfoArea.js";
import SkillsArea from "../Components/SkillsArea.js";
import ProjectsArea from "../Components/ProjectsArea.js";
import "../CSS/LandingPage.css";

function LandingPage() {
  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const ChangeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", ChangeColor);

  return (
    <>
      <section className="LandingPage">
        <LandingArea></LandingArea>
        <InfoArea></InfoArea>
        <SkillsArea></SkillsArea>
        <ProjectsArea></ProjectsArea>
      </section>
    </>
  );
}

export default LandingPage;
