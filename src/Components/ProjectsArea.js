import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import SimpleImageSlider from "react-simple-image-slider";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import Spoofy1 from "../Resources/Spoofy1.png";
import Spoofy2 from "../Resources/Spoofy2.png";
import Spoofy3 from "../Resources/Spoofy3.png";
import NHL1 from "../Resources/NHL1.png";
import NHL2 from "../Resources/NHL2.png";
import NHL3 from "../Resources/NHL3.png";
import "../CSS/LandingPage.css";

function ProjectsArea() {
  const [index, setIndex] = useState(1);
  const [activeProject, setActiveProject] = useState("Spoofy");

  const Next = () => {
    if (index !== 3) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
    console.log(index);
  };

  const Prev = () => {
    if (index !== 1) {
      setIndex(index - 1);
    } else {
      setIndex(3);
    }
    console.log(index);
  };

  const ChangeActiveProject = (project) => {
    setActiveProject(project);
    setIndex(1);
  };

  return (
    <>
      <div className="ProjectsArea">
        <Container>
          <h1 className="SectionHeader">Projects</h1>
          <div className="ProjectCard">
            <div className="ProjectTitles">
              <div className="ProjectLink">
                <h2
                  onClick={() => ChangeActiveProject("Spoofy")}
                  className={
                    activeProject === "Spoofy" ? "Selected" : "NotSelected"
                  }
                >
                  Spoofy
                </h2>
                <TbExternalLink className="ExternalLink"></TbExternalLink>
              </div>
              <div className="ProjectLink">
                <h2
                  onClick={() => ChangeActiveProject("NHL")}
                  className={
                    activeProject === "NHL" ? "Selected" : "NotSelected"
                  }
                >
                  NHLHistory
                </h2>
                <TbExternalLink className="ExternalLink"></TbExternalLink>
              </div>
            </div>
            <div
              className={
                activeProject === "Spoofy" ? "CarouselDiv" : "Inactive"
              }
            >
              <div className="Slider">
                <GrFormPrevious
                  size={36}
                  onClick={() => Prev()}
                  className="NaviArrow"
                ></GrFormPrevious>
                <img
                  src={Spoofy1}
                  className={index == 1 ? "Visible" : "Invisible"}
                />
                <img
                  src={Spoofy2}
                  className={index == 2 ? "Visible" : "Invisible"}
                />
                <img
                  src={Spoofy3}
                  className={index == 3 ? "Visible" : "Invisible"}
                />
                <GrFormNext
                  size={36}
                  onClick={() => Next()}
                  className="NaviArrow"
                ></GrFormNext>
              </div>
              <div className="Dots">
                <BsDot size={index == 1 ? 40 : 20}></BsDot>
                <BsDot size={index == 2 ? 40 : 20}></BsDot>
                <BsDot size={index == 3 ? 40 : 20}></BsDot>
              </div>
            </div>
            <div
              className={activeProject === "NHL" ? "CarouselDiv" : "Inactive"}
            >
              <div className="Slider">
                <GrFormPrevious
                  size={36}
                  onClick={() => Prev()}
                  className="NaviArrow"
                ></GrFormPrevious>
                <img
                  src={NHL1}
                  className={index == 1 ? "Visible" : "Invisible"}
                />
                <img
                  src={NHL2}
                  className={index == 2 ? "Visible" : "Invisible"}
                />
                <img
                  src={NHL3}
                  className={index == 3 ? "Visible" : "Invisible"}
                />
                <GrFormNext
                  size={36}
                  onClick={() => Next()}
                  className="NaviArrow"
                ></GrFormNext>
              </div>
              <div className="Dots">
                <BsDot size={index == 1 ? 40 : 20}></BsDot>
                <BsDot size={index == 2 ? 40 : 20}></BsDot>
                <BsDot size={index == 3 ? 40 : 20}></BsDot>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#002bdc"></stop>
            <stop offset="95%" stop-color="#32ded4"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 136.75,165.57142857142856 273.5,131.14285714285714 388,128 C 502.5,124.85714285714286 594.7499999999999,153 723,158 C 851.2500000000001,163 1015.5,144.85714285714286 1141,148 C 1266.5,151.14285714285714 1353.25,175.57142857142856 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#FFFFFF"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </>
  );
}

export default ProjectsArea;
