import React from "react";
import "./styles.css";
import { useState } from "react";

var shoppingList = [
  "Jacket",
  "T-Shirt",
  "Denims",
  "Milk",
  "Flowers",
  "Vegetables",
  "Dth Recharge"
];

export default function App() {
  function getBG(index) {
    if (index % 2 === 0) {
      return "white";
    }

    return "grey";
  }
  return (
    <div className="App">
      <h1>
        <u>Conditional in JSX</u>
      </h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                backgroundColor: getBG(index),
                width: "70%",
                margin: "auto"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
