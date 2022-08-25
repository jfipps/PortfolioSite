import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import ProfilePic from "../Resources/ProfilePic.jpg";
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
        <div className={color ? "NavBar Scrolled" : "NavBar"}>
          <Container>
            <div className="NavBarItems">
              <div className="Home">
                <h4 id="logo">JF</h4>
              </div>
              <div className="Sections">
                <p>Skills</p>
                <p>Projects</p>
                <p>About</p>
              </div>
            </div>
          </Container>
        </div>
        <div className="LandingArea">
          <Container>
            <div className="HeroTitle">
              <h1>Hello! I'm Jared.</h1>
              <p>I am a software engineer looking to get into</p>
              <p>full stack development.</p>
            </div>
          </Container>
        </div>
        <div className="InfoArea">
          <Container>
            <h1>About Me</h1>
            <div className="InfoDiv">
              <div className="AboutImage">
                <img src={ProfilePic} alt="Jared Image" />
              </div>
              <div className="AboutText">
                <h3>This is a test</h3>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
