import React from 'react';
import './Header.css';

export const Header = ({ headerItems }) => {
  return (
    <div className='header d-flex'>
      <a href='#'>
      <h3>
        Star DB
      </h3>
      </a>
      <ul className='d-flex'>
        {
          headerItems.map((el, i) => {
            return <li key={i}><a href='#'>{el}</a></li>
          })
        }
      </ul>

    </div>
  )
}