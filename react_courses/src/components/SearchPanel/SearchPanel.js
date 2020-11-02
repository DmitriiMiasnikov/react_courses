import React from 'react';

import './SearchPanel.css'

export const SearchPanel = () => {
  return (
    <div>
      <input placeholder={'type to search'} type='text' className='form-control search-input' />
    </div>
  )
}