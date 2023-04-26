import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import drumkit from "../assets/projects/drumkit.png";
import stackoverflow from "../assets/projects/stackoverflow.jpg";
import speech from "../assets/projects/speech.png";
import dicegame from "../assets/projects/dicegame.jpg";
import residencia from "../assets/projects/Residencia.png";
import simon from "../assets/projects/simon.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="Speech To Text Converter"
              description="Built Speech To Text Converter using HTML, CSS, JAVASCRIPT, PYTHON FLASK.Nearly 20% people of the world are suffering from various disabilities, many of them are blind or unable to use their hands effectively with the help of my project they can share information with people by operating computer through voice input Programming.Our project is capable to recognize the speech and convert the input audio in to text, it also enables a user to perform operations such as open calculator, wordpad,notepad,log off computer."
              ghLink="https://github.com/Avanishsri31/Speech-To-Text-Converter.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              isBlog={false}
              title="Stack Overflow Clone"
              description="Stack Overflow Clone is built entirely on the MERN Stack framework.From this website, individuals can log in and signup with authentication. Moreover, they have the option to pose questions, comment on inquiries, vote positively or negatively, share content, and delete questions and answers.Extra features such as Chatbot and One-Time Password Authentication have been included in the Ask Question section."
              ghLink="https://github.com/Avanishsri31/Stack-Overflow-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={residencia}
              isBlog={false}
              title="Residencia (Hotel Room Booking Using Blockchain)"
              description="Residencia Application is a decentralized program that applies Blockchain technology to provide guaranteed secure, private hotel reservations.Residencia Software facilitates a direct channel between businesses and travelers, making it possible to transact in real time without having to pay fees to any middleman.The purpose of Residencia (Hotel Room Booking Using Blockchain) is to do away with the additional expenses charged by a third party and promote direct dialogue between hotel vendors and buyers."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="Drum Kit"
              description=" The user must press the keys from the keyboard to play the sound of a drum. Each key produces different notes of music and you can press them as many times as you want. Whenever you tap the key you can notice it on the computer screen. Talking about the Game environment, the graphics are neatly simple. All the gaming function is set from Javascript whereas HTML and CSS are set for the layouts and other minor functions."
              ghLink="https://github.com/Avanishsri31/Drum-Kit-Project.github.io"
              demoLink="https://avanishsri31.github.io/Drum-Kit-Project.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dicegame}
              isBlog={false}
              title="Dice Game"
              description="We create the Dice Game using  HTML, Css, and JavaScript. In this game, we have 2 Players and they Play 2 Player Dice Game With All Functionality in the Game."
              ghLink="https://github.com/Avanishsri31/Dice-Game.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon Game"
              description="Simon Game is a simple game which goal is for user to repeat the pattern showed by the program. With each round a new step is added to the pattern making, the game much more difficult with every round. Additionally, the program should play a different sound for each field that is activated."
              ghLink="https://github.com/Avanishsri31/Simon-Game.github.io"
              demoLink="https://avanishsri31.github.io/Simon-Game.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects