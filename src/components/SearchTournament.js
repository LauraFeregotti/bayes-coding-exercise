import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";
import TournamentFound from "./TournamentFound";

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
      <Row className="containertournamentfound">
        {props.tournaments.map(tournament => {
          return (
            <TournamentFound tournament={tournament} key={tournament.id} />
          );
        })}
      </Row>
    </Col>
  );
}

export default SearchTournament;
