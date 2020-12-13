import React from "react";
import "./styles.css";
import { useState } from "react";

var message = "Welcome to the LikeCounter";

export default function App() {
  var [counter, setCounter] = useState(0);
  function buttonClickHandler() {
    setCounter(counter++);
  }
  return (
    <div className="App">
      <h1>{message}</h1>
      <button
        onClick={buttonClickHandler}
        style={{
          padding: "1rem",
          fontWeight: "bold",
          backgroundColor: "black",
          color: "yellowgreen"
        }}
      >
        Click Me
      </button>
      <br />
      Clicked:{counter}
    </div>
  );
}
