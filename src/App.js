import React, { Component } from 'react';
import GameboardContainer from './containers/GameboardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameboardContainer />
      </div>
    );
  }
}

export default App;
