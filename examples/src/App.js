import React from "react";
import logo from "./logo.svg";
import Wrapper from "./lib/wrapper";
import Button from "./button";
import Panel from "./panel";
import EventMitt from "@feizheng/event-mitt";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    Object.assign(this, EventMitt);
  }

  render() {
    return (
      <Wrapper app={this}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Panel />
          <Button>BUTTON</Button>
        </div>
      </Wrapper>
    );
  }
}

export default App;
