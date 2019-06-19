import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Photo1 from "../images/photo1.jpg";
import Photo2 from "../images/photo2.jpg";
import Photo3 from "../images/photo3.png";

const CarouselBayes = () => {
  return (
    <Carousel className="CarouselBayes">
      <Carousel.Item>
        <img className="d-block w-100" src={Photo1} alt="First slide" />
        <Carousel.Caption>
          <h1>Esport games</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Photo2} alt="Third slide" />
        <Carousel.Caption>
          <h1>Esport games</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Photo3} alt="Third slide" />
        <Carousel.Caption>
          <h1>Esport games</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBayes;
