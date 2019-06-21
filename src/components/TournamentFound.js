import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "../data/tournaments.json";
import Videogame from "../images/fortnite.jpg";

const TournamentFound = props => {
  return (
    <Container fluid>
      <Row lg={{ span: 10, offset: 1 }} className="IndividualTournament">
        <Col lg={6}>
          <img src={Videogame} alt="" width="500" height="281" />
        </Col>
        <Col lg={{ span: 4, offset: 1 }} className="tournamentDescription">
          <Row>{props.tournament.name}</Row>
          <Row>{props.tournament.series.name}</Row>
          <Row>{props.tournament.date_start}</Row>
          <Row>{props.tournament.date_end}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TournamentFound;
