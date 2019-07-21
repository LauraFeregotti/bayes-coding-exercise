import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Data from "../data/tournaments.json";
import Calendardates from "./Calendar";
import moment from "moment";
import { thisExpression } from "@babel/types";

class FilterByStartDate extends Component {
  state = {
    tournaments: [],
    showResults: null,
    time: null
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
            /*Whenever a serie name gets clicked fires the event "getSeriesId" and passes the series id who was cliked as a parameter */
            this.getSeriesId(this.getTournamentBySerieId(id).series.id)
          }
        >
          {this.getTournamentBySerieId(id).series.name}
        </Dropdown.Item>
      );
    });
  };

  /* This function filters the tournaments by the date passed as a parameter and sends the filtered tournament to its parent component in order to render it. It filters the tournaments that match with the date series that was clicked */
  getSeriesdate = date => {
    console.log(date + "fecha seleccionada");
    let something = this.state.tournaments.map(
      t =>
        (t.date_start = moment(t.date_start, "YYYY-MM-DDTHH:mm:ssZ").format(
          "YYYY-MM-DD"
        ))
    );
    let getSpecificserie = this.state.tournaments.filter(
      item => item.date_start === date
    );
    console.log(getSpecificserie + " date_start");
    this.dataTournament(getSpecificserie);
  };

  dataTournament = data => {
    this.props.upDate(data);
  };

  /* Setting state of show results in order to make the calendar appear when the button si clicked*/

  onClick = () => {
    this.setState({ showResults: !this.state.showResults });
  };

  /*Passing data from "FilterByStartDate" to "calendar" */
  getData = date => {
    this.getSeriesdate(date);
    this.setState({
      time: date
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Row>
            <Col lg={12}>
              <h5>Start Date</h5>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
              <Button onClick={this.onClick} type="submit">
                Selected start date
              </Button>
              {this.state.showResults ? (
                <Calendardates getData={this.getData} />
              ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FilterByStartDate;
