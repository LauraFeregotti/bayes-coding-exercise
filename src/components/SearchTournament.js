import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";
import TournamentFound from "./TournamentFound";

function SearchTournament() {
  return (
    <Col lg={7} className="filters">
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
