import React, { useState } from 'react';
import './ItemAddForm.css'

export const ItemAddForm = ({ addTodo }) => {
  const [labelChange, setLabelChange] = useState('');
  const labelChangeHandler = (label) => {
    setLabelChange(label)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(labelChange)
    setLabelChange('')
  }
  return (
    <form className='wrapper d-flex' onSubmit={onSubmit}>
      <input type='text' className='form-control' value={labelChange}
        onChange={(event) => labelChangeHandler(event.target.value)} placeholder='what need to be done'/>
      <button className='btn btn-outline-secondary'>Add item</button>
    </form>
  )
}