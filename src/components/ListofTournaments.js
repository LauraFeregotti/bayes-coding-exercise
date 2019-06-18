import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Data from "../data/tournaments.json";

const ListofTournaments = () => {
  return (
    <Col lg={4} className="ListofTournaments">
      <h3>List of Tournaments</h3>
      <Table striped bordered hover variant="dark" responsive>
        <tbody>
         {/* {Data.map((element, index) => {
            return (
              <tr key={element.id}>
                <th>{element.name}</th>
              </tr>
            );
          })}  */ }
        </tbody>
      </Table>
    </Col>
  );
};

export default ListofTournaments;
