import React, { useState } from "react";
import "./styles.css";

var shoppingList = ["milk", "bread", "Flowers", "stationary"];

export default function App() {
  function GetBg(index) {
    if (index % 2 === 0) {
      return "white";
    } else {
      return "grey";
    }
  }

  function inputClickHandler(item) {
    console.log("Clicked", item);
  }
  return (
    <div className="App">
      <h1>Printing List in React</h1>
      <ul>
        {shoppingList.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => inputClickHandler(item)}
              style={{ backgroundColor: GetBg(index) }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
