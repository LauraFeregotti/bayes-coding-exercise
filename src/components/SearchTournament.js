import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";
import TournamentFound from "./TournamentFound";

function SearchTournament() {
  return (
    <Col lg={{ offset: 1 ,span: 10}} className="filters">
      <Row className="Tournaments">
        <Col lg={2} />
        <Col lg={7}>
          <h1>Tournaments</h1>
        </Col>
        <Col lg={3} />
      </Row>

      <Row>
        <Filter />
      </Row>
      <Row>
        <TournamentFound />
      </Row>
    </Col>
  );
}

export default SearchTournament;
