import React from 'react';
import { swapi } from './../../Servises/swapiServises';
import { ItemDetails, Record } from './../ItemDetails/ItemDetails'

const {
  getPerson,
  getPlanet,
  getStarship,
} = swapi;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      getData={getPerson} itemId={itemId}
      imageURL='characters' >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      getData={getPlanet} itemId={itemId}
      imageURL='planets' >

      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      getData={getStarship} itemId={itemId}
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