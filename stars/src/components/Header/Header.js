import React from 'react';
import './Header.css';

export const Header = ({ headerItems, headerHandler }) => {
  return (
    <div className='header d-flex'>
      <h3>
        <a href='#'>
          Star DB
        </a>
      </h3>
      <ul className='d-flex'>
        {
          headerItems.map((el, i) => {
            return <li key={i}>{el}</li>
          })
        }
      </ul>

    </div>
  )
}