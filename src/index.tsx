import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return <h1>Hello from react !</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));

if (module && module.hot) module.hot.accept();
