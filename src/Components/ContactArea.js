import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../CSS/LandingPage.css";

function ContactArea() {
  return (
    <>
      <div id="contact" className="ContactArea">
        <Container>
          <h1 className="SectionHeader">Contact</h1>
          <div className="Contacts">
            <div className="ContactCard">
              <MdEmail size={24}></MdEmail>
              <p>jfipps1995@gmail.com</p>
            </div>
            <div className="ContactCard">
              <BsTelephoneFill size={24}></BsTelephoneFill>
              <p>714.392.8339</p>
            </div>
            <div className="ContactCard">
              <BsLinkedin size={24}></BsLinkedin>
              <p>https://www.linkedin.com/in/jared-fipps</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ContactArea;
