import React from "react";
import Container from "react-bootstrap/Container";
import ProfilePic from "../Resources/ProfilePic.jpg";
import "../CSS/LandingPage.css";

function InfoArea() {
  return (
    <>
      <div id="info" className="InfoArea">
        <Container>
          <h1 className="SectionHeader">About Me</h1>
          <div className="InfoDiv">
            <div>
              <img src={ProfilePic} alt="Jared Image" className="AboutImage" />
            </div>
            <div className="AboutText">
              <h4>
                I am a software developer based in Irvine, CA. I graduated with
                a computer science degree from California State University,
                Fullerton. I am currently looking for web development positions
                working with React and NodeJS.
              </h4>
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
    </>
  );
}

export default InfoArea;
