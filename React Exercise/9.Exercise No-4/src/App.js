import React from "react";
import "./styles.css";

var username = prompt("Please provide your name");
var message = "Welcome" + " " + username;
export default function App() {
  return (
    <div className="App">
      <h1>Hello this is Sanskar welcoming you</h1>
      <h2>{message}</h2>
    </div>
  );
}
