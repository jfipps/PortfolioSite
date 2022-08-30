import React from "react";
import Container from "react-bootstrap/Container";
import JS from "../Resources/JS.png";
import ReactLogo from "../Resources/React.png";
import HTML from "../Resources/HTML.png";
import CSS from "../Resources/CSS.png";
import MySQL from "../Resources/MySQL.png";
import Powershell from "../Resources/Powershell.png";
import "../CSS/LandingPage.css";

function SkillsArea() {
  return (
    <>
      <div className="SkillsArea">
        <Container>
          <h1 className="SkillsTitle">Skills</h1>
          <div className="SkillsContainer">
            <div className="Skill">
              <img src={JS} alt="Javascript" />
              <h3>Javascript</h3>
            </div>
            <div className="Skill">
              <img src={ReactLogo} alt="React" />
              <h3>React</h3>
            </div>
            <div className="Skill">
              <img src={HTML} alt="HTML" />
              <h3>HTML</h3>
            </div>
            <div className="Skill">
              <img src={CSS} alt="CSS" />
              <h3>CSS</h3>
            </div>
            <div className="Skill">
              <img src={MySQL} alt="MySQL" />
              <h3>MySQL</h3>
            </div>
            <div className="Skill">
              <img src={Powershell} alt="Powershell" />
              <h3>Powershell</h3>
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
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 110.50717703349281,155.60765550239233 221.01435406698562,111.2153110047847 307,125 C 392.9856459330144,138.7846889952153 454.4497607655502,210.74641148325358 552,232 C 649.5502392344498,253.25358851674642 783.1866028708135,223.79904306220098 898,199 C 1012.8133971291865,174.20095693779902 1108.803827751196,154.05741626794259 1196,155 C 1283.196172248804,155.94258373205741 1361.598086124402,177.9712918660287 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#FFFFFF"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
    </>
  );
}

export default SkillsArea;
