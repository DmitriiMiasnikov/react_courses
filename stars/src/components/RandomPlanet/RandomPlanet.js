import React, { useEffect, useState } from 'react';
import './RandomPlanet.css';
import { swapi } from './../../Servises/swapiServises'
import loadingImg from './../../assets/loading.svg'
import { ErrorPage } from '../ErrorPage/ErrorPage';

export const RandomPlanet = () => {
  const [planet, setPlanet] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const id = Math.floor(Math.random() * 20) + 2;
  const onError = () => {
    setError(true);
    setLoading(false);
  }
  const updatePlanet = () => {
    swapi.getPlanet(id).then((res) => {
      setPlanet(res)
      setLoading(false)
    })
      .catch(onError)
  }
  useEffect(() => {
    updatePlanet()
  }, [])

  const hasData = !(loading || error)
  const errorBlock = error ? <ErrorPage /> : null
  const loadingBlock = loading ? <Loading /> : null
  const content = hasData ? <Content planet={planet} id={id}/> : null

  return (
    <div className={hasData ? 'random-planet jumptron rounded' : 'random-planet jumptron rounded center'}>
      {errorBlock}
      {loadingBlock}
      {content}
    </div>
  )
}

const Loading = () => {
  return (
    <img src={loadingImg}></img>
  )
}
const Content = ({ planet, id }) => {
  return (
    <>
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
    </>
  )
}