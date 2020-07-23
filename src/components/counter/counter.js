import React from "react";
import "./counter.scss";

import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vata: 0,
      pitta: 0,
      kapha: 0,
      vataProportion: 0,
      pittaProportion: 0,
      kaphaProportion: 0,
    };
  }

  showResults(e) {
    // Select all checked checkboxes in the current page
    let checkedBoxed = document.querySelectorAll("input[name]:checked");
    let answers = [];

    // Get all the ids to the answers array
    checkedBoxed.forEach(function (checkedBox) {
      let string = checkedBox.id;
      let stringSplited = string.split("-", 1);
      answers.push(stringSplited[0]);
    });

    // Count all the vata, pitta and kapha in the answers array
    let vataCount = answers.filter((x) => x === "vata").length;
    let pittaCount = answers.filter((x) => x === "pitta").length;
    let kaphaCount = answers.filter((x) => x === "kapha").length;

    let totalCount = 100 / (vataCount + pittaCount + kaphaCount);

    // Update the state with the count
    this.setState({
      vata: vataCount,
      pitta: pittaCount,
      kapha: kaphaCount,
      vataProportion: totalCount * vataCount,
      pittaProportion: totalCount * pittaCount,
      kaphaProportion: totalCount * kaphaCount,
    });
  }

  render() {
    return (
      <Row className="counter">
        <Col>
          <Button variant="success"  onClick={(e) => this.showResults(e)}>
            See results
          </Button>{" "}
        </Col>
        <Col className="text-left">
          <p className="counter__result">vata: {this.state.vata}</p>
          <p>pitta: {this.state.pitta}</p>
          <p>kapha: {this.state.kapha}</p>
          Vata{" "}
          <ProgressBar
            variant="success"
            label={`${this.state.vataProportion}%`}
            now={this.state.vataProportion}
          />
          Pitta{" "}
          <ProgressBar
            variant="success"
            label={`${this.state.pittaProportion}%`}
            now={this.state.pittaProportion}
          />
          Kapha{" "}
          <ProgressBar
            variant="success"
            label={`${this.state.kaphaProportion}%`}
            now={this.state.kaphaProportion}
          />
        </Col>
      </Row>
    );
  }
}

export default Counter;
