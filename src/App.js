import React, { Component } from "react";
import "./App.css";
import SearchTournament from "./components/SearchTournament";
import Container from "react-bootstrap/Container";
import NavBarBayes from "./components/NavBarBayes";
import CarouselBayes from "./components/CarouselBayes";
import { BrowserRouter, Route } from "react-router-dom";
import Data from "./data/tournaments.json";


class App extends Component {
  state = {
    tournaments: []
  };

  getData = ()=>{
    Data.map((element, index) => {
      return this.setState({
        tournaments: 
          <tr key={element.id}>
            <th>{element.name}</th>
            <th>{element.date_start}</th>
            <th>{element.date_end}</th>
          </tr>
        
      });
    });
  }

  render() {
    /*console.log(getData);*/
    const { listOfTournaments } = this.state;
    console.log(listOfTournaments);

    return (
      <Container fluid className="App">
        {listOfTournaments}
        {/*Linking the NavbarBayes parent*/}
        <NavBarBayes />
        {/*Linking the CarouselBayes parent*/}
        <CarouselBayes />
        {/*Linking the Tournament parent */}
        <SearchTournament />
      </Container>
    );
  }
}

export default App;


