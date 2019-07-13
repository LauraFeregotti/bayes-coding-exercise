import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import TournamentFound from "./TournamentFound";
import Tournaments from "./Tournaments";
import Data from "../data/tournaments.json";
import Calendardates from "../components/calendar";

class Filter extends Component {
  state = {
    tournaments: []
  };

  /*Grabs the json data */
  componentDidMount = () => {
    let Dat = Data.map((element, index) => {
      return element;
    });
    this.setState({
      tournaments: Dat
    });
  };

  getTournamentBySerieId = id => {
    return this.state.tournaments.find(t => t.series.id === id);
  };
  getSeries = () => {
    const ids = [...new Set(this.state.tournaments.map(t => t.series.id))];
    return ids.map(id => {
      return (
        <Dropdown.Item
          href="#/action-1"
          key={this.getTournamentBySerieId(id).series.id}
          onClick={() =>
            this.getSeriesId(this.getTournamentBySerieId(id).series.id)
          }
        >
          {this.getTournamentBySerieId(id).series.name}
        </Dropdown.Item>
      );
    });
  };

  getSeriesId = id => {
    let getSpecificserie = this.state.tournaments.filter(
      item => item.series.id === id
    );
    console.log(getSpecificserie);
    this.dataTournament(getSpecificserie);
  };

  /*const result = props.tournaments.filter(item => item.series.id === id);*/

  dataTournament = data => {
    this.props.upDate(data);
  };

  render() {
    return (
      <Container fluid>
        <Row className="filterscontainer">
       
          <Col lg={2}>
            <Row>
              <h5>Series</h5>
            </Row>
            <Row>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select serie
                </Dropdown.Toggle>
                <Dropdown.Menu>{this.getSeries()}</Dropdown.Menu>
              </Dropdown>
            </Row>
          </Col>
          <Col lg={2}>
            <Row>
              <h5>Start Date</h5>
              
            </Row>
            <Row>
              <Button type="submit">selected start date</Button>
            </Row>
          </Col>
          <Col lg={2}>
            <Row>
              <h5>End Date</h5>
            </Row>
            <Row>
              <Button type="submit">selected end date</Button>
            </Row>
          </Col>
        </Row>
        {/* <Row className="containertournamentfound">
          {this.state.tournaments.map(tournament => {
            return (
              <TournamentFound tournament={tournament} key={tournament.id} />
            );
          })}
        </Row>*/}
      </Container>
    );
  }
}

export default Filter;
