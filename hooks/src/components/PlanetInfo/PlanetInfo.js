import React, {useState, useEffect} from 'react';

export const PlanetInfo = () => {
  const [name, setName] = useState(null);
  const [planetId, setPlanetId] = useState(3);
  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.dev/api/planets/${planetId}`)
      .then(res => res.json())
      .then(data => !cancelled && setName(data.name))
    return () => cancelled = true;
  }, [planetId])
  return (
    <div>
      <div>
        <button onClick={() => setPlanetId((s) => s + 1)}>+</button>
        <button onClick={() => setPlanetId((s) => s - 1)}>-</button>
      </div>
      {name ? `${planetId} - ${name}` : `${planetId} - no planet`} - planet name
    </div>
  )
}