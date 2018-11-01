import React from "react";

const Foods = props => {
  console.log(props, "props")
  return (
    <table>
      <tbody>
        <tr>
          <th>Food</th>
          <th>Calories (measured in Kcal)</th>
          <th>Add to List</th>
        </tr>
        <tr>
          <th>{props.queryFoods}</th>
        </tr>
      </tbody>
    </table>
  );
}

export default Foods;
