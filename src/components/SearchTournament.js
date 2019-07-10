import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";

function SearchTournament(props) {
  return (
    <Col lg={{ offset: 1, span: 10 }} className="filters">
      <Row className="Tournaments">
        <Col lg={2} />
        <Col lg={8}>
          <h1>Tournaments</h1>
        </Col>
        <Col lg={2} />
      </Row>
      <Row>
        <Filter tournaments={props.tournaments} />
      </Row>
      
    </Col>
  );
}

export default SearchTournament;
