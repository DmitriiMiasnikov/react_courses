import React, { useEffect, useState } from 'react';
import './RandomPlanet.css';
import { swapi } from './../../Servises/swapiServises'
import loadingImg from './../../assets/loading.svg'

export const RandomPlanet = () => {
  const [planet, setPlanet] = useState([])
  const [loading, setLoading] = useState(true);
  const id = Math.floor(Math.random() * 20) + 2;
  const updatePlanet = () => {
    swapi.getPlanet(id).then((res) => {
      setPlanet(res)
      setLoading(false)
    })
  }
  useEffect(() => {
    updatePlanet()
  }, [])
  if (loading) {
    return (
      <div className='random-planet jumptron rounded loading'>
      <img src={loadingImg}></img>
      </div>
    )
  } else return (
    <div className='random-planet jumptron rounded'>
      <img className='planet-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
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
    </div>
  )
}