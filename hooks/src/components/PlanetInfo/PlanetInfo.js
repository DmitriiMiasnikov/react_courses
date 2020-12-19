import React, { useState, useEffect, useCallback } from 'react';

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(res => res.json())
    .then(data => data)
}

const useRequest = (request) => {
  const [dataState, setDataState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    setDataState({
      data: null,
      loading: true,
      error: null,
    })
    let cancelled = false;
    request().then(data => !cancelled && setDataState({
      data,
      loading: false,
      error: null
    })).catch(error => !cancelled && setDataState({
      data: null,
      loading: false,
      error
    }))
    return () => cancelled = true;
  }, [request])
  return dataState;
}

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id])
  return useRequest(request);
}

export const PlanetInfo = ({ id }) => {
  const [planetId, setPlanetId] = useState(id);
  const {data, loading, error} = usePlanetInfo(planetId);
  return (
    <div>
      <div>
        <button onClick={() => setPlanetId((id) => id + 1)}>+</button>
        <button onClick={() => setPlanetId((id) => id - 1)}>-</button>
      </div>
        {error && <div>{planetId} - no planet</div>}
        {loading && <div>...loading</div>}
        {data && <div>{planetId} - {data.name}</div>}
    </div>
  )
}