import React from 'react'

const SearchBar = (props) => {  
  return <div>
      <input type="Search" className="filter" placeholder="filter" onChange={props.handleInputChange} />
    </div>;
}

export default SearchBar