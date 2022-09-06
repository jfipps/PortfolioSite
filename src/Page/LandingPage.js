import React, { useState } from "react";
import Navbar from "../Components/Navbar.js";
import LandingArea from "../Components/LandingArea.js";
import InfoArea from "../Components/InfoArea.js";
import SkillsArea from "../Components/SkillsArea.js";
import ProjectsArea from "../Components/ProjectsArea.js";
import ContactArea from "../Components/ContactArea.js";
import "../CSS/LandingPage.css";

function LandingPage() {
  return (
    <>
      <section className="LandingPage">
        <Navbar></Navbar>
        <LandingArea></LandingArea>
        <InfoArea></InfoArea>
        <SkillsArea></SkillsArea>
        <ProjectsArea></ProjectsArea>
        <ContactArea></ContactArea>
      </section>
    </>
  );
}

export default LandingPage;
