import React from 'react';
import './TodoSearch.css'
import SearchIcon from './../images/search-icon.svg'

function TodoSearch({ searchValue, setSearchValue }) {

  return (
    <div className='search-container'>
      <input type='text' value={searchValue}
        placeholder="Cut onion" onChange={(event) => {
          setSearchValue(event.target.value);
        }} />
      <img src={SearchIcon} className='search-icon' />
    </div>
  )
}

export { TodoSearch };
