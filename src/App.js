import logo from "./logo.svg";
import "./App.css";
import Child from "./Components/Child";
import Parent from "./Components/Parent";
import React from "react";

function App() {
  return (
    // <div className="App">
    <React.StrictMode>
      <Parent />
    </React.StrictMode>
    // </div>
  );
}

export default App;
