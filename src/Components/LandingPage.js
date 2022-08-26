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
        <div className="InfoArea">
          <Container>
            <h1 className="AboutTitle">About Me</h1>
            <div className="InfoDiv">
              <div className="AboutImage">
                <img src={ProfilePic} alt="Jared Image" />
              </div>
              <div className="AboutText">
                <h3>
                  I am a software developer based in Irvine, CA. I graduated
                  with a computer science degree from California State
                  University, Fullerton. I am currently looking for web
                  development positions working with React and NodeJS.
                </h3>
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
            d="M 0,400 C 0,400 0,200 0,200 C 79.30143540669857,220.10526315789474 158.60287081339715,240.21052631578945 268,222 C 377.39712918660285,203.78947368421055 516.88995215311,147.26315789473682 625,143 C 733.11004784689,138.73684210526318 809.8373205741627,186.73684210526318 890,221 C 970.1626794258373,255.26315789473682 1053.7607655502393,275.7894736842105 1146,270 C 1238.2392344497607,264.2105263157895 1339.1196172248804,232.10526315789474 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#FFFFFF"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
        <div className="SkillsArea">
          <Container>
            <h1 className="SkillsTitle">Skills</h1>
          </Container>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
