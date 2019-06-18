import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "../data/tournaments.json";
import Videogame from "../images/fortnite.jpg";

const TournamentFound = () => {
  return (
    <Container fluid className="containertournamentfound">
      {Data.map((element, index) => {
        return (
          <Col
            /*lg= {{ span: 10, offset: 1 }}*/ className="IndividualTournament">
            <Col lg={6}>
              <img src={Videogame} alt="" width="500" height="281" />
            </Col>
            <Col lg={6}>
              <Row key={element.id}>
                <h5>{element.name}</h5>
              </Row>
              <Row key={element.id}>
                <h5>{element.series.name}</h5>
              </Row>
              <Row key={element.id}>
                <h5>{element.series.date_start}</h5>
              </Row>
              <Row key={element.id}>
                <h5>{element.series.date_end}</h5>
              </Row>
            </Col>
          </Col>
        );
      })}
    </Container>
  );
};

export default TournamentFound;
