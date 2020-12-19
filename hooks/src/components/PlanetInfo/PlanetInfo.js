import React, {useState, useEffect} from 'react';

const usePlanetInfo = (id) => {
  const [name, setName] = useState(null);
  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setName(data.name))
    return () => cancelled = true;
  }, [id])
  return name;
}

export const PlanetInfo = ({ id }) => {
  const [planetId, setPlanetId] = useState(id);
  const name = usePlanetInfo(planetId);
  return (
    <div>
      <div>
        <button onClick={() => setPlanetId((id) => id + 1)}>+</button>
        <button onClick={() => setPlanetId((id) => id - 1)}>-</button>
      </div>
      {name ? `${planetId} - ${name}` : `${planetId} - no planet`} - planet name
    </div>
  )
}