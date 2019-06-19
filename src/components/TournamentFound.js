import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "../data/tournaments.json";
import Videogame from "../images/fortnite.jpg";

const TournamentFound = () => {
  return (
    <Container fluid className="containertournamentfound">
      {Data.map((element, index) => {
        return (
          <Row lg={{ span: 10, offset: 1 }} className="IndividualTournament"  key={element.id}>
            <Col lg={6}>
              <img src={Videogame} alt="" width="500" height="281" />
            </Col>
            <Col lg={6} className="tournamentDescription" >
            <Row>
              {element.name}
            </Row>
             <Row>
               {element.series.name}
             </Row>
             <Row>
             {element.series.date_start}
             </Row>
             <Row>
               {element.series.date_end}
             </Row>
           
            </Col>
            
          </Row>
        );
      })}
    </Container>
  );
};

export default TournamentFound;
