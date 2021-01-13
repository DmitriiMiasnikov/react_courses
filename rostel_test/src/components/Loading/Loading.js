import React from 'react';
import './Loading.css';
import loading from './../../assets/loading.svg';

export const Loading = () => {
  return (
    <div className='loading'>
      <img src={loading} alt='loading'></img>
    </div>
  )
}