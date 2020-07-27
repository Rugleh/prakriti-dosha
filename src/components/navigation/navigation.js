import React from "react";
import "./_navigation.scss";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  darkMode(e) {
    let element = document.getElementsByClassName("light-text");

    for (let i = 0; i < element.length; i++) {
      element[i].classList.add("dark-text");
    }

    let elementNav = document.getElementsByClassName("bg-light");

    for (let j = 0; j < elementNav.length; j++) {
      elementNav[j].classList.add("bg-dark");
    }

    document.body.style.backgroundColor = "#202428";
  }

  lightMode(e) {
    let element = document.getElementsByClassName("light-text");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("dark-text");
    }

    let elementNav = document.getElementsByClassName("bg-light");

    for (let j = 0; j < elementNav.length; j++) {
      elementNav[j].classList.remove("bg-dark");
    }

    document.body.style.backgroundColor = "white";
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Row className="ml-auto mr-3">
            <Button variant="light" onClick={(e) => this.lightMode(e)}>
              Light
            </Button>
            <Button variant="dark" onClick={(e) => this.darkMode(e)}>
              Dark
            </Button>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
