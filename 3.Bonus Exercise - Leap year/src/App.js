import React from "react";
import "./styles.css";
import { useState } from "react";

var message = "Welcome to Leap Year Checker";

export default function App() {
  var [year, setYear] = useState(" ");

  function inputChangeHandler() {
    var userInput = event.target.value;
    if (userInput % 100 === 0 ? userInput % 400 === 0 : userInput % 4 === 0) {
      year = "This year is a leap year";
    } else {
      year = "This is not a leap year";
    }

    setYear(year);
  }
  return (
    <div className="App">
      <h1>{message}</h1>
      <h4>Want to see whether you birth year is leap year or not.</h4>
      <input
        onChange={inputChangeHandler}
        style={{
          padding: "0.5rem",
          margin: "1rem",
          width: "50%",
          textAlign: "center"
        }}
        placeholder="Please enter your year of birth here"
      ></input>
      <hr />
      Result : {year}
    </div>
  );
}
