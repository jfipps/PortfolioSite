import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "../CSS/LandingPage.css";

function ContactArea() {
  return (
    <>
      <div className="ContactArea">
        <Container>
          <h1>Contact</h1>
          <div className="Contacts">
            <div className="ContactCard">
              <h3>Email</h3>
              <h4>jfipps1995@gmail.com</h4>
            </div>
            <div className="ContactCard">
              <h3>Phone</h3>
              <h4>714.392.8339</h4>
            </div>
            <div className="ContactCard">
              <h3>LinkedIn</h3>
              <h4>https://www.linkedin.com/in/jared-fipps</h4>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ContactArea;
