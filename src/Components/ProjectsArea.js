import React from "react";
import Container from "react-bootstrap/Container";
import SimpleImageSlider from "react-simple-image-slider";
import Spoofy1 from "../Resources/Spoofy1.png";
import Spoofy2 from "../Resources/Spoofy2.png";
import Spoofy3 from "../Resources/Spoofy3.png";
import "../CSS/LandingPage.css";

function ProjectsArea() {
  const images = [{ url: Spoofy1 }, { url: Spoofy2 }, { url: Spoofy3 }];
  return (
    <>
      <div className="ProjectsArea">
        <Container>
          <h1>Projects</h1>
          <div className="ProjectCard">
            <h2>Spoofy</h2>
            <div className="CarouselDiv">
              <SimpleImageSlider
                width={1500}
                height={1000}
                images={images}
                showBullets={true}
                showNavs={true}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProjectsArea;
