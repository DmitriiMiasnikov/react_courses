import React from 'react';

import './ItemStatusBar.css';

export const ItemStatusBar = ({ filterAll, filterActive, filterDone }) => {
  return (
    <div className='btn-group'>
      <button type='button' className='btn btn-info' onClick={() => filterAll()}>All</button>
      <button type='button' className='btn btn-outline-secondary' onClick={() => filterActive()}>Active</button>
      <button type='button' className='btn btn-outline-secondary' onClick={() => filterDone()}>Done</button>
    </div>
  )
}