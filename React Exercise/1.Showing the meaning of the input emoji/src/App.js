import React from "react";
import "./styles.css";
import { useState } from "react";

const emojiDB = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🐶": "Dog Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐪": "Camel"
};

var emojiWeKnow = Object.keys(emojiDB);
var message = "Welcome to Animal-Pedia";

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function inputChangeHandler() {
    var userInput = event.target.value;

    var meaning = emojiDB[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in your database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDB[emoji];
    setMeaning(meaning);
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
        placeholder="Please enter your animal emoji here"
      ></input>
      <div>
        <h5>Emoji we know</h5>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ padding: "0.3rem", margin: "0.5rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <div style={{ margin: "1rem" }}>
        <h5 style={{ backgroundColor: "" }}>Meaning</h5>
        {meaning}
      </div>
    </div>
  );
}
