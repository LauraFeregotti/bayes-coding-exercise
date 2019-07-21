import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterBySeries from "./FilterBySeries";
import TournamentFound from "./TournamentFound";
import Data from "../data/tournaments.json";
import FilterByStartDate from "../components/FilterByStartDate";
import FilterByEndDate from "../components/FilterByEndDate";
import moment from "moment";
class SearchTournament extends Component {
  state = {
    data: []
  };
  /* this sets the default status of state (all the tournaments)*/
  componentDidMount = () => {
    let Dat = Data.map((element, index) => {
      return element;
    });
    this.setState({
      data: Dat
    });
    this.formatData();
  };
  formatData = () =>{
    let datastart = this.state.data.map(
      t =>
        (t.date_start = moment(t.date_start, "YYYY-MM-DDTHH:mm:ssZ").format(
          "YYYY-MM-DD"
        ))
    );
    let dataend = this.state.data.map(
      t =>
        (t.date_end = moment(t.date_end, "YYYY-MM-DDTHH:mm:ssZ").format(
          "YYYY-MM-DD"
        ))
    );
  }
  /* this function grabs the data from its child "Filter", and changes the state depending on what the user has clicked*/
  upDate = gettournaments => {
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
        <Row className="filterscontainer">
          <Col lg={2}>
            {/* Passes the function "upDate" as a prop to its child "Filter" (communication between parent and child)*/}
            <FilterBySeries upDate={this.upDate} />
          </Col>
          <Col lg={5}>
            <FilterByStartDate upDate={this.upDate} />
          </Col>
          <Col lg={5}>
            <FilterByEndDate upDate={this.upDate} />
          </Col>
        </Row>
        <Row>
          <Row className="containertournamentfound">
            {/*Renders the current state */}
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
