import React, { useState } from 'react';

export const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('');
  const searchHandler = (value) => {
    setSearchValue(value);
    search(value);
  }
  return (
    <div className='search'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input placeholder='type to search' type='text' value={searchValue}  onChange={e => searchHandler(e.target.value)}/>
      </form>
    </div>
  )
}