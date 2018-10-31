import React from "react";

const Foods = props => {
  console.log(props, "props");
  if (
    !props.resultsName[0] ||
    !props.resultsKcal ||
    props.resultsName[0] === undefined ||
    props.resultsKcal[0] === undefined
  ) {
    return <h1>Loading</h1>;
  } else {
    let foodNames = props.resultsName[0].map((element, indx) => (
      <tr>
        <td>{element}</td>
        <td>{props.resultsKcal[0][indx]}</td>
      </tr>
    ));

    // let foodKcal = props.resultsKcal[0].map(element => (
    //   <li>{element}</li>
    // ))

    return (
      <table>
        <tbody>
          <tr>
            <th>Food</th>
            <th>Calories (measured in Kcal)</th>
            <th>Add to List</th>
          </tr>
          <tr>
            {foodNames}
            {/* <td>{foodKcal}</td> */}
          </tr>
        </tbody>
      </table>
    );
  }
};

export default Foods;
