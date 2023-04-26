import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import 'animate.css';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Avanish Srivastava</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "50%" }}
              /> */}
               <div class="circular-slider">
    <div class="slider-content">
      <div class="slider-item">
        <img src={pic1} alt=''/>
      </div>
      <div class="slider-item">
        <img src={pic2} alt='' />
      </div>
      <div class="slider-item">
        <img src={pic3} alt='' />
      </div>
      <div class="slider-item">
        <img src={pic4} alt='' />
      </div>
      <div class="slider-item">
        <img src={pic5} alt='' />
      </div>
      <div class="slider-item">
        <img src={pic6} alt='' />
      </div>
    </div>
  </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home