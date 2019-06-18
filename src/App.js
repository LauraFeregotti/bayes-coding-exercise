import React, { Component } from "react";
import "./App.css";
import SearchTournament from "./components/SearchTournament";
import Container from "react-bootstrap/Container";
import NavBarBayes from "./components/NavBarBayes";
import CarouselBayes from "./components/CarouselBayes";
import { BrowserRouter, Route } from "react-router-dom";
import Data from "./data/tournaments.json";
class App extends Component {
  state = {};
  render() {
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
