import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import TournamentFound from "./TournamentFound";
import Tournaments from "./Tournaments";

const Filter = props => {
  let unique = [...new Set(props.tournaments)];
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
              <Dropdown.Menu>
                {unique.map(tournament => {
                  return (
                    <Dropdown.Item href="#/action-1" key={tournament.id}>
                      {tournament.series.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
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
    </Container>
  );
};

export default Filter;
