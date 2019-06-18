import React from "react";
import Navbar from "react-bootstrap/Navbar";
import BayesLogo from "../images/bayes-logo.png";

const NavBarBayes = () => {
  return (
    <Navbar className="NavBarBayes" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={BayesLogo}
          width="150"
          height="47"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBarBayes;
