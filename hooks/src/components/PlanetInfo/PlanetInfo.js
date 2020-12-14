import React, {useState, useEffect} from 'react';

export const PlanetInfo = ({ id }) => {
  const [name, setName] = useState(null);
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => setName(data.name)) 
  }, [id])
  return (
    <div>
      {name ? name : 'loading'} - planet name
    </div>
  )
}