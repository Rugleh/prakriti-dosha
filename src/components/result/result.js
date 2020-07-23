import React from "react";
import "./result.css";

function showResults(e) {
  let checkedBoxed = document.querySelectorAll("input[name]:checked");
  let answers = [];

  checkedBoxed.forEach(function (checkedBox) {
    let string = checkedBox.id;
    let stringSplited = string.split("-", 1);
    answers.push(stringSplited[0]);
  });

  let vataCount = answers.filter((x) => x === "vata").length;
  let pittaCount = answers.filter((x) => x === "pitta").length;
  let kaphaCount = answers.filter((x) => x === "kapha").length;

  console.log("vata: " + vataCount);
  console.log("pitta: " + pittaCount);
  console.log("kapha: " + kaphaCount);

}

function result() {
  return (
    <div>
      
      <div className="result">
        <p id="vataResults">{showResults.vataCount}</p>
        <p id="pittaResults"></p>
        <p id="kaphaResults"></p>
      </div>
    </div>
  );
}

export default result;
