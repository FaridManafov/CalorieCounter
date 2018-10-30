import React, { Component } from 'react';
import './App.css';
import Foods from './Components/Foods.jsx'
import apiKey from './apikey'

const axios = require('axios')

let workerArrayName = []
let workerArrayKcal = []

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      querySearch: '',
      resultsName: [],
      resultsKcal: []
    }
  }

  handleInputChange = () => {
    this.setState = ({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length %2 === 0) {
          this.getInfo()
        }
      }
    })
  }
  // ${ this.state.query }

  componentDidMount() {

    axios
      .get(`http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey.api_key}&name=${this.state.query}&nutrients=208&max=5`)
      // .then(( data ) => {
      //   return data.json()
      // })

      // .then(data => {
      //   data.data.report.foods.forEach((element) => {
      //     console.log(element.name)
      //     console.log(element.nutrients[0].value)
      //   });
      // })

      .then(data => {
        console.log(data)
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
      // this.getInfo()
  }

  render() {
    return (
      <form>
        <input placeholder = "Search"
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        <Foods 
          resultsName={this.state.resultsName}
          />
      </form>
    );
  }

}

export default App;
