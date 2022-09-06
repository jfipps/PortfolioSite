import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import "../CSS/LandingPage.css";

function Navbar() {
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
      <div className={color ? "NavBar Scrolled" : "NavBar"}>
        <Container>
          <div className="NavBarItems">
            <div className="Home">
              {/* <h4 id="logo">JF</h4> */}
              <Link to="home" spy={true} smooth={true} offset={-100}>
                <h4 id="logo">JF</h4>
              </Link>
            </div>
            <div className="Sections">
              <p className="ScrollLink">
                <Link to="info" spy={true} smooth={true} offset={-100}>
                  About
                </Link>
              </p>
              <p className="ScrollLink">
                <Link to="skills" spy={true} smooth={true} offset={-100}>
                  Skills
                </Link>
              </p>
              <p className="ScrollLink">
                <Link to="projects" spy={true} smooth={true} offset={-100}>
                  Projects
                </Link>
              </p>
              <p className="ScrollLink">
                <Link to="contact" spy={true} smooth={true} offset={-100}>
                  Contact
                </Link>
              </p>
              <p>
                <a
                  href={require("../Resources/Jared_Fipps_Resume_2022.docx")}
                  download="JFippsResume"
                  className="DownloadLink"
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
