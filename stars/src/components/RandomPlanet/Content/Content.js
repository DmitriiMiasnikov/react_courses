import React from 'react';
import './Content.css';

export const Content = ({ planet, id }) => {
  return (
    <>
      <img className='planet-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet-pic' />
      <div>
        <h4>
          {planet.name}
        </h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Poulation</span>
            {planet.population}
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            {planet.rotationPeriod}
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            {planet.diameter}
          </li>
        </ul>
      </div>
    </>
  )
}