import React, { Component } from "react";
import "./App.css";
import Tournaments from "./components/Tournaments";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Photo1 from "./images/photo1.jpg";
import Photo2 from "./images/photo2.jpg";
import Photo3 from "./images/photo3.jpeg";

class App extends Component {
  render() {
    return (
      <Container fluid className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./images/bayes-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"Bayes"}
          </Navbar.Brand>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Photo1} alt="First slide" />
            <Carousel.Caption>
              <h1>Esport games</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Photo2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Photo3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Tournaments />
      </Container>
    );
  }
}

export default App;
