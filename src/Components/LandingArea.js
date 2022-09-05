import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "../CSS/LandingPage.css";

function LandingArea() {
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
              <h4 id="logo">JF</h4>
            </div>
            <div className="Sections">
              <p>About</p>
              <p>Skills</p>
              <p>Projects</p>
              <p>Contact</p>
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
      <div className="LandingArea">
        <Container>
          <div className="HeroTitle">
            <h1>Hello! I'm Jared.</h1>
            <p>I am a software engineer and aspiring</p>
            <p>full stack developer.</p>
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
          d="M 0,400 C 0,400 0,200 0,200 C 60.495362418412924,211.18722088629337 120.99072483682585,222.37444177258675 201,204 C 281.00927516317415,185.62555822741325 380.5324630711095,137.68945379594643 446,149 C 511.4675369288905,160.31054620405357 542.8794228787359,230.86774304362757 597,257 C 651.1205771212641,283.13225695637243 727.949845413947,264.8395740295431 814,233 C 900.050154586053,201.16042597045688 995.321195465476,155.77396083819994 1062,136 C 1128.678804534524,116.22603916180006 1166.7653727241498,122.06458261765715 1225,137 C 1283.2346272758502,151.93541738234285 1361.6173136379252,175.96770869117142 1440,200 C 1440,200 1440,400 1440,400 Z"
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

export default LandingArea;
