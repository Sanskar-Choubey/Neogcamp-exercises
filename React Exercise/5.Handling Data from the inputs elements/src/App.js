import React from "react";
import "./styles.css";
import { useState } from "react";

var message = "Welcome to the LikeCounter";

export default function App() {
  function inputChangeHandler() {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <h1>{message}</h1>

      <input
        onChange={inputChangeHandler}
        style={{
          padding: "0.5rem",
          margin: "1rem",
          width: "50%",
          textAlign: "center"
        }}
        placeholder="Put your data here"
      ></input>
    </div>
  );
}
