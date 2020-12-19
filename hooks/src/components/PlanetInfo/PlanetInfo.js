import React, {useState, useEffect, useCallback} from 'react';


const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
  .then(res => res.json())
  .then(data => data)
}

const useRequest = (request) => {
  const [dataState, setDataState] = useState(null);
  useEffect(() => {
    let cancelled = false;
    request().then(data => !cancelled && setDataState(data))
    return () => cancelled = true;
  }, [request])
  return dataState;
}

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id])
  return useRequest(request)
}

export const PlanetInfo = ({ id }) => {
  const [planetId, setPlanetId] = useState(id);
  const data = usePlanetInfo(planetId);
  return (
    <div>
      <div>
        <button onClick={() => setPlanetId((id) => id + 1)}>+</button>
        <button onClick={() => setPlanetId((id) => id - 1)}>-</button>
      </div>
      {data ? `${planetId} - ${data.name}` : `${planetId} - no planet`} - planet name
    </div>
  )
}