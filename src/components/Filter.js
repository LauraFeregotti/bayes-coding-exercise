import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import TournamentFound from "./TournamentFound";
import Tournaments from "./Tournaments";

function Filter(props) {
  function getTournamentBySerieId(id) {
    return props.tournaments.find(t => t.series.id === id);
  }
  function getSeries() {
    const ids = [...new Set(props.tournaments.map(t => t.series.id))];
    return ids.map(id => {
      return (
        <Dropdown.Item
          href="#/action-1"
          key={getTournamentBySerieId(id).series.id}
          onClick={() =>
            getSeriesId(getTournamentBySerieId(id).series.id)
          }
        >
          {getTournamentBySerieId(id).series.name}
        </Dropdown.Item>
      );
    });
  }

 function getSeriesId(id) {
    
  }

  /*const result = props.tournaments.filter(item => item.series.id === id);*/

  console.log();
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
              <Dropdown.Menu>{getSeries()}</Dropdown.Menu>
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
      <Row className="containertournamentfound">
        {props.tournaments.map(tournament => {
          return (
            <TournamentFound tournament={tournament} key={tournament.id} />
          );
        })}
      </Row>
    </Container>
  );
}

export default Filter;
