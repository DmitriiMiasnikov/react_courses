import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

export const Button = ({ name, link }) => {
  return (
    <div className='button'>
      <NavLink to={link}>
        {name}
      </NavLink>
    </div>

  )
}