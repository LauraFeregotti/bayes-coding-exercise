import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Calendar from "react-calendar";
import moment from "moment";
class Calendardates extends Component {
  state = {
    value: new Date()
  };

  onChange = value => {
    this.setState({ value });
    this.dataTournament(value);
  };

  dataTournament = data => {
    let changeFormat = moment(data).format("YYYY-MM-DD");
    this.props.getData(changeFormat);
  };

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Calendar onChange={this.onChange} value={value} className="calendar" />
      </Container>
    );
  }
}

export default Calendardates;
