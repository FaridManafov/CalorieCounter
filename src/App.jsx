import React, { Component } from 'react';
import './App.css';
import Foods from "./Components/Foods.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import apiKey from './apikey'

const axios = require('axios')

let workerArrayName = []
let workerArrayKcal = []

class App extends Component {

  constructor(props){
    super(props)
    
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      querySearch: '',
      resultsName: [],
      resultsKcal: [],
      savedFoods: {}
    }
  }

  componentDidMount() {
    this.getInfo()
  }
  
  getInfo = () => {
    axios
      .get(`http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey.api_key}&nutrients=208&max=5`)

      .then(data => {
        console.log(data, "not on mount")
        data.data.report.foods.forEach(element => {
          workerArrayName.push(element.name)
          workerArrayKcal.push(element.nutrients[0].value)
          console.log(workerArrayName);
          console.log(workerArrayKcal);
        });
        this.setState({ resultsName: [...this.state.resultsName, workerArrayName] });
        this.setState({ resultsKcal: [...this.state.resultsKcal, workerArrayKcal] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInputChange = (e) => {
    let input = e.target.value
    this.setState({querySearch: input})
    console.log(input)
    // console.log(e)
  }

  render() {
    return <div>
      <SearchBar
        handleInputChange={this.handleInputChange}
      />

      <Foods 
        resultsName={this.state.resultsName} 
        resultsKcal={this.state.resultsKcal} 
        savedFoods={this.state.savedFoods}
      />  
    </div>;
  }

}

export default App;
