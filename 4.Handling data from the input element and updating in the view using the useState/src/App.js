import React from "react";
import "./styles.css";
import { useState } from "react";

var message = "Welcome to the LikeCounter";

export default function App() {
  var [data, setData] = useState(" ");
  function inputChangeHandler() {
    console.log(event.target.value);
    data = event.target.value;
    setData(data);
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
        placeholder="Please enter your name here"
      ></input>
      <hr />
      Welcome : {data}
    </div>
  );
}
