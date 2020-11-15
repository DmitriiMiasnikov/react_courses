import React, { useEffect, useState } from 'react';
import './PersonDetails.css';
import { swapi } from './../../Servises/swapiServises'

export const PersonDetails = ({ selectedPerson }) => {
  const [person, setPerson] = useState(null);
  const updatePerson = () => {
    if (!selectedPerson) return
    swapi.getPerson(selectedPerson).then((res) => {
      setPerson(res)
    })
  }
  useEffect(() => {
    updatePerson()
  }, [selectedPerson])

  if (!person) {
    return (
      <span>selsect a person from the list</span>
    )
  }
  return (
    <div className='person-details card'>
      <img className='person-image' alt='characters'
        src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}/>
      <div className='card-body'>
        <h4>
          {person.name}
        </h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>{person.gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>{person.birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color</span>
            <span>{person.eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}