import React from 'react';
import './TodoSearch.css'
import SearchIcon from './../images/search-icon.svg'

function TodoSearch() {
  return (
      <div className='search-container'>
        <input type='text'
        placeholder="Cut onion" />
        <img src={SearchIcon} className='search-icon'/>
      </div>
      
  )
}

export { TodoSearch };
