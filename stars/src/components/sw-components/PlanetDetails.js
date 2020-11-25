import React from 'react';
import { ItemDetails, Record } from '../ItemDetails/ItemDetails';
import { WithSwapiService } from './../hoc-helpers/WithSwapiService';

const PlanetDetails = (props) => {
  return (
    <ItemDetails
      {...props}
      imageURL='planets' >

      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanet
  }
}
export default WithSwapiService(mapMethodsToProps)(PlanetDetails)