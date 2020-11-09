import React, { useState } from 'react';

import './SearchPanel.css'

export const SearchPanel = ({ searchTodo, searchInputEmpty }) => {
  const [searchValue, setSearchValue] = useState('');

  const seachValueHandler = (value) => {
    setSearchValue(value);
    searchTodo(value);
  }
  return (
    <form className='d-flex' onSubmit={(e) => e.preventDefault()}>
      <input placeholder={'type to search'} type='text' className='form-control search-input' 
        value={!searchInputEmpty ? searchValue : ''}
        onChange={(event) => seachValueHandler(event.target.value)}/>
    </form>
  )
}