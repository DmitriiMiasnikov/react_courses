import React, { useEffect, useState } from 'react';
import './PersonDetails.css';
import { Loading } from './../../assets/Loading/Loading'

export const PersonDetails = ({ selectedItem, getData }) => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const updatePerson = () => {
    if (!selectedItem) return
    getData.item(selectedItem).then((res) => {
      setPerson(res)
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    updatePerson()
  }, [selectedItem])

  const noDetails = !person ? <NoDetails /> : null;
  const loadingBlock = loading && !noDetails ? <Loading /> : null;
  const content = person && !loading ? <Content person={person} imageURL={getData.imageURL}/> : null;
  return (
    <div className={noDetails || loadingBlock ? 'person-details card center' : 'person-details card'}>
      {loadingBlock}
      {content}
      {noDetails}
    </div>
  )
}
const NoDetails = () => {
  return (
    <div>selsect a person from the list</div>
  )
}
const Content = ({ person, imageURL }) => {
  return (
    <>
      <img className='person-image' alt={imageURL}
        src={`https://starwars-visualguide.com/assets/img/${imageURL}/${person.id}.jpg`} />
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
    </>
  )
}