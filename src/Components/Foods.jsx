import React from 'react'

const Foods = (props) => {
  console.log(props, "Foods")
  if (!props.resultsName[0] || !props.resultsKcal || props.resultsName[0] === undefined || props.resultsKcal[0] === undefined) {

    return <h1>Loading</h1>;

  } else {

    let foodNames = props.resultsName[0].map(element => (
      <li>{element}</li>
    ));
    
    let foodKcal = props.resultsKcal[0].map(element => (
      <li>{element}</li>
    ))

    return <table>
        <tbody>
          <tr>
            <th>Food</th>
            <th>Calories (measured in Kcal)</th>
            <th>Add to List</th>
          </tr>
          <tr>
            <td>{foodNames}</td>
            <td>{foodKcal}</td>
          </tr>
        </tbody>
      </table>;

  }
}

export default Foods