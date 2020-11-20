import React from 'react';
import { swapi } from './../../Servises/swapiServises';
import { ItemDetails, Record } from './../ItemDetails/ItemDetails'

const {
  getPerson,
  getPlanet,
  getStarship,
} = swapi;

const PersonDetails = () => {
  return (
    <ItemDetails
      getData={getPerson}
      imageURL='characters' >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const PlanetDetails = () => {
  return (
    <ItemDetails
      getData={getPlanet}
      imageURL='planets' >

      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = () => {
  return (
    <ItemDetails
      getData={getStarship}
      imageURL='starship' >

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};