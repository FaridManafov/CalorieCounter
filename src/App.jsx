import React, { Component } from 'react';
import './App.css';
import { listenerCount } from 'cluster';
const axios = require('axios')
const api_key = process.env.API_KEY

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      querySearch = '',
      results: []
    }
  }

  handleInputChange = () => {
    this.setState = ({
      query = this.search.value
    })
  }

  getInfo = () => {
    axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${this.state.query}&sort=n&max=5&offset=0&api_key=${api_key}`)
    .then(({ data }) => {
      this.setState({
        results: data.item.name
      })
    })
  }

  componentDidMount() {

  }

  render() {
    return (
      <form>
        <input placeholder = "Search"
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        <p>
          {this.state.query}
        </p>
      </form>
    );
  }
}

export default App;
