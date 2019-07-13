import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";
import TournamentFound from "./TournamentFound";
import Data from "../data/tournaments.json";

class SearchTournament extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    let Dat = Data.map((element, index) => {
      return element;
    });
    this.setState({
      data: Dat
    });
  };

  upDate = gettournaments => {
    console.log(gettournaments);
    this.setState({
      data: gettournaments
    });
  };

  render() {
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
          <Filter upDate={this.upDate} />
        </Row>
        <Row>
          <Row className="containertournamentfound">
            {this.state.data.map(tournament => {
              return (
                <TournamentFound tournament={tournament} key={tournament.id} />
              );
            })}
          </Row>
        </Row>
      </Col>
    );
  }
}

export default SearchTournament;
