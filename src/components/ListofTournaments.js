import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function ListofTournaments() {
  return (
    <Col lg={4} className="ListofTournaments">
      <h3>List of Tournaments</h3>
      <Table striped bordered hover variant="dark" responsive>
        <tbody>
          <tr>
            <th>Tournament 1</th>
          </tr>
          <tr>
            <td>Tournament 2</td>
          </tr>
          <tr>
            <td>Tournament 3</td>
          </tr>
          <tr>
            <td>Tournament 2</td>
          </tr>
          <tr>
            <th>Tournament 1</th>
          </tr>
          <tr>
            <td>Tournament 2</td>
          </tr>
          <tr>
            <td>Tournament 3</td>
          </tr>
          <tr>
            <td>Tournament 2</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}

export default ListofTournaments;
