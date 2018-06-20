import React, { Component } from 'react';
import './App.css';
import TestButton from "./components/Button"
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, World!
        <TestButton />
      </div>
    );
  }
}

export default App;
