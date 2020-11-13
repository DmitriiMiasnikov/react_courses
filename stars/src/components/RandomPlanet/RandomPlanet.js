import React, { useEffect, useState } from 'react';
import './RandomPlanet.css';
import { swapi } from './../../Servises/swapiServises'
import { Loading } from './../../assets/Loading/Loading'
import { ErrorPage } from '../../assets/ErrorPage/ErrorPage';
import { Content } from './Content/Content'

export const RandomPlanet = () => {
  const [planet, setPlanet] = useState([]);
  const [idPlanet, setIdPlanet] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let updatePlanet = () => {
    let id = Math.floor(Math.random() * 20) + 3;
    swapi.getPlanet(id).then((res) => {
      setIdPlanet(id);
      setPlanet(res)
      setLoading(false)
    })
      .catch(onError)
  }
  const onError = () => {
    setError(true);
    setLoading(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updatePlanet()
    }, 5000);
    return () => clearInterval(interval);
  }, [])
  const hasData = !(loading || error)
  const errorBlock = error ? <ErrorPage /> : null
  const loadingBlock = loading ? <Loading /> : null
  const content = hasData ? <Content planet={planet} id={idPlanet}/> : null

  return (
    <div className={hasData ? 'random-planet jumptron rounded' : 'random-planet jumptron rounded center'}>
      {errorBlock}
      {loadingBlock}
      {content}
    </div>
  )
}