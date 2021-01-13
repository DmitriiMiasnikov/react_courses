import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

export const Button = ({ name, link }) => {
  return (
    <NavLink to={link}>
      <div className='button'>
        {name}
      </div>
    </NavLink>
  )
}