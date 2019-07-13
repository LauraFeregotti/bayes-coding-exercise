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

  /*componentDidMount() {
    let Dat = Data.map((element, index) => {
      return element;
    });
    this.setState({
      tournaments: Dat
    });
  }
*/
  render() {
    /*const { tournaments } = this.state;
 const tournamentlist = tournaments.length ? (
      tournaments.map(tournament=>{
        return (
          <div key = {tournament.id}>
            {tournament.name}
          </div>
        )
      } )
    ): (
      <div> no tournaments yet</div>
    )*/
    return (
      <Container fluid className="App">
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
