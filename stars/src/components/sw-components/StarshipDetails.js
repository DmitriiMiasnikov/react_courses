import React from 'react';
import { WithSwapiService } from '../hoc-helpers/WithSwapiService';
import { ItemDetails, Record } from '../ItemDetails/ItemDetails';

const StarshipDetails = (props) => {
  return (
    <ItemDetails
      {...props}
      imageURL='starships' >

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship
  }
}

export default WithSwapiService(mapMethodsToProps)(StarshipDetails)