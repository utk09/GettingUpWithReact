import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //       <span>cd into this folder</span>
    //       <span> </span>
    //         Always start "npm start" in nodeJs cmd
    //       </p>
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
    return React.createElement('div', null, 'h1', "Hi, this is a new return statement - does not work", React.createElement('h1', {className: 'App'}, "Hi, I guess this works now.") );
  }
}

export default App;
