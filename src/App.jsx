import React, { Component } from 'react';
import './App.css';
import Foods from './Components/Foods.jsx'
import apiKey from './apikey'

const axios = require('axios')

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      querySearch: '',
      results: []
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
  
  getInfo = () => {
    axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${this.state.query}&sort=n&max=5&offset=0&api_key=${apiKey.api_key}`)
    // .then((data ) => {
    //   return data.json()
    // })

    .then((data) => {
      console.log(data)
    })
    
    .then(( data ) => {
      this.setState({
        results: data.list.item.name
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getInfo()
  }

  render() {
    return (
      <form>
        <input placeholder = "Search"
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        <Foods results={this.state.results} />
      </form>
    );
  }
}

export default App;
