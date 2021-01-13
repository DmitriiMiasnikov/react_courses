import React from 'react';
import './Button.css';

export const Button = ({ name }) => {
  return (
    <div className='button'>
      {name}
    </div>
  )
}