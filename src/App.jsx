import React, { Component } from "react";
import "./App.css";
import Foods from "./Components/Foods.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import apiKey from "./apikey";

const axios = require("axios");

let initialFoods = {}

class App extends Component {
  constructor(props) {
    super(props);

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      querySearch: "",
      queryFoods: {},
      trackingFoods: {}
    };
  }

  componentDidMount() {
    this.getInfo();
    this.handleInputChange()
  }

  getInfo = () => {
    axios
      .get(
        `http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${
          apiKey.api_key
        }&nutrients=208&max=5`
      )
      .then(data => {
        data.data.report.foods.forEach(element => {
          initialFoods[element.name] = element.nutrients[0].value
        });
        this.setState({queryFoods: initialFoods})
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    let input = e.target.value;
    let updatedFoods = this.state.queryFoods
    updatedFoods = updatedFoods.filter( e => {
      return e.toLowerCase().search(
        input.toLowerCase()) !== -1
    })
    this.setState({queryFoods: updatedFoods})
    console.log(updatedFoods)
  }

  render() {
    return(
      <div>
        <input onClick={this.handleInputChange.bind(this)}></input>
        <tr>
          <th>Food</th>
          <th>Calories (measured in Kcal)</th>
          <th>Add to List</th>
        </tr>
        <tr>
          <th>{this.props.queryFoods}</th>
        </tr>
      </div>
    )
  }
}

export default App;
