import React from 'react'

const Foods = (props) => {
  console.log(props.resultsName)
  const options = props.resultsName.map(r => (
    <li key={r.id}>
    {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Foods