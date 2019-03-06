import React from "react";
import ReactDOM from "react-dom";
import Giphy from "../../src";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Csv Viewer Example</h1>
      <Giphy />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
