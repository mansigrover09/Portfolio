import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mansi Grover </span>
            {/* from <span className="purple"> Maharashtra, India.</span> */}
            <br />I am a final year undergrad student pursuing B.tech from
            Jaypee University Of Engineering and technology.
            <br />
            <br />
            My interests are in Front End Engineering, and I love to create
            beautiful and performant products with delightful user experiences.
            <br />
            Apart from academics, I am an avid reader and love binge watching
            shows and a full time health freak in my free time.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Mens Physique Athelate
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harshwardhan</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
