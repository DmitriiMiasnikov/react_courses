import React from 'react';
import './ItemAddForm.css'

export const ItemAddForm = ({ addTodo }) => {
  return (
    <div className='wrapper'>
      <button className='btn btn-outline-secondary' onClick={() => addTodo()}>Add item</button>
    </div>
  )
}