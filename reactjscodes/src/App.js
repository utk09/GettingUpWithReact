import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

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
    return (
     <div className='App'>
       <h1>This is H1</h1>
       <h3>This is H3</h3>
       <Person name = 'Amar' age = "30"></Person>
       <Person name = "Akbar" age = "20"/>
       <Person name = "Anthony" age = "10"></Person>
     </div>
    //  <div>
    //  <h5>This is another Div</h5>
    //  </div>
    );
    // return React.createElement('div', null, 'h1', "Hi, this is a new return statement - does not work", React.createElement('h1', {className: 'App'}, "Hi, I guess this works now.") );
  }
}

export default App;
