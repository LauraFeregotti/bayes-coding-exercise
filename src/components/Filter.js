import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

const Filter = () => {
  return (
    <Container fluid>
      <Row className="filterscontainer">
        <Col lg={2}>
          <Row>
            <h5>Series</h5>
          </Row>
          <Row>
            <Button type="submit">selected serie</Button>
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
