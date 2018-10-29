import React, { Component } from 'react';
import './App.css';
const axios = require('axios')

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list = {
        food = "",
        totalCalories = ""
      }
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <input type="text" className="search" placeholder="Search"></input>
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
