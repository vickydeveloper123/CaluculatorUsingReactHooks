import React from "react";
import ReactDOM from "react-dom";
import "./../public/styles.css";

var count = 0;

function increase() {
  count++;
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>,
    document.getElementById("root")
  );
}

function decrease() {
  count--;
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>

      <button onClick={decrease}>-</button>
    </div>,
    document.getElementById("root")
  );
}
ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>,
  document.getElementById("root")
);
