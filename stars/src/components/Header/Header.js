import React from 'react';
import './Header.css';

export const Header = ({ headerItems }) => {
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
            return <li key={i}><a href='#'>{el}</a></li>
          })
        }
      </ul>

    </div>
  )
}