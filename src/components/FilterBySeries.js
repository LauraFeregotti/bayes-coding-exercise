import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import TournamentFound from "./TournamentFound";
import Tournaments from "./Tournaments";
import Data from "../data/tournaments.json";

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
  /* Finds just the tournaments that match with the series id */
  getTournamentBySerieId = id => {
    return this.state.tournaments.find(t => t.series.id === id);
  };
  getSeries = () => {
    /* Creates a new array with all the series id and "new Set" avoids duplicated ids*/
    const ids = [...new Set(this.state.tournaments.map(t => t.series.id))];
    return ids.map(id => {
      return (
        <Dropdown.Item
          href="#/action-1"
          /*Sets the key value of the dropdown list by getting the tournaments series id */
          key={this.getTournamentBySerieId(id).series.id}
          onClick={() =>
            /*Whenever a serie name gets clicked fires the event "getSeriesId" and passesthe series id who was cliked as a parameter */
            this.getSeriesId(this.getTournamentBySerieId(id).series.id)
          }
        >
          {this.getTournamentBySerieId(id).series.name}
        </Dropdown.Item>
      );
    });
  };
  /* This function filters the tournaments by the id passed as a parameter and sends the filtered tournament to its parent component in order to render it. It filters the tournaments that match with the id series that was clicked */
  getSeriesId = id => {
    let getSpecificserie = this.state.tournaments.filter(
      item => item.series.id === id
    );
    console.log(getSpecificserie);
    this.dataTournament(getSpecificserie);
  };

  dataTournament = data => {
    this.props.upDate(data);
  };

  render() {
    return (
      <Container fluid>
        <Col lg={12}>
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

            {/* <Col lg={2}>
            <Row>
              <h5>Start Date</h5>
            </Row>
            <Row>
              <Button onClick={this.onClick} type="submit">
                Selected start date
               
              </Button>
              { this.state.showResults ? <Calendardates /> : null }
            </Row>
          </Col>


          
          <Col lg={2}>
            <Row>
              <h5>End Date</h5>
            </Row>
            <Row>
              <Button type="submit">selected end date</Button>
            </Row>
          </Col>  */}
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Filter;
