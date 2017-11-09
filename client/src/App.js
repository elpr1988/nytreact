import React, { Component } from "react";
import logo from "./NYT-logo.png";
import "./App.css";
import Main from "./components/Main";
class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="Jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Article Scrubber!</h1>
      </div>
        
        <div>
        <Main />
        </div>

      </div>
    );
  }
}

export default App;

