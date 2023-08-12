import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
  return (
    <React.Fragment>
      <div >
        <input type='text' className='centered-input' placeholder="Cut onion" />
      </div>
    </React.Fragment>
  )
}

export { TodoSearch };
