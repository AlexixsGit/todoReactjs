import React from 'react';
import './TodoSearch.css'
import SarchIcon from './images/search-icon.svg'

function TodoSearch() {
  return (
      <div className='search-container'>
        <input type='text'
        placeholder="Cut onion" />
        <img src={SarchIcon} className='search-icon'/>
      </div>
      
  )
}

export { TodoSearch };
