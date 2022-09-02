import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import SimpleImageSlider from "react-simple-image-slider";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
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
          <h1 className="ProjectsHeader">Projects</h1>
          <div className="ProjectCard">
            <div className="ProjectTitles">
              <h2
                onClick={() => ChangeActiveProject("Spoofy")}
                className={
                  activeProject === "Spoofy" ? "Selected" : "NotSelected"
                }
              >
                Spoofy
              </h2>
              <h2
                onClick={() => ChangeActiveProject("NHL")}
                className={activeProject === "NHL" ? "Selected" : "NotSelected"}
              >
                NHLHistory
              </h2>
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
    </>
  );
}

export default ProjectsArea;
