import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchTournament from "./SearchTournament";

const Tournaments = () =>{
  return(
<Container fluid className="Tournaments">
        <Row>
          <Col lg={2} />
          <Col lg={7}>
            <h1>Tournaments</h1>
          </Col>
          <Col lg={3} />
        </Row>
        <Row>
          {/*<ListofTournaments /> */}
          <SearchTournament />
        </Row>
      </Container>
  )
}


export default Tournaments;
