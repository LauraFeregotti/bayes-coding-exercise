import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TournamentFound() {
  return (
    <Container fluid className="containertournamentfound">
      <Row className ="IndividualTournament">
        <Col lg={6}>
          <img src="" alt="" />
        </Col>
        <Col lg={6}>
          <Row>
            <h5>Tournament: Fortnite World Cup</h5>
          </Row>
          <Row>
            <h5>Series: Warriors Series 2019</h5>
          </Row>
          <Row>
            <h5>Date start: 2019-01-01</h5>
          </Row>
          <Row>
            <h5>Date End: 2019-04-30</h5>
          </Row>
        </Col>
      </Row>
      <Row className ="IndividualTournament">
        <Col lg={6}>
          <img src="" alt="" />
        </Col>
        <Col lg={6}>
          <Row>
            <h5>Tournament: King Pro League</h5>
          </Row>
          <Row>
            <h5>Series: Warriors Series 2019</h5>
          </Row>
          <Row>
            <h5>Date start: 2019-01-01</h5>
          </Row>
          <Row>
            <h5>Date End: 2019-04-30</h5>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TournamentFound;
