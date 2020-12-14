import React from "react";
import "./styles.css";

var message = "Welcome to the endUser";
export default function App() {
  function buttonClickHandler() {
    console.log("Clicked");
  }
  return (
    <div className="App">
      <h1>Hello this is Sanskar welcoming you</h1>
      <h2>{message}</h2>

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
