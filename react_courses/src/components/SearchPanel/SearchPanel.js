import React, { useState } from 'react';

import './SearchPanel.css'

export const SearchPanel = ({ searchTodo }) => {
  const [searchValue, setSearchValue] = useState('');

  const seachValueHandler = (value) => {
    setSearchValue(value);
    searchTodo(value);
  }
  return (
    <form className='d-flex' onSubmit={(e) => e.preventDefault()}>
      <input placeholder={'type to search'} type='text' className='form-control search-input' value={searchValue}
        onChange={(event) => seachValueHandler(event.target.value)}/>
    </form>
  )
}