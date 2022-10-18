import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://user-images.githubusercontent.com/55998197/196135748-88ef836b-5494-4a46-9719-62fa1041b2a1.png"
              }
              isBlog={false}
              title="Netflix Clone"
              description="A look-alike of Netflix built using HTML, CSS and mainly ReactJs. It’s a responsive application and can be worked with
              comfortably on any platform.Bifurcates trailers on the basis of genres like top trending,
              Netflix Originals etc. Movie data was pulled from TMDB."
              ghLink="https://github.com/mansigrover09/Netflix-clone"
              demoLink="https://netflix-clone-b7c1d.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://user-images.githubusercontent.com/55998197/196136685-c5032116-178b-4d03-a156-ad1212868a6c.png"
              }
              isBlog={false}
              title="Get Interesting Fact"
              description="A website which tells you facts on every number you type built
              using HTML, CSS & JS. It tells you fact on any number from 0 to infinite. Made using Number API."
              ghLink="https://github.com/mansigrover09/Get-interesting-fact"
              demoLink="https://get-interesting-fact.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://user-images.githubusercontent.com/55998197/196343371-d9675092-96e6-431f-b482-38fb29fb4f50.png"
              }
              isBlog={false}
              title="Multivendor Website"
              description="AI Tech is a multivendor Ecommerce Website. A Multi-vendor ecommerce website assist to sell products directly to customers and can assist to earn profit by inviting different vendors to sell their products on website. It has been seen that people mostly search for a website where they can get different products under one roof."
              ghLink="https://github.com/mansigrover09/aitech-multivendor-react"
              demoLink="https://aitech-multivendor-react.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
      {/* <h2 style={{ color: "white" }}>
        New projects will be uploaded after constuct week & Full stack blog app
        not completed yet,
        <br />
        will be uploaded next week
      </h2> */}
    </Container>
  );
}

export default Projects;
