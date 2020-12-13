import React from "react";
import "./styles.css";

var message = "Welcome to the LikeCounter";
var counter = 0;

export default function App() {
  function buttonClickHandler() {
    console.log("Clicked", counter++);
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
    </div>
  );
}
